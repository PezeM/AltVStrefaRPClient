<template>
  <div class="town-hall-taxes-page">
    <h1>Taxes page</h1>
  </div>
</template>

<script>
export default {
    name: 'townHallTaxesPage',
    props: {
        data: {
            type: Object,
        },
    },
    mounted() {
        this.$emit('update-menu-name', 'Podatki i finanse');
    },
};
</script>

<style scoped>
</style>
