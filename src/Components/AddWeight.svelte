<script lang="ts">
    import {Icon, Button, Dialog, TextField} from 'svelte-materialify';
    import {mdiPlusThick} from '@mdi/js';
    import {storeWeights} from '../Store/store';
    import {onMount} from 'svelte';
    import {Datepicker} from 'svelte-mui';
    import formatDate from '../util/formatDate';

    let weights;
    storeWeights.subscribe(value => {
        weights = value;
    });

    // Form
    let enteredWeight: number | null;
    let date = new Date();

    function initializeForm() {
        enteredWeight = null;
    }

    // Dialogue
    let dialog1Active = false;
    let dialog2Active = false;

    const switchDialog1Active = () => dialog1Active = !dialog1Active;
    const switchDialog2Active = () => dialog2Active = !dialog2Active;
    const onSelectDate = (e) => {
        date = new Date(Date.parse(e.detail));

        switchDialog2Active();
    };

    function onSubmitForm() {
        // TODO make form check vals etc
        switchDialog1Active();
        addWeightEntry();
    }

    function addWeightEntry() {
        storeWeights.update(oldEntries => [...oldEntries, {
            weight: parseFloat(enteredWeight),
            date,
            comment: 'no comment TODO',
        }]);
    };

    onMount(async () => {
        initializeForm();
    });

    const weightEntryRules = [
        (v) => !!v || 'Required',
        // (v) => /^\d{1,3}(\.\d*){0,1}$/.test(v), 'not valid'
    ];
    // TODO add weightentry rule
    // TODO add comment function

</script>

<Button fab size="large" class="white red-text" style="position: absolute; bottom: 16px; right: 16px;"
        on:click={switchDialog1Active}>
    <Icon path={mdiPlusThick}/>
</Button>

<Dialog class="pa-4" bind:active={dialog1Active} persistent>
    <h4 style="padding-bottom: 8px">Add new Entry</h4>
    <TextField bind:value={enteredWeight} rules={weightEntryRules}>Weight</TextField>
    <h4>{formatDate(date)}</h4>
    <Button on:click={switchDialog2Active}>Change Date</Button>
    <br/>
    <Button on:click={onSubmitForm}>Okay</Button>
</Dialog>

<Dialog class="pa-4 dialog2" bind:active={dialog2Active} persistent>
    <Datepicker
            bind:value={date}
            isAllowed={(date) => {
            return date.getDay() > 0 && date.getDay() < 6;
            }}
            on:select={onSelectDate}
    />
</Dialog>
