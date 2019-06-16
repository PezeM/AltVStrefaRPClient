<template>
  <div class="town-hall-navbar">
    <div class="row justify-content-between">
      <div class="col-6">
        <input type="text" class="form-control" placeholder="Wyszukaj...">
      </div>
      <div class="col-1">
        <button type="button" class="btn btn-danger close-button" @click="closeMenu">X</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    name: 'townHallNavbar',
    methods: {
        closeMenu() {
            alt.emit('closeFractionMenu');
        },
    },
};
</script>

<style scoped>
.town-hall-navbar {
    height: 100%;
    width: 100%;
    background-color: rgb(209, 209, 209);
    box-shadow: 0px 6px 3px -1px rgba(0, 0, 0, 0.125);
}

.close-button {
    border-radius: 0;
    border-top-right-radius: 6px;
}
</style>
