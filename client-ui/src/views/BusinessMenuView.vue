<template>
  <div id="businessMenu">
    <BusinessMenu></BusinessMenu>
  </div>
</template>

<script>
import BusinessMenu from '@/components/BusinessMenu.vue';

export default {
    name: 'businessMenu',
    components: {
        BusinessMenu,
    },
};
</script>

<style scoped>
#businessMenu {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}
</style>
