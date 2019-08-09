<template>
  <div id="inventory" v-on:keyup.esc="closeInventory()" v-on:keyup.i="closeInventory()">
    <div class="container h-100">
      <div class="row h-100">
        <div class="row justify-content align-content-center">
          <div class="row">
            <div class="col-12">
              <h1>Tekst jakis dluzszy tutaj bedzie staty itp</h1>
            </div>
          </div>
          <div class="row">
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
                  class="row items-equipment mr-2 draggable-container"
                  v-if="selectedEquippedInventory == 'equipment'"
                >
                  <div class="row m-0">
                    <div
                      v-for="(item, key) in equippedItemsEquipment"
                      :key="key"
                      :id="key"
                      class="col-4 item-slot"
                      :class="{ withItem: item != null }"
                    >
                      <div
                        v-if="item != null"
                        class="slot-content isDraggable withItem"
                        v-bind:data-itemId="item.id"
                      >
                        {{ item.name }}
                        <br />
                        {{ item.slotId }} - Q: {{ item.quantity }}
                      </div>
                      <div
                        v-else
                        class="slot-content isDraggable"
                        :class="{ withItem: item != null }"
                        v-bind:data-itemId="0"
                      >Item</div>
                    </div>
                  </div>
                </div>
                <div
                  class="row items-equipment mr-2 draggable-container"
                  v-else-if="selectedEquippedInventory == 'accessories'"
                >
                  <div class="row m-0">
                    <div
                      v-for="(item, key) in equippedItemsAccessories"
                      :key="key"
                      :id="key"
                      class="col-4 item-slot isDraggable"
                    >
                      <div
                        v-if="item != null"
                        class="slot-content"
                        :class="{ withItem: item != null }"
                        v-bind:data-itemId="item.id"
                      >
                        {{ item.name }}
                        <br />
                        {{ item.slotId }} - Q: {{ item.quantity }}
                      </div>
                      <div
                        v-else
                        class="slot-content"
                        :class="{ withItem: item != null }"
                        v-bind:data-itemId="0"
                      >Item</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-9">
              <div class="row">
                <div class="col">
                  <inventory-container :inventory="personalInventory" />
                </div>
                <div class="col ml-2" v-if="showAddonationalInventory">
                  <div class="addonational-inventory-container ml-2">
                    <inventory-container
                      :inventory="addonationalInventory"
                      :inventoryClass="addonationalInventoryClassName"
                    />
                  </div>
                </div>
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
import InventoryController from '@/scripts/inventoryController.js';
import EventBus from '@/event-bus.js';
import Actions from '../scripts/inventoryActions';

export default {
    name: 'inventory',
    components: {
        InventoryContainer,
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
                            name: 'Jakieś spodnie',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: false,
                            equipmentSlot: 10004,
                            slotId: 15,
                        },
                        {
                            id: 48,
                            name: 'Jakieś spodnie',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: false,
                            equipmentSlot: 10004,
                            slotId: 1,
                        },
                        {
                            id: 65,
                            name: 'Jakieś spodnie',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 10004,
                            slotId: 2,
                        },
                        {
                            id: 66,
                            name: 'Jakieś spodnie',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 10004,
                            slotId: 3,
                        },
                        {
                            id: 67,
                            name: 'Jakieś spodnie',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 10004,
                            slotId: 4,
                        },
                        {
                            id: 68,
                            name: 'Combat pistol',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 12000,
                            slotId: 5,
                        },
                        {
                            id: 69,
                            name: 'Combat pistol',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 12000,
                            slotId: 6,
                        },
                        {
                            id: 70,
                            name: 'Combat pistol',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 12000,
                            slotId: 7,
                        },
                        {
                            id: 71,
                            name: 'Combat pistol',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 12000,
                            slotId: 8,
                        },
                        {
                            id: 72,
                            name: 'Combat pistol',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 12000,
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
                            name: 'Some item',
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
                            name: 'Jakieś spodnie',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 10004,
                            slotId: 3,
                        },
                        {
                            id: 605,
                            name: 'Jakaś bluza',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
                            equipmentSlot: 10004,
                            slotId: 1,
                        },
                    ],
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
</script>

<style>
#inventory {
    background-image: url('../assets/example-image.jpg');
    background-color: rgba(0, 0, 0, 0.561);
    /* padding-bottom: 2em; */
    width: 100%;
    height: 100vh;
}

#inventory .inventory-header {
    font-size: 1.3rem;
}

.inventory-header .inventory-text {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    color: #ffffff;

    mix-blend-mode: normal;
    text-shadow: 1px 2px 2px #000000;
    transition: 0.3s;
}

#equipped-inventory .inventory-text:hover {
    cursor: pointer;
}

.inventory-header .notSelected {
    color: #aaaaaa;
}

#equipped-inventory {
    transform: perspective(500px) rotateY(12deg);
}

#equipped-inventory .item-slot {
    width: 64px;
    height: 96px;
    padding: 0.1rem;
    background: rgba(0, 0, 0, 0.5);
    mix-blend-mode: normal;
    border: 1px solid rgba(133, 133, 133, 0.4);

    transition: 0.3s;
}

#equipped-inventory .item-slot:hover {
    box-shadow: inset 0px 0px 0px 1px #f3f3f3;
}

#equipped-inventory .items-equipment {
    color: rgb(200, 200, 200);
    font-size: 0.8em;
    font-style: normal;
    font-weight: lighter;

    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(133, 133, 133, 0.4);
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
}

#equipped-inventory .slot-content {
    width: 100%;
    height: 100%;
}

.addonational-inventory-container {
    transform: perspective(500px) rotateY(-12deg);
}

.on-drag-start {
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
}

.on-drag-enter {
    /* border: 1px solid rgba(255, 255, 255, 0.425); */
    opacity: 0.6;
    transform: scale(0.9);
}
</style>