<template>
    <div>

    <span v-webtrekk.page="'wtPage'"
          id="#element1">test</span>
        <p v-webtrekk.action="'wtAction'">test</p>
        <p v-webtrekk.customer="'wtCustomer'">test</p>
        <p v-webtrekk.teaser_tracking="{selector: '#element1', data: {name:'p1'}}">select teaser</p>
        <p v-webtrekk.product_list_tracking="{selector: '#element1', data: {id:'p1', position: 1}}">select product</p>
        <p v-webtrekk.content_engagement="{selector: '#element1', data: {name:'p1'}}">select content</p>

    </div>
</template>

<script>
    import wt from './../../src/lib/WebtrekkSmartPixelVue';
    import { wtSession } from './../data/testData';

    export default {
        name: 'various-modifiers',
        data: function() {
            return {
                wtSession
            };
        },
        mounted() {
            this.$webtrekk.session(wtSession);
        }
    };
</script>