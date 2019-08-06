<template>
  <div class="row">
    <div class="inventory-container" v-bind:class="inventoryClass">
      <div class="row m-0 p-1">
        <div
          v-for="(item, index) in inventorySortedBySlotId"
          v-bind:key="index"
          v-bind:id="index"
          class="col-lg-2 col-md-4 inventory-slot"
        >
          <inventory-slot :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InventorySlot from '@/components/Inventory/InventorySlot.vue';

export default {
    name: 'inventory-container',
    components: {
        InventorySlot,
    },
    props: {
        inventory: {
            type: Object,
        },
        inventoryClass: {
            type: String,
        },
        itemAtSlotClass: {
            type: String,
        },
    },
    computed: {
        inventorySortedBySlotId() {
            const array = Array(this.inventory.inventorySlots).fill(null);
            for (let i = 0; i < this.inventory.inventorySlots; i++) {
                const item = this.inventory.items[i];
                if (item) {
                    array[item.slotId] = item;
                }
            }
            return array;
        },
    },
};
</script>

<style scoped>
.inventory-container {
    /* min-height: 45vh; */
    min-width: 20em;
    max-height: 50vh;
    max-width: 30em;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.6);
}

.inventory-slot {
    width: 96px;
    height: 96px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #f3f3f3;
    padding: 0rem;
    border: 1px solid transparent;
    background-clip: padding-box;
    /* border: 1px solid transparent; */
    transition: 0.5s;
}

.on-drag-start {
    background-color: rgba(0, 0, 0, 0.6);
}

.on-drag-enter {
    /* border: 1px solid rgba(255, 255, 255, 0.425); */
    opacity: 0.6;
    transform: scale(0.9);
}

/* .slot-content {
    width: 100%;
    height: 100%;
    overflow: auto;
} */
</style>
