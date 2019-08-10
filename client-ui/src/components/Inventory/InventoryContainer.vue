<template>
    <div>
        <div class="row inventory-header">
            <p class="inventory-text">{{ inventory.inventoryName }}</p>
        </div>
        <div class="row">
            <div class="inventory-container draggable-container" v-bind:class="inventoryClass">
                <div class="row m-0">
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
    </div>
</template>

<script>
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
        };
    },
    methods: {
        getItemById(itemId) {
            for (let i = 0; i < this.inventory.items.length; i++) {
                if (this.inventory.items[i].id == itemId) return this.inventory.items[i];
            }
            return null;
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
    width: 4rem;
    height: 5rem;
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
</style>
