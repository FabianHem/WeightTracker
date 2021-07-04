<script lang="ts">
    import {Icon, Button, Dialog, TextField} from 'svelte-materialify';
    import {mdiPlusThick} from '@mdi/js';
    import {storeWeights} from '../Store/store';
    import {onMount} from 'svelte';
    import {Datepicker} from 'svelte-mui';

    let weights;
    storeWeights.subscribe(value => {
        weights = value;
    });

    // Form
    let enteredWeight: number | null;
    let date = new Date();
    date.setDate(date.getDate() + 2);

    function initializeForm() {
        enteredWeight = null;
    }

    // Dialogue
    let dialog1Active = false;
    let dialog2Active = false;

    const switchDialog1Active = () => dialog1Active = !dialog1Active;
    const switchDialog2Active = () => dialog2Active = !dialog2Active;

    function addWeightEntry() {
        // TODO add date-logic

        storeWeights.update(oldEntries => oldEntries.push({}));
    };

    onMount(async () => {
        initializeForm();
    });

</script>

<Button fab size="large" class="white red-text" style="position: absolute; bottom: 16px; right: 16px;"
        on:click={switchDialog1Active}>
    <Icon path={mdiPlusThick}/>
</Button>

<Dialog class="pa-4" bind:active={dialog1Active}>
    <h4 style="padding-bottom: 8px">Add new Entry</h4>
    <TextField value={enteredWeight} outlined>Weight</TextField>
    <Button on:click={switchDialog2Active}>datepick</Button>
    <Button on:click={switchDialog1Active}>Go</Button>
</Dialog>

<Dialog class="pa-4 dialog2" bind:active={dialog2Active} persistent>
    <Datepicker
            bind:value={date}
            isAllowed={(date) => {
                return date.getDay() > 0 && date.getDay() < 6;
            }}
            on:select={switchDialog2Active}
    />
</Dialog>
