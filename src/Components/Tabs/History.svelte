<script lang="ts">
    import {storeWeights} from '../../Store/store';
    import WeightEntry from '../WeightEntry.svelte';
    import {Dialog, Button} from 'svelte-materialify';
    import formatDate from '../../util/DateUtil';

    let weights: WeightEntryType[];
    storeWeights.subscribe(value => {
        weights = value;
    });

    const onEdit = (e, date) => {
        e.stopPropagation();
        selectedDate = date;
        switchEditOpen();
    };

    const onDelete = (e, date) => {
        e.stopPropagation();
        selectedDate = date;
        switchDeleteOpen();
    };

    const deleteCurrentlySelectedDate = () => {
        storeWeights.update(oldEntries => [...oldEntries].filter(entry => entry.date !== selectedDate));
        selectedDate = '';
        switchDeleteOpen();
    };

    let editDialogOpen = false;
    let deleteDialogOpen = false;

    const switchEditOpen = () => editDialogOpen = !editDialogOpen;
    const switchDeleteOpen = () => deleteDialogOpen = !deleteDialogOpen;

    let selectedDate = '';
</script>

<div class="d-flex flex-column justify-center align-stretch">
    <h3>History</h3>
    {#each weights as weightEntryProp}
        <WeightEntry weightEntry={weightEntryProp} onEdit={onEdit} onDelete={onDelete}/>
    {/each}
</div>

<Dialog class="pa-4" bind:active={editDialogOpen}>
    Edit stuff:
</Dialog>

<Dialog class="pa-4" bind:active={deleteDialogOpen}>
    <p>Sure to delete the entry for {formatDate(selectedDate)}?</p>
    <Button on:click={switchDeleteOpen}>Cancel</Button>
    <Button on:click={deleteCurrentlySelectedDate}>Delete</Button>
</Dialog>

<style>
    h3 {
        align-self: center;
        padding: 8px;
    }
</style>
