<script lang="ts">
    import {storeWeights} from '../../Store/store';
    import ProgressChart from '../../ProgressChart.svelte';

    let weights: WeightEntryType[];
    storeWeights.subscribe(value => {
        weights = value;
    });
    let latestWeightEntry = weights[weights.length - 1];

</script>

<div class="flex-column align-center justify-center d-flex">
    <span>most recent weight:</span>
    <h3>{latestWeightEntry.weight} Kg</h3>
    <h5>on {latestWeightEntry.date.toLocaleDateString('en-GB').replaceAll('/','.')}</h5>
    <br/>
    <ProgressChart amountOfMonths={3}/>
</div>

<style>
    span {
        margin-top: 16px;
    }
    h3 {
        padding: 8px;
    }
</style>
