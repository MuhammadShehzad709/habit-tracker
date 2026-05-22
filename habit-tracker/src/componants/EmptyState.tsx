function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
      <div className="text-5xl">📅</div>

      <h2 className="mt-4 text-2xl font-bold text-gray-800">
        No habits yet
      </h2>

      <p className="mt-2 text-gray-500">
        Start building consistency by adding your first habit.
      </p>
    </div>
  );
}

export default EmptyState;