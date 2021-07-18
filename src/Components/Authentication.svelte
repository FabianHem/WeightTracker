<script>
    import {Button} from 'svelte-materialify';
    import {auth, googleProvider} from './../util/firebase';
    import {authState} from 'rxfire/auth';

    let user;
    const unsubscribe = authState(auth).subscribe(u => {
        user = u;
    });

    function login() {
        auth.signInWithPopup(googleProvider);
    }

    function logout() {
        auth.signOut()
    }

</script>

<div>
    {#if user}
        <span>Hi {user.displayName}</span>
        <Button on:click={logout}>Logout</Button>
    {:else}
        <Button on:click={login}>Login</Button>
    {/if}
</div>
