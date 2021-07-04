<script lang="ts">
    import formatDate from '../util/formatDate';
    import {ListItem, Icon} from 'svelte-materialify';
    import {mdiPencilOutline, mdiDelete} from '@mdi/js';

    export let weightEntry: WeightEntryType;
</script>

<ListItem>
    {formatDate(weightEntry.date)} - {weightEntry.weight} Kg
    <span slot="append">
        <Icon path={mdiPencilOutline} style="margin-right: 16px"/>
        <Icon path={mdiDelete}/>
      </span>
</ListItem>

<style>

</style>
