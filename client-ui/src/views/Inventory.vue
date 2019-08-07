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
              <inventory-container :inventory="personalInventory" @drag-started="dragStarted" />
            </div>
            <div class="col" v-if="showAddonationalInventory">
              <p
                class="text-left"
              >Nazwa dodatkowego inventory {{ addonationalInventory.inventoryName }}</p>
              <p class="text-left">Id dodatkowego inventory {{ addonationalInventory.inventoryId }}</p>
              <inventory-container
                :inventory="addonationalInventory"
                :inventoryClass="addonationalInventoryClassName"
                @drag-started="dragStarted"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swappable, Plugins } from '@shopify/draggable';
import InventoryContainer from '@/components/Inventory/InventoryContainer.vue';
import InventoryController from '@/scripts/inventoryController.js';
import EventBus from '@/event-bus.js';

export default {
    name: 'inventory',
    components: {
        InventoryContainer,
    },
    mounted() {
        // const containerSelector = '.inventory-container';
        // const containers = this.$el.querySelectorAll(containerSelector);
        // const swappable = new Swappable(containers, {
        //     draggable: '.isDraggable',
        //     delay: 150,
        //     mirror: {
        //         appendTo: containerSelector,
        //         constrainDimensions: true,
        //     },
        // //     plugins: [Plugins.ResizeMirror],
        // });
        // swappable.on('swappable:start', this.onSwappableStart.bind(this));
        // swappable.on('swappable:swap', this.onSwappableSwap.bind(this));
        // swappable.on('swappable:stop', this.onSwappableStop.bind(this));
        // swappable.on('drag:out:container', this.onDragOutContainer.bind(this));

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
            lastAffectedItems: [],
            // Class indicating slot is with item
            withItem: 'withItem',
            addonationalInventoryClassName: 'addonational-inventory',
            moveBetweenInventories: false,
            swappingObject: null,
            selectedItem: null,
            lastDragOverItem: null,
            lastDragOverContaier: null,
            itemToSwap: null,
            newSlotId: -1,
            action: null,
            personalInventory: { ...this.initialPersonalInventory },
            equippedInventory: { ...this.initialEquippedInventory },
            addonationalInventory: { ...this.initialAddonationalInventory },
            inventoryController: null,
        };
    },
    methods: {
        dragStarted(inventoryName, swappingObject, item) {
            // console.log(`Drag started in inventory ${inventoryName} with item ${JSON.stringify(item)} and swapping object ${swappingObject}`);
            this.inventoryController.setSelectedInventory(inventoryName);
            this.inventoryController.setSelectedItem(item, swappingObject);
            // this.inventoryController.removeItem(item);
        },
        onSwappableStart(event) {
            this.swappingObject = event.dragEvent.data;
            this.swappingObject.source.classList.add('on-drag-start');
            if (!this.isSwappable(this.swappingObject.originalSource._prevClass)) {
                event.cancel();
                console.log(`Event canceled`);
                return;
            }

            if (this.isAddonationalInventory(this.swappingObject.sourceContainer)) {
                this.selectedItem = this.getItemByIdFromAddonationalInventory(this.swappingObject.source.dataset.itemid);
            } else {
                this.selectedItem = this.getItemById(this.swappingObject.source.dataset.itemid);
            }

            console.log(event);
        },
        onSwappableSwap(event) {
            this.applyHoverEffect(event);
            this.lastDragOverContaier = event.data.overContainer;
            this.moveBetweenInventories = false;

            if (this.lastDragOverContaier != this.swappingObject.sourceContainer) {
                console.log(`Move between inventories`);
                this.moveBetweenInventories = true;
                if (this.isAddonationalInventory(this.swappingObject.sourceContainer)) {
                    console.log(`Swapping from addonational inventory`);
                    this.itemToSwap = this.getItemById(event.dragEvent.data.over.dataset.itemid);
                } else {
                    console.log('Swapping to addonational inventory');
                    this.itemToSwap = this.getItemByIdFromAddonationalInventory(event.dragEvent.data.over.dataset.itemid);
                }
            } else if (this.isAddonationalInventory(this.swappingObject.sourceContainer)) {
                this.itemToSwap = this.getItemByIdFromAddonationalInventory(event.dragEvent.data.over.dataset.itemid);
            } else {
                this.itemToSwap = this.getItemById(event.dragEvent.data.over.dataset.itemid);
            }

            if (this.itemToSwap == null) {
                // There was no item in that cell, it means we should drop it there
                this.action = 'swap';
                this.newSlotId = Number(event.data.over.parentNode.id);
                console.log(`New slot = ${this.newSlotId}`);
            } else {
                if (this.selectedItem.name == this.itemToSwap.name && this.selectedItem.stackSize > 1) {
                    console.log(`We should stack`);
                    this.action = 'stack';
                } else {
                    this.action = 'swap';
                }
            }
            console.log('swappable:swap');
            console.log(event);
            event.cancel();
        },
        onDragOutContainer(event) {
            console.log(`drag:out:container`);
            if (this.selectedItem) {
                this.action = 'drop';
                console.log(`Should drop`);
                if (this.lastDragOverItem != null) {
                    console.log(`Should remove hover effect on that element`);
                    this.lastDragOverItem.classList.remove(this.hoverClass);
                }
            }
        },
        onSwappableStop(event) {
            console.log('swappable:stop');
            switch (this.action) {
                case 'stack':
                    console.log(`We should stack items`);
                    this.onItemStack();
                    break;
                case 'swap':
                    console.log(`We should swap items`);
                    this.onItemSwap();
                    break;
                case 'drop':
                    console.log('We should drop item');
                    this.onItemDrop();
                    break;
                default:
                    break;
            }
            this.resetStates();
        },
        onItemStack() {
            let amountOfItemsToStack = this.selectedItem.quantity;
            const maxQuantity = this.itemToSwap.stackSize - this.itemToSwap.quantity;
            const toAdd = Math.min(amountOfItemsToStack, maxQuantity);
            if (toAdd <= 0) return;
            this.itemToSwap.quantity += toAdd;
            this.selectedItem.quantity -= toAdd;
            if (this.selectedItem.quantity <= 0) {
                console.log(`Should delete item`);
                this.personalInventory.items = this.personalInventory.items.filter(i => i.id != this.selectedItem.id);
            }
            amountOfItemsToStack -= toAdd;
            alt.emit('inventoryStackItems', this.itemToSwap.id, this.selectedItem.id);
            this.addItemToLastAffectedItems(this.itemToSwap, this.selectedItem);
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
        onItemDrop() {
            if (this.selectedItem == null) return;
            if (!this.selectedItem.isDroppable) {
                EventBus.$emit('showNotification', 3, 'Błąd', 'Nie można wyrzucić tego przedmiotu.', 3500);
                return;
            }
            alt.emit('inventoryDropItem', this.selectedItem.id, this.selectedItem.quantity);
            // Temporary till user can select quantity
            this.personalInventory.items = this.personalInventory.items.filter(i => i.id !== this.selectedItem.id);
            this.addItemToLastAffectedItems(this.selectedItem);
        },
        closeInventory() {
            console.log(`Closing inventory`);
            alt.emit('closeInventory');
        },
        isSwappable(item) {
            return item.includes(this.withItem);
        },
        addItemToLastAffectedItems(...args) {
            for (let i = 0; i < args.length; i++) {
                if (this.lastAffectedItems.length > 9) this.lastAffectedItems.pop();
                this.lastAffectedItems.push(args[i]);
            }
        },
        itemAtSlot(slotId) {
            for (let i = 0; i < this.personalInventory.items.length; i++) {
                if (this.personalInventory.items[i].slotId == slotId) return this.personalInventory.items[i];
            }
            return null;
        },
        itemAtSlotInAddonationalInv(slotId) {
            for (let i = 0; i < this.addonationalInventory.items.length; i++) {
                if (this.addonationalInventory.items[i].slotId == slotId) return this.addonationalInventory.items[i];
            }
            return null;
        },
        getItemById(itemId) {
            for (let i = 0; i < this.personalInventory.items.length; i++) {
                if (this.personalInventory.items[i].id == itemId) return this.personalInventory.items[i];
            }
            return null;
        },
        getItemByIdFromAddonationalInventory(itemId) {
            for (let i = 0; i < this.addonationalInventory.items.length; i++) {
                if (this.addonationalInventory.items[i].id == itemId) return this.addonationalInventory.items[i];
            }
            return null;
        },
        applyHoverEffect(event) {
            if (this.lastDragOverItem) {
                this.lastDragOverItem.classList.remove(this.hoverClass);
            }
            this.lastDragOverItem = event.data.over;
            this.lastDragOverItem.classList.add(this.hoverClass);
        },
        isAddonationalInventory(container) {
            return container.className.includes(this.addonationalInventoryClassName);
        },
        resetStates() {
            this.swappingObject = null;
            this.selectedItem = null;
            this.action = null;
            this.newSlotId = -1;
            this.moveBetweenInventories = false;
            if (this.lastDragOverItem) {
                this.lastDragOverItem.classList.remove('on-drag-enter');
                this.lastDragOverItem = null;
            }
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