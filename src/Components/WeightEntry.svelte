<script lang="ts">
    import formatDate from '../util/DateUtil';
    import {ListItem, Icon, Button, ListGroup} from 'svelte-materialify';
    import {mdiPencilOutline, mdiDelete} from '@mdi/js';

    export let weightEntry;
    export let onEdit;
    export let onDelete;

    let commentOpen = false;
    const switchCommentOpen = () => commentOpen = !commentOpen;
</script>

<ListGroup bind:active={commentOpen}>
    <span slot="activator">{formatDate(weightEntry.date)} - {weightEntry.weight} Kg</span>
    <span slot="append">
        <!--
        TODO add/activate edit function, should probably share logic with AddWeight stuff
        <Button icon on:click={(e) => onEdit(e, weightEntry)}>
            <Icon path={mdiPencilOutline}/>
        </Button>
        -->
        <span style="margin-right: 16px"/>
        <Button icon class="red-text" on:click={(e) => onDelete(e, weightEntry)}>
            <Icon path={mdiDelete}/>
        </Button>
      </span>
    <ListItem on:click={switchCommentOpen}>
        <h5>Comment</h5>
        <span>{weightEntry.comment}</span>
    </ListItem>
</ListGroup>
