<template>
    <div>
        <p v-webtrekk></p>
    </div>
</template>

<script>
    export default {
        name: 'default-argument-tests',
        data: function() {
            return {
                extensionReturnValue: 'something'
            };
        },
        mounted() {
            const wtSmart = this.$webtrekk;
            wtSmart.init();
            wtSmart.advanced();
            wtSmart.page();
            wtSmart.action();
            wtSmart.session();
            wtSmart.campaign();
            wtSmart.customer();
            wtSmart.product();
            wtSmart.products();
            wtSmart.order();
            wtSmart.extension();
            wtSmart.extension(false);
            wtSmart.track();
            wtSmart.trackPage();
            wtSmart.trackAction();
        }
    };
</script>