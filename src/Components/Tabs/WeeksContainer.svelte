<script lang="ts">
    import {db} from '../../util/firebase';
    import Weeks from './Weeks.svelte';

    export let uid;

    let weights = [];

    db.collection('weights').where('uid', '==', uid).orderBy('date', 'desc').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    weights = [...weights, {
                      ...data,
                        date: data.date.toDate(),
                    }];
                });
            })
            .catch((error) => {
                console.log('Error getting docs: ', error);
            });

</script>

<div class="d-flex flex-column justify-center align-center">
    <h4>Weekly averages</h4>
    {#if weights.length > 0}
        <Weeks weights={weights}/>
    {/if}
</div>

<style>
    h4 {
        padding: 8px;
    }
</style>
