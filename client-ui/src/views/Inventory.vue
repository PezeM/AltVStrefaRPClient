<template>
  <div id="inventory" v-on:keyup.esc="closeInventory()" v-on:keyup.i="closeInventory()">
    <div class="container-fluid h-100 w-100">
      <div class="row align-items-end h-100 pb-4">
        <div class="col-3">Tutaj bedzie equipped inventory</div>
        <div class="col-9">
          <div class="row">
            <div class="col">
              <p class="text-left">Nazwa inventory: {{ personalInventory.inventoryName }}</p>
              <p class="text-left">Id inventory: {{ personalInventory.inventoryId }}</p>
              <inventory-container :inventory="personalInventory" />
            </div>
            <div class="col" v-if="showAddonationalInventory">
              <p
                class="text-left"
              >Nazwa dodatkowego inventory {{ addonationalInventory.inventoryName }}</p>
              <p class="text-left">Id dodatkowego inventory {{ addonationalInventory.inventoryId }}</p>
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
        const containerSelector = '.inventory-container';
        const containers = this.$el.querySelectorAll(containerSelector);
        const draggable = new Draggable(containers, {
            draggable: '.isDraggable',
            delay: 150,
            mirror: {
                appendTo: containerSelector,
                constrainDimensions: true,
            },
        });

        draggable.on('drag:start', this.onDragStarted.bind(this));
        draggable.on('drag:over', this.onDragOver.bind(this));
        draggable.on('drag:over:container', this.onDragOverContainer.bind(this));
        draggable.on('drag:out:container', this.onDragOutContainer.bind(this));
        draggable.on('drag:stop', this.onDraggableStop.bind(this));

        this.inventoryController = new InventoryController(this.personalInventory, this.equippedInventory, this.addonationalInventory);
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
                    items: [],
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
        onItemSwap() {
            if (this.itemToSwap != null) {
                // Swapping item with item
                if (this.moveBetweenInventories) {
                    const temporarySlot = this.itemToSwap.slotId;
                    this.itemToSwap.slotId = this.selectedItem.slotId;
                    this.selectedItem.slotId = temporarySlot;
                    if (this.isAddonationalInventory(this.swappingObject.sourceContainer)) {
                        console.log(`Swapping from addonational inventory`);
                        this.personalInventory.items = this.personalInventory.items.filter(i => i.id !== this.itemToSwap.id);
                        this.personalInventory.items.push(this.selectedItem);
                        this.addonationalInventory.items = this.addonationalInventory.items.filter(i => i.id !== this.selectedItem.id);
                        this.addonationalInventory.items.push(this.itemToSwap);
                    } else {
                        console.log('Swapping to addonational inventory');
                        this.addonationalInventory.items = this.addonationalInventory.items.filter(i => i.id !== this.itemToSwap.id);
                        this.addonationalInventory.items.push(this.selectedItem);
                        this.personalInventory.items = this.personalInventory.items.filter(i => i.id !== this.selectedItem.id);
                        this.personalInventory.items.push(this.itemToSwap);
                    }
                } else {
                    const temporarySlot = this.itemToSwap.slotId;
                    this.itemToSwap.slotId = this.selectedItem.slotId;
                    this.selectedItem.slotId = temporarySlot;
                    alt.emit('inventorySwapItems', this.selectedItem.id, this.selectedItem.slotId, this.itemToSwap.id, this.itemToSwap.slotId);
                }

                this.addItemToLastAffectedItems(this.selectedItem, this.itemToSwap);
            } else if (this.newSlotId > -1) {
                // Moving item to empty slot
                if (this.moveBetweenInventories) {
                    this.selectedItem.slotId = this.newSlotId;
                    alt.emit('transferItemBetweenInventories');
                    console.log(`Moving between inventories`);
                    // this.swappingObject = this.lastDragOverContaier;
                    if (this.isAddonationalInventory(this.swappingObject.sourceContainer)) {
                        console.log(`Moving from addonational inventory`);
                        this.personalInventory.items.push(this.selectedItem);
                        this.addonationalInventory.items = this.addonationalInventory.items.filter(i => i.id !== this.selectedItem.id);
                    } else {
                        console.log('Moving to addonational inventory');
                        this.addonationalInventory.items.push(this.selectedItem);
                        this.personalInventory.items = this.personalInventory.items.filter(i => i.id !== this.selectedItem.id);
                    }
                } else {
                    this.selectedItem.slotId = this.newSlotId;
                    alt.emit('inventoryMoveItem', this.selectedItem.id, this.selectedItem.slotId);
                }
                this.addItemToLastAffectedItems(this.selectedItem);
            }
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
    },
};
</script>

<style>
#inventory {
    background-image: url('../assets/example-image.jpg');
    background-color: rgba(0, 0, 0, 0.561);
    /* padding-bottom: 2em; */
    width: 100%;
    height: 100vh;
}

#inventory p {
    font-family: 'Roboto';
    color: #212121;
    font-weight: 700;
}
</style>