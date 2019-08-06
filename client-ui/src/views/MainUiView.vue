<template>
  <div class="main-ui-view">
    <div class="container-fluid">
      <circle-menu />
      <notification-component />
    </div>
  </div>
</template>

<script>
import CircleMenu from '@/components/Ui/CircleMenu.vue';
import NotificationComponent from '@/components/Ui/NotificationComponent.vue';

export default {
    name: 'mainUiView',
    components: {
        CircleMenu,
        NotificationComponent,
    },
};
</script>


<style scoped>
#main-ui-view {
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>

