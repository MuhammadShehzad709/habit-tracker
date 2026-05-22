import { useEffect, useState } from "react";
import type { Habit } from "./types/habit";
import Layout from "./componants/Layout";
import HabitForm from "./componants/HabitForm";
import EmptyState from "./componants/EmptyState";
import HabitGrid from "./componants/HabitGrid";
 

type CheckMap = {
  [date: string]: {
    [habitId: string]: boolean;
  };
};

function App() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [currentWeek] = useState(new Date());

  const [checks, setChecks] = useState<CheckMap>(() => {
    const saved = localStorage.getItem("habit-data");

    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.checks || {};
    }

    return {};
  });

  // LOAD habits from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("habit-data");

    if (saved) {
      const parsed = JSON.parse(saved);
      setHabits(parsed.habits || []);
    }
  }, []);

  // SAVE habits + checks to localStorage
  useEffect(() => {
    localStorage.setItem(
      "habit-data",
      JSON.stringify({
        habits,
        checks,
      })
    );
  }, [habits, checks]);

  // Add habit
  const addHabit = (habitName: string) => {
    const newHabit: Habit = {
      id: crypto.randomUUID(),
      name: habitName,
    };

    setHabits((prev) => [...prev, newHabit]);
  };

  // Delete habit
  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  // Rename habit
  const renameHabit = (id: string, newName: string) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id ? { ...h, name: newName } : h
      )
    );
  };

  // Toggle checkbox
  const toggleCheck = (date: string, habitId: string) => {
    setChecks((prev) => {
      const dayData = prev[date] || {};

      return {
        ...prev,
        [date]: {
          ...dayData,
          [habitId]: !dayData[habitId],
        },
      };
    });
  };

  return (
    <Layout>
      <HabitForm onAddHabit={addHabit} />

      {habits.length === 0 ? (
        <EmptyState />
      ) : (
        <HabitGrid
          habits={habits}
          currentWeek={currentWeek}
          checks={checks}
          onToggle={toggleCheck}
        />
      )}
    </Layout>
  );
}

export default App;