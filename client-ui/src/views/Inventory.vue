<template>
    <div id="inventory" v-on:keyup.esc="closeInventory()" v-on:keyup.i="closeInventory()">
        <div class="container h-100">
            <div class="row h-100">
                <div class="row justify-content align-content-center">
                    <InventoryTopBar :gameInfo="gameInfo" class="mx-auto" />
                    <div class="row w-100 mx-auto">
                        <div class="col-3">
                            <div id="equipped-inventory">
                                <div class="row inventory-header">
                                    <div class="col align-self-start pl-0">
                                        <p
                                            class="inventory-text"
                                            :class="{ notSelected: selectedEquippedInventory != 'equipment' }"
                                            @click="changeEquippedContainer('equipment')"
                                        >Ekwipunek</p>
                                    </div>
                                    <div class="col align-self-end pl-0">
                                        <p
                                            class="inventory-text"
                                            :class="{ notSelected: selectedEquippedInventory != 'accessories' }"
                                            @click="changeEquippedContainer('accessories')"
                                        >Akcesoria</p>
                                    </div>
                                </div>
                                <div
                                    class="row items-equipment mr-1 draggable-container"
                                    v-if="selectedEquippedInventory == 'equipment'"
                                >
                                    <InventoryEquipmentContainer
                                        :equipmentItems="equippedItemsEquipment"
                                    />
                                </div>
                                <div
                                    class="row items-equipment mr-2 draggable-container"
                                    v-else-if="selectedEquippedInventory == 'accessories'"
                                >
                                    <InventoryEquipmentContainer
                                        :equipmentItems="equippedItemsAccessories"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-5">
                            <inventory-container
                                :inventory="personalInventory"
                                :isMovingItem="swappingObject != null"
                            />
                        </div>
                        <div class="col-4">
                            <div
                                class="addonational-inventory-container ml-1"
                                v-if="showAddonationalInventory"
                            >
                                <inventory-container
                                    :inventory="addonationalInventory"
                                    :inventoryClass="addonationalInventoryClassName"
                                    :isMovingItem="swappingObject != null"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Draggable, Plugins } from '@shopify/draggable';
import InventoryContainer from '@/components/Inventory/InventoryContainer.vue';
import InventoryEquipmentContainer from '@/components/Inventory/InventoryEquipmentContainer.vue';
import InventoryController from '@/scripts/inventoryController.js';
import InventoryTopBar from '@/components/Inventory/InventoryTopBar.vue';
import EventBus from '@/event-bus.js';
import Actions from '../scripts/inventoryActions';

