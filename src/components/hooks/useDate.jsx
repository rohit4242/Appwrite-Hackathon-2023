const useDate = (date) => {
  const fullDate = new Date(date.replaceAll("-", "/"));
  const year = fullDate.getFullYear();
  const month = fullDate.getMonth() + 1;
  const day = fullDate.getDate();

  const dateFormated =
    month.toString().padStart(2, "0") +
    "/" +
    day.toString().padStart(2, "0") +
    "/" +
    year;

  return dateFormated;
};

export default useDate;
