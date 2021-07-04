<script lang="ts">
    import {storeWeights} from '../../Store/store';
    import WeightEntry from '../WeightEntry.svelte';

    let weights: WeightEntryType[];
    storeWeights.subscribe(value => {
        weights = value;
    });
</script>

<div class="d-flex flex-column justify-center align-stretch">
    <h3>History</h3>
    {#each weights as weightEntryProp}
        <WeightEntry weightEntry={weightEntryProp}/>
    {/each}
</div>

<style>
    h3 {
        align-self: center;
        padding: 8px;
    }
</style>
