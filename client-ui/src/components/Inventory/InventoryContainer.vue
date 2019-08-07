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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Draggable, Plugins } from '@shopify/draggable';

export default {
    name: 'inventory-container',
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
    mounted() {
        const containerSelector = `.inventory-container`;
        const containers = this.$el.querySelectorAll(containerSelector);
        console.log(`Container = ${JSON.stringify(containers)}`);

        const swappable = new Draggable(containers, {
            draggable: '.isDraggable',
            delay: 150,
            mirror: {
                appendTo: containerSelector,
                constrainDimensions: true,
            },
            plugins: [Plugins.ResizeMirror],
        });

        swappable.on('drag:start', event => {
            console.log(`Drag event started in inventory ${this.inventory.inventoryName}`);
        });
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
</style>
