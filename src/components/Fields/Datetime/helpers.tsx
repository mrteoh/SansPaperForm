export const formatDateTime = (time: string) => {
  let parsedDate = new Date(Date.parse(time));

  let hrs = parsedDate.getHours();
  let mins = parsedDate.getMinutes();

  let ampm = hrs >= 12 ? 'pm' : 'am';
  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;
  mins = mins < 10 ? '0' + mins : mins;

  let day = parsedDate.getDate();
  let month = parsedDate.getMonth() + 1;
  let year = parsedDate.getFullYear();
  const dateFormat = year + '-' + month + '-' + day;
  const timeFormat = hrs + ':' + mins + ' ' + ampm;
  return {timeFormat, dateFormat};
};
