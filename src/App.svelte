<script lang="ts">
	import { AppBar, Button, Icon, Menu, ListItem, MaterialAppMin, Tabs, Tab, } from 'svelte-materialify';

	let value = 0;
</script>

<!-- TODO maybe add https://github.com/SharifClick/svelte-swipe for swiping -->

<MaterialAppMin theme='dark'>
	<AppBar>
		<span slot="title">Weighttracker</span>
		<div slot="extension">
			<Tabs class="green-text" bind:value fixedTabs>
				<div slot="tabs">
					<Tab>Start</Tab>
					<Tab>List</Tab>
					<Tab>Weeks</Tab>
				</div>
			</Tabs>
		</div>
	</AppBar>
</MaterialAppMin>

<style>
</style>
