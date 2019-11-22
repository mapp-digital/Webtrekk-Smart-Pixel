<template>
    <div>
        <p v-webtrekk.customer="{id:'test', telephone: '123', validation: false}"></p>
    </div>
</template>

<script>
    export default {
        name: 'customer-validation-directive'
    };
</script>