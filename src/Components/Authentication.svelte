<script>
    import {onMount} from 'svelte';
    import auth from '../util/auth';
    import {user, isAuthenticated} from './../Store/authStore';
    import {Button} from 'svelte-materialify';

    let auth0Client;

    onMount(async () => {
        auth0Client = await auth.createClient();

        isAuthenticated.set(await auth0Client.isAuthenticated());
        user.set(await auth0Client.getUser());
    });

    function login() {
        auth.loginWithPopup(auth0Client);
    }

    function logout() {
        auth.logout(auth0Client);
    }

    function genRandom(length = 7) {
        var chars =
                '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }
</script>

<div>
    {#if $isAuthenticated && $user}
        <span>Hi {$user.name}</span>
        <Button on:click={logout}>Logout</Button>
    {:else}
        <Button on:click={login}>Login</Button>
    {/if}
</div>
