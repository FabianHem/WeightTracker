<script lang="ts">
    import {storeWeights} from '../../Store/store';
    import {ListItem} from 'svelte-materialify';
    import {onDestroy} from 'svelte';

    let weights: WeightEntryType[];
    const unsubscribe = storeWeights.subscribe(value => {
        weights = value;
    });

    let calendarWeekMap = new Map();
    let calendarKeysInOrder = [];
    weights.forEach(weight => {
        const key = `${weight.date.getFullYear()} - W${weight.date.getWeek()}: `;
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

    onDestroy(unsubscribe)
</script>

<div class="d-flex flex-column justify-center align-center">
    <h4>Weekly averages</h4>
    {#each weekWeights as week}
        <ListItem>
            {week.week} - {week.weight.toFixed(1)} Kg
        </ListItem>
    {/each}
</div>

<style>
    h4 {
        padding: 8px;
    }
</style>
