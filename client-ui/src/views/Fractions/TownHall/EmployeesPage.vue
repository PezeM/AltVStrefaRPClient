<template>
  <div class="town-hall-employees-page">
    <h1>Employees page</h1>
  </div>
</template>

<script>
export default {
    name: 'townHallEmployeesPage',
    props: {
        data: {
            type: Object,
        },
    },
    mounted() {
        this.$emit('update-menu-name', 'Pracownicy');
    },
};
</script>

<style scoped>
</style>
