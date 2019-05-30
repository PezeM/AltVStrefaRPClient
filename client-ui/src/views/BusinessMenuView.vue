<template>
  <div id="businessMenu">
    <BusinessMenu :businessInfo="businessMenuInfo"></BusinessMenu>
  </div>
</template>

<script>
import BusinessMenu from '@/components/BusinessMenu.vue';

export default {
    name: 'businessMenu',
    components: {
        BusinessMenu,
    },
    props: {
        businessMenuInfo: Object,
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
    height: 100vh;
}
</style>
