<script lang="ts">
    import WeightEntry from '../WeightEntry.svelte';
    import {Dialog, Button} from 'svelte-materialify';
    import formatDate from '../../util/DateUtil';
    import {db} from './../../util/firebase';
    import {collectionData} from 'rxfire/firestore';
    import {startWith} from 'rxjs/operators';

    export let uid;

    const onEdit = (e, weightEntry) => {
        e.stopPropagation();
        selectedEntry = weightEntry;
        switchEditOpen();
    };

    const onDelete = (e, weightEntry) => {
        e.stopPropagation();
        selectedEntry = weightEntry;
        switchDeleteOpen();
    };

    const deleteCurrentlySelectedEntry = () => {
        db.collection('weights').doc(selectedEntry.id).delete();
        selectedEntry = null;
        switchDeleteOpen();
    };

    let editDialogOpen = false;
    let deleteDialogOpen = false;

    const switchEditOpen = () => editDialogOpen = !editDialogOpen;
    const switchDeleteOpen = () => deleteDialogOpen = !deleteDialogOpen;

    let selectedEntry = null;

    const query = db.collection('weights').where('uid', '==', uid).orderBy('date', 'desc');
    const weights = collectionData(query, 'id').pipe(startWith([]));

</script>

<div class="d-flex flex-column justify-center align-stretch">
    <h3>History</h3>
    {#each $weights as weightEntryProp}
        <WeightEntry weightEntry={weightEntryProp} onEdit={onEdit} onDelete={onDelete}/>
    {/each}
</div>

<Dialog class="pa-4" bind:active={editDialogOpen}>
    Edit stuff:
</Dialog>

<Dialog class="pa-4" bind:active={deleteDialogOpen}>
    <p>Sure to delete the entry for {formatDate(selectedEntry)}?</p>
    <Button on:click={switchDeleteOpen}>Cancel</Button>
    <Button on:click={deleteCurrentlySelectedEntry}>Delete</Button>
</Dialog>

<style>
    h3 {
        align-self: center;
        padding: 8px;
    }
</style>
