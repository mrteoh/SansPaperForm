export const formatTime = (time: string) => {
  let parsedDate = new Date(Date.parse(time));

  let hrs = parsedDate.getHours();
  let mins = parsedDate.getMinutes();

  let ampm = hrs >= 12 ? 'pm' : 'am';
  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;
  mins = mins < 10 ? '0' + mins : mins;

  const timeFormat = hrs + ':' + mins + ' ' + ampm;
  return timeFormat;
};
