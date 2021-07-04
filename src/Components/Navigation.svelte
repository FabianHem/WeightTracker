<script lang="ts">
    import {AppBar, Tabs, Tab, Window, WindowItem} from 'svelte-materialify';

    import Start from './Tabs/Start.svelte';
    import List from './Tabs/List.svelte';
    import Weeks from './Tabs/Weeks.svelte';

    import AddWeight from './AddWeight.svelte';

    let tabIndex = 0;

    // todo add stuff to make user be able to swipe to get to other tabs
    //  maybe add https://github.com/SharifClick/svelte-swipe
    /*

    import {Swipe, SwipeItem} from 'svelte-swipe';
    const swipeConfig = {
        autoplay: false,
        delay: 0,
        showIndicators: true,
        transitionDuration: 0,
        defaultIndex: 0,
    };
     */
</script>

<AppBar>
    <span slot="title">Weighttracker</span>
    <div slot="extension">
        <Tabs class="green-text" bind:value={tabIndex} fixedTabs>
            <div slot="tabs">
                <Tab>Start</Tab>
                <Tab>List</Tab>
                <Tab>Weeks</Tab>
            </div>
        </Tabs>
    </div>
</AppBar>

<Window {value}>
    <WindowItem>
        <Start/>
    </WindowItem>
    <WindowItem>
        <List/>
    </WindowItem>
    <WindowItem>
        <Weeks/>
    </WindowItem>
</Window>

<AddWeight />
