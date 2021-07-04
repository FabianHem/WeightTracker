<script lang="ts">
    import {AppBar, Tabs, Tab, Window, WindowItem} from 'svelte-materialify';

    import Start from './Tabs/Start.svelte';
    import History from './Tabs/History.svelte';
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
                <Tab>History</Tab>
                <Tab>Weeks</Tab>
            </div>
        </Tabs>
    </div>
</AppBar>

<Window value={tabIndex}>
    <WindowItem>
        <Start/>
    </WindowItem>
    <WindowItem>
        <History/>
    </WindowItem>
    <WindowItem>
        <Weeks/>
    </WindowItem>
</Window>

<AddWeight />
