 
import type { Habit } from "../types/habit";
import {
  formatDayName,
  getWeekDays,
  isToday,
  formatDate,
} from "../utils/dates";

type HabitGridProps = {
  habits: Habit[];
  currentWeek: Date;
  checks: Record<string, Record<string, boolean>>;
  onToggle: (date: string, habitId: string) => void;
};

function HabitGrid({
  habits,
  currentWeek,
  checks,
  onToggle,
}: HabitGridProps) {
  const weekDays = getWeekDays(currentWeek);

  return (
    <div className="overflow-x-auto rounded-2xl border bg-white">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="px-4 py-4 text-left">Habit</th>

            {weekDays.map((day) => (
              <th
                key={day.toISOString()}
                className={`px-4 py-4 text-center text-sm font-semibold ${
                  isToday(day)
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600"
                }`}
              >
                <div>{formatDayName(day)}</div>
                <div className="text-xs">
                  {day.getDate()}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {habits.map((habit) => (
            <tr key={habit.id} className="border-b">
              <td className="px-4 py-4 font-medium">
                {habit.name}
              </td>

              {weekDays.map((day) => {
                const dateKey = formatDate(day);

                const isChecked =
                  checks?.[dateKey]?.[habit.id] || false;

                return (
                  <td
                    key={day.toISOString()}
                    className={`px-4 py-4 text-center ${
                      isToday(day)
                        ? "bg-blue-50"
                        : ""
                    }`}
                  >
                    <button
                      onClick={() =>
                        onToggle(dateKey, habit.id)
                      }
                      className={`mx-auto h-6 w-6 rounded-md border transition ${
                        isChecked
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300"
                      }`}
                    >
                      {isChecked ? "✓" : ""}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HabitGrid;