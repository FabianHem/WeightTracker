<script lang="ts">
    import formatDate from '../util/formatDate';
    import {ListItem, Icon} from 'svelte-materialify';
    import {mdiPencilOutline, mdiDelete} from '@mdi/js';

    /*
        use export to declare a field to be props
    */
    export let weightEntry: WeightEntryType;
</script>

<ListItem>
    {formatDate(weightEntry.date)} - {weightEntry.weight} Kg
    <span slot="append">
        <Icon path={mdiPencilOutline}/>
        <Icon path={mdiDelete}/>
      </span>
</ListItem>

<style>

</style>
