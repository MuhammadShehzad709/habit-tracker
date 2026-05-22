import { useState } from "react";

type HabitFormProps = {
  onAddHabit: (habitName: string) => void;
};

function HabitForm({ onAddHabit }: HabitFormProps) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!habitName.trim()) return;

    onAddHabit(habitName);

    setHabitName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="text"
        placeholder="Enter a habit..."
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
      />

      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Add Habit
      </button>
    </form>
  );
}

export default HabitForm;