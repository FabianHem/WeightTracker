<script lang="ts">
    import formatDate from './../../util/DateUtil';
    import {collectionData} from 'rxfire/firestore';
    import ProgressChart from '../../ProgressChart.svelte';
    import {startWith} from 'rxjs/operators';
    import {db} from './../../util/firebase';

    export let uid;

    const query = db.collection('weights').where('uid', '==', uid).orderBy('date', 'desc').limit(1);
    const latestWeightEntry = collectionData(query, 'id').pipe(startWith([]));
</script>

<div class="flex-column align-center justify-center d-flex">
    {#if latestWeightEntry?.length}
        <h3>No Data yet</h3>
        <span>Add an entry with the button on the bottom</span>
    {:else}
        {#each $latestWeightEntry as entry}
            <span>most recent weight:</span>
            <h3>{entry.weight} Kg</h3>
            <h5>on {formatDate(entry.date)}</h5>
            <br/>
            <!--<ProgressChart amountOfMonths={3}/>-->
        {/each}
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
