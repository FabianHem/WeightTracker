<script lang="ts">
    import {storeWeights} from '../../Store/store';
    import WeightEntry from '../WeightEntry.svelte';

    let weights: WeightEntryType[];
    storeWeights.subscribe(value => {
        weights = value;
    });
</script>

<h3>History</h3>
{#each weights as weightEntryProp}
    <WeightEntry weightEntry={weightEntryProp}/>
{/each}

<style>

</style>
