export const secondsToDate = function(seconds) {
  const monthList = ["Jan", "Feb", "Mär", "Mai", "Apr", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

  let date = new Date(seconds * 1000);
  let month = date.getMonth();
  let day = date.getDate();
  let year = date.getFullYear();

  return day + ' ' + monthList[month] + ' ' + year;
}
