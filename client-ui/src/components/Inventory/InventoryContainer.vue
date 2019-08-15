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
                        class="col-lg-2dot4 col-md-3 inventory-slot"
                    >
                        <div
                            v-if="item != null"
                            class="slot-content isDraggable"
                            v-bind:class="{ withItem: item }"
                            v-bind:data-itemId="item.id"
                        >
                            <v-popover
                                offset="16"
                                trigger="hover"
                                :delay="tooltipDelay"
                                :disabled="isMovingItem"
                                placement="auto"
                                popoverClass="item-popover"
                            >
                                <div class="item-wrapper">
                                    <img
                                        :src="require(`@/assets/images/items/${getCorrectImage(item)}`)"
                                        class="item-image"
                                    />
                                    <span class="item-quantity-text">x{{ item.quantity }}</span>
                                </div>

                                <template slot="popover">
                                    <div class="row m-0">
                                        <div class="col-5 m-0 p-0">
                                            <img
                                                :src="require(`@/assets/images/items/${getCorrectImage(item)}`)"
                                                class="item-image"
                                            />
                                        </div>
                                        <div class="col-7">
                                            <div class="row justify-content-center">
                                                <span class="popover-item-name">{{ item.name }}</span>
                                            </div>
                                            <div class="row">
                                                <span
                                                    class="text-justify popover-item-description"
                                                >{{ item.description }}</span>
                                            </div>
                                            <div class="row">
                                                <hr class="item-popover-hr" />
                                            </div>
                                            <div
                                                class="row item-popover-quantity"
                                            >Ilość: {{ item.quantity }}</div>
                                            <div
                                                class="row item-popover-quantity"
                                            >Maksymalna ilość: {{ item.stackSize }}</div>
                                        </div>
                                    </div>
                                </template>
                            </v-popover>
                        </div>

                        <div
                            v-else
                            class="slot-content isDraggable"
                            v-bind:class="{ withItem: item }"
                            v-bind:data-itemId="0"
                        >
                            <div class="item-wrapper"></div>
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
        isMovingItem: {
            type: Boolean,
        },
    },
    data() {
        return {
            draggableItemClassName: 'withItem',
            inventoryNameImages: InventoryNameImages,
            // inventorySlotImages: InventorySlotImages,
            tooltipDelay: {
                show: 500,
                hide: 20,
            },
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
            const imageByName = InventoryNameImages[item.name];
            return imageByName != null ? imageByName : InventorySlotImages[item.equipmentSlot];
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

    border-radius: 0.5rem;
}

.inventory-slot {
    width: 3rem;
    height: 5.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: #f3f3f3;
    font-size: 0.8em;
    padding: 0.1em;
    border: 1px solid rgba(133, 133, 133, 0.4);

    transition: box-shadow 0.25s;
}

.inventory-slot:hover {
    box-shadow: inset 0px 0px 1px 1px #ffffff;
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

<style>
.tooltip {
    display: block !important;
    z-index: 10000;
}

.tooltip .tooltip-inner {
    background: black;
    color: #f0f0f0;
    border-radius: 16px;
    padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
}

.tooltip.popover .popover-inner {
    background: #f3f3f3;
    color: black;
    border-radius: 5px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

.tooltip.popover .popover-arrow {
    border-color: #f3f3f3;
}

.tooltip[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.35s, visibility 0.35s;
}

.tooltip[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.35s;
}

.item-popover {
    max-width: 16rem;
    max-height: 16rem;
    font-size: 0.8rem;
}

.item-popover .tooltip-inner {
    max-width: 16rem;
    max-height: 16rem;
}

.item-popover .tooltip-inner .item-image {
    max-width: 8rem;
    max-height: 8rem;
    padding: 0.1rem;
}

.item-popover .popover-item-name {
    font-size: 0.8rem;
    font-weight: 600;
}

.item-popover .popover-item-description {
    color: rgba(51, 51, 51, 0.8);
    font-size: 0.65rem;
    word-wrap: break-word;
}

.item-popover .item-popover-hr {
    width: 100%;
    margin: 0;
    border-top-color: #4b4b4b7a;
}

.item-popover .item-popover-quantity {
    color: rgba(51, 51, 51, 0.8);
    font-size: 0.7rem;
}
</style>

<style>
.tooltip[x-placement^='top'] {
    margin-bottom: 5px;
}

.tooltip[x-placement^='top'] .tooltip-arrow {
    border-width: 5px 5px 0 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
}

.tooltip[x-placement^='bottom'] {
    margin-top: 5px;
}

.tooltip[x-placement^='bottom'] .tooltip-arrow {
    border-width: 0 5px 5px 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
}

.tooltip[x-placement^='right'] {
    margin-left: 5px;
}

.tooltip[x-placement^='right'] .tooltip-arrow {
    border-width: 5px 5px 5px 0;
    border-left-color: transparent !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
}

.tooltip[x-placement^='left'] {
    margin-right: 5px;
}

.tooltip[x-placement^='left'] .tooltip-arrow {
    border-width: 5px 0 5px 5px;
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
}
</style>