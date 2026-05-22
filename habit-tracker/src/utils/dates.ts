export const getStartOfWeek = (date: Date) => {
  const currentDate = new Date(date);

  const day = currentDate.getDay();

  const diff = day === 0 ? -6 : 1 - day;

  currentDate.setDate(currentDate.getDate() + diff);

  currentDate.setHours(0, 0, 0, 0);

  return currentDate;
};

export const getWeekDays = (date: Date) => {
  const startOfWeek = getStartOfWeek(date);

  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(startOfWeek);

    day.setDate(startOfWeek.getDate() + index);

    return day;
  });
};

export const formatDayName = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
  });
};

export const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

export const isToday = (date: Date) => {
  const today = new Date();

  return formatDate(today) === formatDate(date);
};