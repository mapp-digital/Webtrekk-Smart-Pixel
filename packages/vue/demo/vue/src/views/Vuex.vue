<template>
    <div class="about">
        <h1>VUEX store example</h1>
        <p>Click the buttons to mutate the state.</p>
        <p>
            The event trackrequest for adding a click is triggered right from within
            the action in the Vuex store.
        </p>
        <p>
            The event for removing a click is triggered in a Vuex plugin, that listens
            for the REMOVE_CLICK mutation.
        </p>
        <p>
            Use the plugin solution if you want to seperate the tracking logic from
            the logic within your Vuex actions.
        </p>
        <p>
            <button @click="addClick">Add click</button>
        </p>
        <p>
            <button @click="removeClick">Remove click</button>
        </p>
        <p>Current clicks: {{ clicks }}</p>
    </div>
</template>
<script>
    export default {
        computed: {
            clicks() {
                return this.$store.getters.getClicks;
            }
        },
        methods: {
            addClick() {
                this.$store.dispatch('addClick');
            },
            removeClick() {
                this.$store.dispatch('removeClick');
            }
        }
    };
</script>
