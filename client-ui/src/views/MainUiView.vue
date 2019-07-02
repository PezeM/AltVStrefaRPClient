<template>
  <div class="main-ui-view">
    <div class="container-fluid">
      <div v-for="index in items" v-bind:key="index" class="row">
        <div class="col-12">
          <h1>Jakiś dłuższy testowy tekst eluwa {{ index }}</h1>
        </div>
      </div>
      <CircleMenu />
    </div>
  </div>
</template>

<script>
import CircleMenu from '@/components/Ui/CircleMenu.vue';

export default {
    name: 'mainUiView',
    components: {
        CircleMenu,
    },
    data() {
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        };
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

