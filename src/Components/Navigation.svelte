<script lang="ts">
    import {AppBar, Tabs, Tab, Window, WindowItem} from 'svelte-materialify';
    import {authState} from 'rxfire/auth';
    import { auth } from './../util/firebase';
    import Start from './Tabs/Start.svelte';
    import History from './Tabs/History.svelte';
    import Weeks from './Tabs/Weeks.svelte';
    import AddWeight from './AddWeight.svelte';
    import Authentication from './Authentication.svelte';

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


    let uid;
    const unsubscribe = authState(auth).subscribe(u => {
        uid = u.uid;
    });
</script>

<AppBar style="width: 100%">
    <div slot="title" class="d-flex" style="width: 100%;">
        <span>Tracker</span>
    </div>
    <div style="flex-grow:1"/>
    <Authentication/>
    <div slot="extension">
        {#if uid}
            <Tabs class="green-text" bind:value={tabIndex} fixedTabs>
                <div slot="tabs">
                    <Tab>Start</Tab>
                    <Tab>History</Tab>
                    <Tab>Weeks</Tab>
                </div>
            </Tabs>
        {/if}
    </div>
</AppBar>

{#if uid}
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

    <AddWeight uid={uid}/>
{:else}
<div style="width: 100%; height: 200px; display: flex; justify-content: center; align-items: center">
    Login to use app
</div>
{/if}
