<script lang="ts">
    import {storeWeights} from '../../Store/store';
    import ProgressChart from '../../ProgressChart.svelte';

    let weights: WeightEntryType[];
    storeWeights.subscribe(value => {
        weights = value;
    });
    let latestWeightEntry = weights[weights.length - 1] ?? null;

</script>

<div class="flex-column align-center justify-center d-flex">
    {#if latestWeightEntry !== null}
        <span>most recent weight:</span>
        <h3>{latestWeightEntry.weight} Kg</h3>
        <h5>on {latestWeightEntry.date.toLocaleDateString('en-GB').replaceAll('/','.')}</h5>
        <br/>
        <ProgressChart amountOfMonths={3}/>
    {:else}
        <h3>No Data yet</h3>
        <span>Add an entry with the button on the bottom</span>
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
