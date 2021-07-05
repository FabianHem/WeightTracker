<script lang="ts">
    import {LineChart} from '@carbon/charts-svelte';
    import {storeWeights} from './Store/store';
    import {ButtonGroup, ButtonGroupItem} from 'svelte-materialify';
    import {onDestroy} from 'svelte';

    const getDateForFilter = () => {
        switch (displayIndex) {
            case 0:
                return new Date().setDate((new Date()).getDate() - 30 * 3);
            case 1:
                return new Date().setDate((new Date()).getDate() - 31 * 12);
            case 2:
                return 0;
        }
    };

    const getChartData = () => {
        datasetData = weights
                .filter(weight =>
                        weight.date > getDateForFilter()
                )
                .map(weight => {
                    if (weight.weight > max)
                        max = weight.weight;

                    if (weight.weight < min)
                        min = weight.weight;

                    return ({
                        date: weight.date,
                        value: weight.weight
                    });
                });
    };

    let weights: WeightEntryType[];
    const unsubscribe = storeWeights.subscribe(value => {
        weights = value;
    });

    let displayIndex = 0;
    let datasetData;
    let min = 200;
    let max = 0;

    getChartData();
    onDestroy(unsubscribe);
</script>

<ButtonGroup mandatory activeClass="red white-text" bind:value={displayIndex} on:change={getChartData}>
    <ButtonGroupItem>3 Months</ButtonGroupItem>
    <ButtonGroupItem>1 Year</ButtonGroupItem>
    <ButtonGroupItem>All Time</ButtonGroupItem>
</ButtonGroup>
<LineChart
        data={{
	        labels: [
	        ],
	        datasets: [{
	            "data": datasetData
	            }],
        }}
        options={{
	        title: "",
	        axes: {
	        	left: {
	        	  "domain": [
	        	    min - 15,
	        	    max + 15
	        	    ]
	        	},
	        	bottom: {
	        		scaleType: "time",
	        	},
	        },
	        legend: {
	        	"enabled": false
	        },
	        height: "250px"
}}
/>
