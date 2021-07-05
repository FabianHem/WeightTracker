<script lang="ts">
    import formatDate from './../../util/DateUtil';
    import {storeWeights} from '../../Store/store';
    import ProgressChart from '../../ProgressChart.svelte';

    let weights: WeightEntryType[];
    const unsubscribe = storeWeights.subscribe(value => {
        weights = value;
    });
    $: latestWeightEntry = weights[0];

    onDestroy(unsubscribe);
</script>

<div class="flex-column align-center justify-center d-flex">
    {#if !latestWeightEntry}
        <h3>No Data yet</h3>
        <span>Add an entry with the button on the bottom</span>
    {:else}
        <span>most recent weight:</span>
        <h3>{latestWeightEntry.weight} Kg</h3>
        <h5>on {formatDate(latestWeightEntry.date)}</h5>
        <br/>
        <ProgressChart amountOfMonths={3}/>
    {/if}
</div>

<style>
    span {
        margin-top: 16px;
    }

    h3 {
        padding: 8px;
    }
</style>
