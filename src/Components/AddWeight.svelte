<script lang="ts">
    import {Icon, Button, Dialog, TextField, Textarea} from 'svelte-materialify';
    import {mdiPlusThick} from '@mdi/js';
    import {weights} from '../Store/weightStore';
    import {onMount} from 'svelte';
    import {Datepicker} from 'svelte-mui';
    import formatDate, {datesAreOnSameDay} from '../util/DateUtil';

    // Form
    let enteredWeight: number | null;
    let date = new Date();
    let comment = '';

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
        if (!enteredWeight || !date)
            return;

        switchDialog1Active();
        addWeightEntry();
    }

    function addWeightEntry() {
        // TODO This overwrites old entries for days if they already exist, maybe warn users about that
        weights.update(oldEntries =>
                [...oldEntries.filter(entry => !datesAreOnSameDay(entry.date, date)), {
                    weight: parseFloat(enteredWeight),
                    date,
                    comment,
                }].sort((a, b) => b.date - a.date));
    };

    onMount(async () => {
        initializeForm();
    });

    // TODO add this
    const weightEntryRules = [
        (v) => !!v || 'Required',
        // (v) => /^\d{1,3}(\.\d*){0,1}$/.test(v), 'not valid'
    ];
</script>

<Button fab size="large" class="white red-text" style="position: absolute; bottom: 16px; right: 16px;"
        on:click={switchDialog1Active}>
    <Icon path={mdiPlusThick}/>
</Button>

<Dialog class="pa-4 d-flex flex-column" bind:active={dialog1Active} persistent>
    <h4 style="padding-bottom: 8px">Add new Entry</h4>
    <br/>
    <TextField bind:value={enteredWeight} rules={weightEntryRules}>Weight</TextField>
    <br/>
    <h4>{formatDate(date)}</h4>
    <Button on:click={switchDialog2Active}>Change Date</Button>
    <br/>
    <h4>Comment</h4>
    <br/>
    <Textarea counter="150" bind:value={comment}>150 characters</Textarea>
    <div class="d-flex flex-row">
        <Button on:click={switchDialog1Active}>Cancel</Button>
        <div class="submit-div">
            <Button on:click={onSubmitForm} class="submit">Okay</Button>
        </div>
    </div>
</Dialog>

<Dialog class="pa-4" bind:active={dialog2Active} persistent>
    <Datepicker
            bind:value={date}
            isAllowed={(date) => {
            return date.getDay() > 0 && date.getDay() < 6;
            }}
            on:select={onSelectDate}
    />
</Dialog>

<style>
    .submit-div {
        flex: 1;
        padding: 0 4px !important;
    }

    .submit-div :global(.submit) {
        width: 100%;
    }
</style>
