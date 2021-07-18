<script>
    import { db, auth } from './../util/firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';
    import {Button} from 'svelte-materialify';
    import {authState} from 'rxfire/auth';

    export let uid;

    let unsubscribeToThings;

    const query = db.collection('things').where('uid', '==', uid);
    const todos = collectionData(query, 'name').pipe(startWith([]));

    const addThing = () => {
        db.collection('weights').add({
          uid,
          namer: 'fakeThing',
          createdAt: new Date()
      })
    }

</script>

<style>
    input { display: block }
</style>

<Button on:click={addThing}>addSmth</Button>
{#each $todos as todo}
    <span on:click={() => console.log(todo)}>hi {todo.namer}</span>

{/each}
