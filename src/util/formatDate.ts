// TODO fix TS import in rollup config
export default (date) => date.toLocaleDateString('en-GB').replaceAll('/','.')
