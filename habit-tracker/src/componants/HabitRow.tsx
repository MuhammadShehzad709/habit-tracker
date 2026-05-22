import { useState } from "react";
import type { Habit } from "../types/habit";
type HabitRowProps = {
  habit: Habit;
  onDelete: (id: string) => void;
  onRename: (id: string, newName: string) => void;
};

function HabitRow({
  habit,
  onDelete,
  onRename,
}: HabitRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(habit.name);

  const handleSave = () => {
    if (!editedName.trim()) return;

    onRename(habit.id, editedName);

    setIsEditing(false);
  };

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            />
          ) : (
            <h2 className="text-lg font-medium text-gray-800">
              {habit.name}
            </h2>
          )}
        </div>

        <div className="flex items-center gap-2">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-300"
            >
              Edit
            </button>
          )}

          <button
            onClick={() => onDelete(habit.id)}
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default HabitRow;