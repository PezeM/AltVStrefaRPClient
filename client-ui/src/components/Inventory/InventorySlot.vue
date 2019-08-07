<template>
  <div
    class="slot-content isDraggable"
    v-bind:class="{ withItem: item != null }"
    v-bind:data-itemId="item != null ? item.id : 0"
  >
    <div v-if="item != null">
      {{ item.name }}
      <br />
      {{ item.slotId }} - Q: {{ item.quantity }}
    </div>
    <div v-else>Item</div>
  </div>
</template>

<script>
export default {
    name: 'inventorySlot',
    props: {
        item: {
            type: Object,
        },
        withItem: {
            type: String,
        },
    },
};
</script>


<style scoped>
.slot-content {
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>
