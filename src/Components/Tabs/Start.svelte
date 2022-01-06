<script lang="ts">
    import {collectionData} from 'rxfire/firestore';
    import ProgressChart from '../../ProgressChart.svelte';
    import {startWith} from 'rxjs/operators';
    import {db} from '../../util/firebase';

    export let uid;

    const queryLatest = db.collection('weights').where('uid', '==', uid).orderBy('date', 'desc').limit(1);
    const latestWeightEntry = collectionData(queryLatest, 'id').pipe(startWith([]));

    // TODO fetch all weights only once, put it in a store and grab i from there instead of getting it from firebase everytime
    $: weights = [];
    db.collection('weights').where('uid', '==', uid).orderBy('date', 'desc').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                weights = [...weights, {
                    ...data,
                    date: data.date.toDate()
                }];
            });
        })
        .catch((error) => {
            console.log('Error getting docs: ', error);
        });

    const formatDateToEuropean = (date) => date.toLocaleDateString('en-GB').replaceAll('/', '.');
</script>

<div class="flex-column align-center justify-center d-flex">
    {#if latestWeightEntry?.length}
        <h3>No Data yet</h3>
        <span>Add an entry with the button on the bottom</span>
    {:else}
        {#each $latestWeightEntry as entry}
            <span>most recent weight:</span>
            <h3>{entry.weight} Kg</h3>
            <h5>on {formatDateToEuropean(entry.date.toDate())}</h5>
            <br/>
            <ProgressChart weights={weights}/>
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
