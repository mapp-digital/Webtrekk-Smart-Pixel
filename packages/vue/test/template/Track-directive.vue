<template>
    <div>
        <p v-webtrekk.track="false">track</p>
        <p v-webtrekk.track="{track: true}">track</p>

        <p v-webtrekk.trackPage="true">track</p>
        <p v-webtrekk.trackPage="{trackPage:false}">track</p>
        <p v-webtrekk.trackAction="true">trackAction</p>
        <p v-webtrekk.trackAction="{trackAction:true}">trackAction</p>
    </div>
</template>

<script>
    export default {
        name: 'track-directive'
    };
</script>