export default {
    name: 'inventory',
    components: {
        InventoryContainer,
        InventoryEquipmentContainer,
        InventoryTopBar,
    },
    mounted() {
        const containerSelector = '.draggable-container';
        const containers = this.$el.querySelectorAll(containerSelector);
        const draggable = new Draggable(containers, {
            draggable: '.isDraggable',
            delay: 150,
            mirror: {
                appendTo: '.inventory-container',
                constrainDimensions: true,
            },
        });

        draggable.on('drag:start', this.onDragStarted.bind(this));
        draggable.on('drag:over', this.onDragOver.bind(this));
        draggable.on('drag:over:container', this.onDragOverContainer.bind(this));
        draggable.on('drag:out:container', this.onDragOutContainer.bind(this));
        draggable.on('drag:stop', this.onDraggableStop.bind(this));

        this.inventoryController = new InventoryController(this.personalInventory, this.equippedInventory, this.addonationalInventory);

        EventBus.$on('inventoryItemWasDroppedSuccessfully', this.itemWasDroppedSuccessfully);
        EventBus.$on('inventoryAddNewItems', this.inventoryAddNewItems);
        EventBus.$on('inventoryItemWasStackedSuccesfully', this.itemWasStackedSuccessfully);
        EventBus.$on('inventoryItemWasEquippedSuccessfully', this.itemWasEquippedSuccessfully);
        EventBus.$on('inventoryItemWasUnequippedSuccessfully', this.itemWasUnequippedSuccessfully);
        EventBus.$on('inventoryItemWasMovedSuccessfully', this.itemWasMovedSuccessfully);
        EventBus.$on('inventoryItemWasTransferedSuccessfully', this.itemWasTransferedSuccessfully);
    },
    props: {
        initialPersonalInventory: {
            type: Object,
            default: () => {
                return {
                    inventoryId: 3,
                    inventoryName: 'Ekwipunek',
                    inventorySlots: 30,
                    items: [
                        {
                            id: 47,
                            name: 'Spodnie',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: false,
                            equipmentSlot: 1004,
                            slotId: 15,
                        },
                        {
                            id: 48,
                            name: 'Sprunk',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: false,
                            equipmentSlot: -1,
                            slotId: 1,
                        },
                        {
                            id: 65,
                            name: 'Spodnie',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 1004,
                            slotId: 2,
                        },
                        {
                            id: 66,
                            name: 'Spodnie',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 1004,
                            slotId: 3,
                        },
                        {
                            id: 67,
                            name: 'Spodnie',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 1004,
                            slotId: 4,
                        },
                        {
                            id: 68,
                            name: 'Strzelba',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 1301,
                            slotId: 5,
                        },
                        {
                            id: 69,
                            name: 'Woda',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: -1,
                            slotId: 6,
                        },
                        {
                            id: 70,
                            name: 'Pistolet bojowy',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 1300,
                            slotId: 7,
                        },
                        {
                            id: 71,
                            name: 'Pistolet bojowy',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 1300,
                            slotId: 8,
                        },
                        {
                            id: 72,
                            name: 'Pistolet',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 1300,
                            slotId: 9,
                        },
                        {
                            id: 109,
                            name: 'Burger',
                            stackSize: 20,
                            quantity: 19,
                            isDroppable: true,
                            equipmentSlot: -1,
                            slotId: 10,
                        },
                        {
                            id: 110,
                            name: 'Burger',
                            stackSize: 20,
                            quantity: 8,
                            isDroppable: true,
                            equipmentSlot: -1,
                            slotId: 11,
                        },
                    ],
                };
            },
        },
        initialEquippedInventory: {
            type: Object,
            default: () => {
                return {
                    inventoryId: 2,
                    inventoryName: 'Equipped items',
                    inventorySlots: 10,
                    items: [
                        {
                            id: 470,
                            name: 'Spodnie',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: false,
                            equipmentSlot: 1004,
                            slotId: 1004,
                        },
                    ],
                };
            },
        },
        initialAddonationalInventory: {
            type: Object,
            default: () => {
                return {
                    inventoryId: 1,
                    inventoryName: 'Dodatkowe inventory',
                    inventorySlots: 7,
                    items: [
                        {
                            id: 505,
                            name: 'Spodnie',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 1004,
                            slotId: 3,
                        },
                        {
                            id: 605,
                            name: 'Spodnie',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 1004,
                            slotId: 1,
                        },
                    ],
                };
            },
        },
        gameInfo: {
            type: Object,
            default: () => {
                return {
                    hours: 13,
                    minutes: 35,
                    health: 75,
                    armor: 15,
                };
            },
        },
    },
    data() {
        return {
            hoverClass: 'on-drag-enter',
            dragEffectClass: 'on-drag-start',
            draggableItemClassName: 'withItem',
            // Class indicating slot is with item
            addonationalInventoryClassName: 'addonational-inventory',
            selectedEquippedInventory: 'equipment', // or accessories
            equipmentSlots: [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1201, 1202, 1300, 1301, 1302],
            accessoriesSlots: [1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1203],
            swappingObject: null,
            lastDragOverItem: null,
            lastDragOverContaier: null,
            personalInventory: { ...this.initialPersonalInventory },
            equippedInventory: { ...this.initialEquippedInventory },
            addonationalInventory: { ...this.initialAddonationalInventory },

            inventoryController: null,
        };
    },
    methods: {
        onDragStarted(event) {
            console.log(event);
            this.swappingObject = event.data;
            this.addDragEfect(this.swappingObject.source);
            if (!this.isDraggable(this.swappingObject.originalSource._prevClass)) {
                console.log('This item is not draggable');
                event.cancel();
                return;
            }

            this.dragStartedSuccessfully(
                this.getInventoryFromClassName(this.swappingObject.sourceContainer.className),
                this.swappingObject,
                this.swappingObject.source.dataset.itemid
            );
        },
        dragStartedSuccessfully(inventoryName, swappingObject, itemId) {
            this.inventoryController.setSelectedInventory(inventoryName);
            this.inventoryController.setSelectedItem(itemId, swappingObject);
        },
        onDragOver(event) {
            console.log('Drag over');
            console.log(event);
            this.applyHoverEffect(event);
            this.inventoryController.setItemToSwap(event.data.over.dataset.itemid);
            this.inventoryController.setCorrectAction(event.data);
        },
        onDragOverContainer(event) {
            console.log('Drag over container');
            this.lastDragOverContaier = event.data;
            this.inventoryController.setMovingOverInventory(this.getInventoryFromClassName(this.lastDragOverContaier.overContainer.className));

            if (this.lastDragOverContaier.sourceContainer != this.lastDragOverContaier.overContainer) {
                this.inventoryController.isMovingItemsBetweenInventories = true;
                console.log('Moving items between inventories');
            } else {
                console.log('Not moving items between inventories');
                this.inventoryController.isMovingItemsBetweenInventories = false;
            }
        },
        onDragOutContainer(event) {
            console.log(`Dragged out container`);
            if (this.inventoryController.setDropAction()) {
                console.log('Should drop item');
                this.removeHoverEffect(this.lastDragOverItem);
            }
        },
        onDraggableStop(event) {
            console.log(`Drag stop`);
            this.inventoryController.onDraggableStop(event);
            this.resetStates();
        },
        itemWasDroppedSuccessfully(inventoryId, itemId, quantity) {
            this.inventoryController.itemDroppedSuccessfully(inventoryId, itemId, quantity);
        },
        itemWasStackedSuccessfully(inventoryId, itemToStackFromId, itemToStackId, itemToStackInventoryId, amountOfStackedItems) {
            this.inventoryController.itemStackedSuccessfully(inventoryId, itemToStackFromId, itemToStackId, itemToStackInventoryId, amountOfStackedItems);
        },
        itemWasEquippedSuccessfully(selectedInventoryId, playerEquipmentId, itemToEquipId, slotId) {
            console.log('Equipping items on vue');
            this.inventoryController.itemWasEquippedSuccessfully(selectedInventoryId, playerEquipmentId, itemToEquipId, slotId);
        },
        itemWasUnequippedSuccessfully(playerEquipmentId, selectedInventoryId, equippedItemId, newSlotId) {
            this.inventoryController.itemWasUnequippedSuccessfully(playerEquipmentId, selectedInventoryId, equippedItemId, newSlotId);
        },
        itemWasMovedSuccessfully(selectedInventoryId, selectedItemId, newSlotNumber) {
            this.inventoryController.itemWasMovedSuccessfully(selectedInventoryId, selectedItemId, newSlotNumber);
        },
        itemWasTransferedSuccessfully(inventoryToMoveFromId, inventoryToMoveToId, itemToTransferId, slotId) {
            console.log('Item was transfered on VUE');
            this.inventoryController.itemWasTransferedSuccessfully(inventoryToMoveFromId, inventoryToMoveToId, itemToTransferId, slotId);
        },
        inventoryAddNewItems(newItems) {
            if (newItems == null) return;
            newItems.forEach(item => {
                this.personalInventory.items.push(item);
            });
        },
        changeEquippedContainer(inventoryName) {
            this.selectedEquippedInventory = inventoryName;
        },
        isDraggable(item) {
            return item.includes(this.draggableItemClassName);
        },
        applyHoverEffect(event) {
            if (this.lastDragOverItem) {
                this.lastDragOverItem.classList.remove(this.hoverClass);
            }

            this.lastDragOverItem = event.data.over;
            if (this.lastDragOverItem == this.swappingObject.source) return; // Don't apply hover effect on selected item
            this.lastDragOverItem.classList.add(this.hoverClass);
        },
        removeHoverEffect(item) {
            if (item != null) {
                item.classList.remove(this.hoverClass);
            }
        },
        addDragEfect(swappingObject) {
            swappingObject.classList.add(this.dragEffectClass);
        },
        getInventoryFromClassName(className) {
            if (className.includes(this.addonationalInventoryClassName)) {
                return this.addonationalInventory;
            } else if (className.includes('inventory-container')) {
                return this.personalInventory;
            } else if (className.includes('items-equipment')) {
                return this.equippedInventory;
            } else {
                return null;
            }
        },
        resetStates() {
            this.lastDragOverContaier = null;
            this.swappingObject = null;

            if (this.lastDragOverItem) {
                this.lastDragOverItem.classList.remove('on-drag-enter');
                this.lastDragOverItem = null;
            }
        },
        closeInventory() {
            console.log(`Closing inventory`);
            alt.emit('closeInventory');
        },
    },
    computed: {
        showAddonationalInventory() {
            return !(Object.entries(this.addonationalInventory).length === 0 && this.addonationalInventory.constructor === Object);
        },
        equippedItemsEquipment() {
            const equippedItems = {};

            for (let i = 0; i < this.equipmentSlots.length; i++) {
                const slot = this.equipmentSlots[i];
                let equippedItem = this.equippedInventory.items.find(i => i.slotId == slot);
                if (equippedItem == null) {
                    equippedItems[slot] = null;
                } else {
                    equippedItems[slot] = equippedItem;
                }
            }
            return equippedItems;
        },
        equippedItemsAccessories() {
            const equippedItems = {};

            for (let i = 0; i < this.accessoriesSlots.length; i++) {
                const slot = this.accessoriesSlots[i];
                let equippedItem = this.equippedInventory.items.find(i => i.slotId == slot);
                if (equippedItem == null) {
                    equippedItems[slot] = null;
                } else {
                    equippedItems[slot] = equippedItem;
                }
            }
            return equippedItems;
        },
    },
    beforeDestroy() {
        EventBus.$off('inventoryItemWasDroppedSuccessfully', this.itemWasDroppedSuccessfully);
        EventBus.$off('inventoryAddNewItems', this.inventoryAddNewItems);
        EventBus.$off('inventoryItemWasStackedSuccesfully', this.itemWasStackedSuccessfully);
        EventBus.$off('inventoryItemWasEquippedSuccessfully', this.itemWasEquippedSuccessfully);
        EventBus.$off('inventoryItemWasUnequippedSuccessfully', this.itemWasUnequippedSuccessfully);
        EventBus.$off('inventoryItemWasMovedSuccessfully', this.itemWasMovedSuccessfully);
        EventBus.$off('inventoryItemWasTransferedSuccessfully', this.itemWasTransferedSuccessfully);
    },
};

