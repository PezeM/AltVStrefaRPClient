<template>
    <div id="emptyRoute" @click="onClick"></div>
</template>

<script>
export default {
    name: 'empty',
    methods: {
        onClick() {
            console.log(`On click inside Empty.vue`);
        },
    },
};
</script>

<style scoped>
#emptyRoute {
    height: 100vh;
}
</style>
