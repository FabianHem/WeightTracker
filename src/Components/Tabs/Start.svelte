<script lang="ts">
    import {storeWeights} from '../../Store/store';

    let weights: WeightEntryType[];
    storeWeights.subscribe(value => {
        weights = value;
    });
    let latestWeightEntry = weights[weights.length - 1];
    import {LineChart} from '@carbon/charts-svelte';

    /*
    TODO fixme
    const datasetData3Months = weights.filter(weight => weight.date > (new Date().setMonth((Date().getMonth()) - 3))).map(weight => {
        return ({
            date: weight.date,
            value: weight.weight
        });
    });
     */

    const datasetData = weights.map(weight => {
        return ({
            date: weight.date,
            value: weight.weight
        });
    });
</script>

<h3>{latestWeightEntry.weight} Kg</h3>
<h5>on {latestWeightEntry.date.toLocaleDateString('en-GB').replaceAll('/','.')}</h5>
<br/>
<LineChart
        data={{
	"labels": [
	],
	"datasets": [{
	  "data": datasetData
	}],
        }}
        options={{
	"title": "Progress",
	"axes": {
		"left": {},
		"bottom": {
			"scaleType": "time"
		}
	},
	"legend": {
		"clickable": false
	},
	"height": "400px"
}}
/>


<style>

</style>