alt.on('inventoryItemWasDroppedSuccessfully', (inventoryId, itemId, quantity) => {
    EventBus.$emit('inventoryItemWasDroppedSuccessfully', inventoryId, itemId, quantity);
});

alt.on('inventoryAddNewItems', newItems => {
    EventBus.$emit('inventoryAddNewItems', newItems);
});

alt.on('inventoryItemWasStackedSuccesfully', (inventoryId, itemToStackFromId, itemToStackId, itemToStackInventoryId, amountOfStackedItems) => {
    EventBus.$emit('inventoryItemWasStackedSuccesfully', inventoryId, itemToStackFromId, itemToStackId, itemToStackInventoryId, amountOfStackedItems);
});

alt.on('inventoryItemWasEquippedSuccessfully', (selectedInventoryId, playerEquipmentId, itemToEquipId, slotId) => {
    EventBus.$emit('inventoryItemWasEquippedSuccessfully', selectedInventoryId, playerEquipmentId, itemToEquipId, slotId);
});

alt.on('inventoryItemWasUnequippedSuccessfully', (playerEquipmentId, selectedInventoryId, equippedItemId, newSlotId) => {
    EventBus.$emit('inventoryItemWasUnequippedSuccessfully', playerEquipmentId, selectedInventoryId, equippedItemId, newSlotId);
});

