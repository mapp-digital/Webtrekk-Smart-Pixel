<template>
    <section class='layout' v-webtrekk.page="webtrekkPageData">
        <h1>{{show.name}}</h1>
        <p>{{ showSummary }} </p>
        <img :src="show.image.medium"/>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        async asyncData({params}) {
            const show = await axios.get(`https://api.tvmaze.com/shows/${params.id}`);
            return {
                show: show.data,
            };
        },
        created() {
            this.$webtrekk.deactivateAutoTracking = true;
        },
        computed: {
            showSummary: function () {
                return this.show.summary.replace(/<[/]?[pb]>/g, '');
            },
            webtrekkPageData: function () {
                return {
                    // name: 'Show details: ' + this.show.name,
                    parameter: {
                        1: this.show.id + '',
                        3: this.show.type,
                        5: this.show.language,
                    },
                    category: {
                        1: this.show.genres[0],
                        2: this.show.genres[1],
                        3: this.show.genres[2],
                    },
                };
            },
        },
        mounted() {
            this.$webtrekk.track();
        }
    };
</script>

<style>
    .layout {
        margin: 20px;
        padding: 20px;
        border: 1px solid #ddd;
    }
</style>