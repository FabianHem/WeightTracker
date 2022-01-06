// TODO fix TS import in rollup config
export default (date) => getDateFromSeconds(date.seconds).toLocaleDateString('en-GB').replaceAll('/', '.');
export const formatDateToEuropean = (date) => date.toLocaleDateString('en-GB').replaceAll('/', '.');
export const getDateFromSeconds = (seconds) => new Date(seconds * 1000);