alt.on('inventoryItemWasMovedSuccessfully', (selectedInventoryId, selectedItemId, newSlotNumber) => {
    console.log('Item was moved succesfully in VUE ALT ON');
    EventBus.$emit('inventoryItemWasMovedSuccessfully', selectedInventoryId, selectedItemId, newSlotNumber);
});

alt.on('inventoryItemWasTransferedSuccessfully', (inventoryToMoveFromId, inventoryToMoveToId, itemToTransferId, slotId) => {
    EventBus.$emit('inventoryItemWasTransferedSuccessfully', inventoryToMoveFromId, inventoryToMoveToId, itemToTransferId, slotId);
});
</script>

<style>
#inventory {
    /* background-image: url('../assets/example-image.jpg'); */
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100vh;
}

#inventory .inventory-top {
    font-size: 2rem;
    padding-bottom: 1em;
}

.inventory-header-date .header-date-text {
    font-size: 3rem;
}

@media (max-width: 1281px) {
    #inventory .inventory-top {
        font-size: 1.8rem;
    }

    .inventory-header-date .header-date-text {
        font-size: 2.3rem;
    }
}

@media (max-width: 767.98px) {
    #inventory .inventory-top {
        font-size: 1.3rem;
    }

    .inventory-header-date .header-date-text {
        font-size: 1.3rem;
    }
}

