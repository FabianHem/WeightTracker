<script>
  import {ListItem} from 'svelte-materialify';

  export let weights;

  let calendarWeekMap = new Map();
  let calendarKeysInOrder = [];


  const getISOWeekNumber = (date) => {
    const d = new Date(date);
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return [d.getUTCFullYear(), weekNo];
  }

  weights.map(weight => {
    const key = `${weight.date.getFullYear()} - W${getISOWeekNumber(weight.date)}: `;
    if (calendarWeekMap[key] === undefined) {
      calendarWeekMap[key] = [weight];
      calendarKeysInOrder.push(key);
      return;
    }
    calendarWeekMap[key] = [...calendarWeekMap[key], weight];
  });

  calendarKeysInOrder.sort((a, b) => b.localeCompare(a));

  const weekWeights = calendarKeysInOrder.map(key => {
    const weekEntries = calendarWeekMap[key];
    const weightAverage = (weekEntries.reduce((a, b) => a + b.weight, 0)) / weekEntries.length;
    return {
      week: key,
      weight: weightAverage
    };
  });
</script>

{#each weekWeights as week}
    <ListItem>
        {week.week} - {week.weight.toFixed(1)} Kg
    </ListItem>
{/each}
