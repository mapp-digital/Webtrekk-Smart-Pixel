<template>
    <div>
        <p v-webtrekk.session="wtSession">test</p>
        <p v-webtrekk.page="wtPage">test</p>
        <p v-webtrekk.action="wtAction">test</p>
        <p v-webtrekk.campaign="wtCampaign">test</p>
        <p v-webtrekk.customer="wtCustomer">test</p>
        <p v-webtrekk.product="{id:'testproduct'}">test</p>
        <p v-webtrekk.products="[{id:'testproduct'}]">test</p>
        <p v-webtrekk.order="wtOrder">test</p>
        <p v-webtrekk.deactivateAutoTracking="true">test</p>
        <p v-webtrekk.notValid="'test'">test</p>
    </div>
</template>

<script>
    import wt from './../../src/lib/WebtrekkSmartPixelVue';
    import {
            wtPage,
            wtSession,
            wtAction,
            wtCampaign,
            wtCustomer,
            wtOrder,
    } from './../data/testData';
    export default {
        name: 'directive-modifiers',
        data: function() {
            return {
                wtSession,
                wtPage,
                wtAction,
                wtCampaign,
                wtCustomer,
                wtOrder
            };
        }
    };
</script>