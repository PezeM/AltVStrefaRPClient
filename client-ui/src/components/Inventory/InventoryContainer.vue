<template>
    <div>
        <div class="row inventory-header">
            <p class="inventory-text">{{ inventory.inventoryName }}</p>
        </div>
        <div class="row">
            <div
                class="inventory-container draggable-container w-100"
                v-bind:class="inventoryClass"
            >
                <div class="row m-0 w-100">
                    <div
                        v-for="(item, index) in inventorySortedBySlotId"
                        v-bind:key="index"
                        v-bind:id="index"
                        class="col-lg-3 col-md-4 inventory-slot"
                    >
                        <div
                            v-if="item != null"
                            class="slot-content isDraggable"
                            v-bind:class="{ withItem: item }"
                            v-bind:data-itemId="item.id"
                        >
                            <div class="item-wrapper">
                                <img
                                    :src="require(`@/assets/images/items/${getCorrectImage(item)}`)"
                                    class="item-image"
                                />
                                <span
                                    class="item-quantity-text"
                                >{{ item.quantity }}/{{ item.stackSize }}</span>
                            </div>
                            <!-- {{ item.name }}
                            <br />
                            {{ item.slotId }} - Q: {{ item.quantity }}-->
                        </div>
                        <div
                            v-else
                            class="slot-content isDraggable"
                            v-bind:class="{ withItem: item }"
                            v-bind:data-itemId="0"
                        >
                            <div class="item-wrapper">
                                <!-- <img
                                    :src="require(`@/assets/images/items/${inventorySlotImages[1002]}`)"
                                    class="item-image"
                                />
                                <span class="item-quantity-text">19/20</span>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InventorySlotImages from '@/scripts/inventorySlotImages.js';
import InventoryNameImages from '@/scripts/inventoryNameImages.js';

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
    data() {
        return {
            swappingObject: null,
            draggableItemClassName: 'withItem',
            inventoryNameImages: InventoryNameImages,
            inventorySlotImages: InventorySlotImages,
        };
    },
    methods: {
        getItemById(itemId) {
            for (let i = 0; i < this.inventory.items.length; i++) {
                if (this.inventory.items[i].id == itemId) return this.inventory.items[i];
            }
            return null;
        },
        getCorrectImage(item) {
            // return item.equipmentSlot == -1 ? this.inventorySlotImages[item.equipmentSlot] : this.inventoryNameImages[item.name];
            return item.equipmentSlot == -1 ? InventoryNameImages[item.name] : InventorySlotImages[item.equipmentSlot];
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
    min-width: 10em;
    max-height: 50vh;
    max-width: 30em;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(133, 133, 133, 0.4);
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
}

.inventory-slot {
    /* width: 3rem; */
    height: 96px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #f3f3f3;
    font-size: 0.8em;
    padding: 0.1em;
    border: 1px solid rgba(133, 133, 133, 0.4);

    transition: 0.3s;
}

.inventory-slot:hover {
    box-shadow: inset 0px 0px 1px 1px #ffffff;
}

.item-wrapper {
    height: 100%;

    transition: 2s;
}

.item-image {
    padding: 0.8rem;
    width: 100%;
    height: 100%;

    transition: 2s;
}

.item-quantity-text {
    position: absolute;
    bottom: 0.1rem;
    right: 0.4rem;
    color: #b3b3b3;
}

/* Scrollbar */
.inventory-container::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    /* background-color: #555; */
}

.inventory-container::-webkit-scrollbar {
    width: 0.3rem;
    background-color: rgba(0, 0, 0, 0.5);
    /* background-color: #555; */
}

.inventory-container::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f3f3f3;
}
</style>
