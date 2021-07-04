<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/@carbon/charts/styles.min.css" />
</svelte:head>
<script>
    import {MaterialAppMin} from 'svelte-materialify';
    import Navigation from './Components/Navigation.svelte';

    // TODO where to put this?
    //  Get calendar weeks https://weeknumber.com/how-to/javascript
    Date.prototype.getWeek = function() {
        var date = new Date(this.getTime());
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        // January 4 is always in week 1.
        var week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                - 3 + (week1.getDay() + 6) % 7) / 7);
    }
</script>

<MaterialAppMin theme='dark'>
    <Navigation/>
</MaterialAppMin>

<style>
</style>
