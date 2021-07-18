<script>
    import {ListItem} from 'svelte-materialify';
    import {getDateFromSeconds} from '../../util/DateUtil';

    export let weights;

    let calendarWeekMap = new Map();
    let calendarKeysInOrder = [];
    weights.map(weight => {
        const key = `${getDateFromSeconds(weight.date.seconds).getFullYear()} - W${getDateFromSeconds(weight.date.seconds).getWeek()}: `;
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
