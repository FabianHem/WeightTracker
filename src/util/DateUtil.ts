// TODO fix TS import in rollup config
export default (date) => getDateFromSeconds(date.seconds).toLocaleDateString('en-GB').replaceAll('/', '.');
// @ts-ignore
export const datesAreOnSameDay = (first, second) =>
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate();

export const getDateFromSeconds = (seconds) => new Date(seconds * 1000);
