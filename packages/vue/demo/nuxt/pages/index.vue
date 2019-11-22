<template>
    <section>
        <ul v-for="show in shows"
            :key="show.id">
            <li>
                <nuxt-link :to="'/p/' + show.id">{{ show.name }}</nuxt-link>
            </li>
        </ul>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        async asyncData({params}) {
            const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
            return {
                shows: res.data.map(entry => entry.show),
            };
        },
    };
</script>


<style>
    h1,
    a {
        font-family: 'Arial';
    }

    ul {
        padding: 0;
    }

    li {
        list-style: none;
        margin: 5px 0;
    }

    a {
        text-decoration: none;
        color: blue;
    }

    a:hover {
        opacity: 0.6;
    }
</style>