#inventory .inventory-header {
    font-size: 1.3rem;
}

#inventory .inventory-text {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    color: #ffffff;

    mix-blend-mode: normal;
    text-shadow: 1px 2px 2px #000000;
    /* transition: 0.3s; */
}

.inventory-header .inventory-text:hover {
    cursor: pointer;
}

#inventory .notSelected {
    color: #aaaaaa;
}

#inventory .slot-content {
    width: 100%;
    height: 100%;
}

#inventory .on-drag-enter {
    transition: transform 0.2s ease-in-out;
}

.item-wrapper img {
    transition: 2s;
}

.item-wrapper {
    height: 100%;

    transition: all 2s ease-in-out;
}

.item-image {
    padding: 0.8rem;
    width: 100%;
    height: 100%;

    transition: all 0.3s ease-in-out;
}

.item-quantity-text {
    position: absolute;
    bottom: 0.1rem;
    right: 0.4rem;

    color: #f3f3f3;
    text-shadow: 3px 1px 10px rgba(0, 0, 0, 1);
}

#equipped-inventory {
    transform: perspective(500px) rotateY(12deg);
}

#equipped-inventory .items-equipment {
    color: rgb(200, 200, 200);
    font-size: 0.8em;
    font-style: normal;
    font-weight: lighter;

    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(133, 133, 133, 0.4);
    border-radius: 0.5em;
}

.addonational-inventory-container {
    transform: perspective(500px) rotateY(-12deg) translateZ(0);
}

.on-drag-start {
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
}

.on-drag-enter {
    opacity: 0.6;
    transform: scale(0.9);
}

/* Bootstrap 5 columns in row */
.col-2dot4,
.col-sm-2dot4,
.col-md-2dot4,
.col-lg-2dot4,
.col-xl-2dot4 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
.col-2dot4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
}
@media (min-width: 540px) {
    .col-sm-2dot4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 20%;
        flex: 0 0 20%;
        max-width: 20%;
    }
}
@media (min-width: 720px) {
    .col-md-2dot4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 20%;
        flex: 0 0 20%;
        max-width: 20%;
    }
}
@media (min-width: 960px) {
    .col-lg-2dot4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 20%;
        flex: 0 0 20%;
        max-width: 20%;
    }
}
@media (min-width: 1140px) {
    .col-xl-2dot4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 20%;
        flex: 0 0 20%;
        max-width: 20%;
    }
}
</style>