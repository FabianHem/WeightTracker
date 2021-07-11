<script lang="ts">
    import formatDate from './../../util/DateUtil';
    import {weights} from '../../Store/weightStore';
    import ProgressChart from '../../ProgressChart.svelte';
<    import {Button} from 'svelte-materialify';
    import {user} from '../../Store/authStore';

    $: latestWeightEntry = $weights[0];

    /*
    const tryFetch = () => {
        fetch('https://weighttracker-1622.restdb.io/auth/jwt')
                .then(resp => console.log(resp))
                .catch(err => console.log(err));
    };
     */

</script>

<div class="flex-column align-center justify-center d-flex">

    {#if !latestWeightEntry}
        <h3>No Data yet</h3>
        <span>Add an entry with the button on the bottom</span>
    {:else}
        <span>most recent weight:</span>
        <Button on:click={tryFetch}>try fetching anything</Button>
        <h3>{latestWeightEntry.weight} Kg</h3>
        <h5>on {formatDate(latestWeightEntry.date)}</h5>
        <br/>
        <ProgressChart amountOfMonths={3}/>
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
