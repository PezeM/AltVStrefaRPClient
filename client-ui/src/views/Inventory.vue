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
              <div class="row">
                <div class="inventory-container">
                  <div class="row m-0 p-1">
                    <div
                      v-for="(item, index) in personalInventoryBySlotId"
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
                          {{ item.slotId }} - {{ item.quantity }}
                        </div>
                        <div v-else>Item</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" v-if="showAddonationalInventory">
              <p
                class="text-left"
              >Nazwa dodatkowego inventory {{ addonationalInventory.inventoryName }}</p>
              <p class="text-left">Id dodatkowego inventory {{ addonationalInventory.inventoryId }}</p>
              <div class="inventory-container addonational-inventory">
                <div class="row m-0 p-1">
                  <div
                    v-for="(n, index) in addonationalInventory.inventorySlots"
                    v-bind:key="index"
                    v-bind:id="index"
                    class="col-lg-2 col-md-4 inventory-slot"
                  >
                    <div
                      class="slot-content isDraggable"
                      v-bind:class="{ withItem: itemAtSlotInAddonationalInv(index) }"
                      v-bind:data-itemId="itemAtSlotInAddonationalInv(index) ? itemAtSlotInAddonationalInv(index).id : 0"
                    >
                      <div v-if="itemAtSlotInAddonationalInv(index)">
                        {{ itemAtSlotInAddonationalInv(index).name }}
                        <br />
                        {{ itemAtSlotInAddonationalInv(index).slotId }} - {{ itemAtSlotInAddonationalInv(index).quantity }}
                      </div>
                      <div v-else>Item</div>
                    </div>
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
import { Swappable, Plugins } from '@shopify/draggable';

export default {
    name: 'inventory',
    mounted() {
        const containerSelector = '.inventory-container';
        const containers = this.$el.querySelectorAll(containerSelector);

        const swappable = new Swappable(containers, {
            draggable: '.isDraggable',
            delay: 150,
            mirror: {
                appendTo: containerSelector,
                constrainDimensions: true,
            },
            plugins: [Plugins.ResizeMirror],
        });

        swappable.on('swappable:start', this.onSwappableStart.bind(this));
        swappable.on('swappable:swap', this.onSwappableSwap.bind(this));
        swappable.on('swappable:stop', this.onSwappableStop.bind(this));
        swappable.on('drag:out:container', this.onDragOutContainer.bind(this));

        console.log(`Addonation inventory is ${this.addonationalInventory}`);
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
                            isDroppable: true,
                            equipmentSlot: 10004,
                            slotId: 15,
                        },
                        {
                            id: 48,
                            name: 'Jakieś spodnie',
                            stackSize: 1,
                            quantity: 1,
                            isDroppable: true,
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
            playerInventoryMaxSlots: 30,
            // Class indicating slot is with item
            withItem: 'withItem',
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
        };
    },
    methods: {
        onSwappableStart(event) {
            this.swappingObject = event.dragEvent.data;
            event.dragEvent.data.source.classList.add('on-drag-start');
            // console.log(`Swapping item = ${JSON.stringify(this.selectedItem, null, 4)}`);
            if (!this.isSwappable(this.swappingObject.originalSource._prevClass)) {
                event.cancel();
                console.log(`Event canceled`);
                return;
            }
            console.log(event);
            console.log(`Swappable started ${JSON.stringify(event, null, 4)}`);
            // console.log(`Swapping object ${JSON.stringify(this.swappingObject.originalSource, null, 4)}`);
        },
        onSwappableSwap(event) {
            this.applyHoverEffect(event);
            this.lastDragOverContaier = event.data.overContainer;
            if (this.lastDragOverContaier != this.swappingObject.sourceContainer) {
                console.log(`Move between inventories`);
                this.moveBetweenInventories = true;
                if (this.swappingObject.sourceContainer.className.includes('addonational-inventory')) {
                    console.log(`Swapping from addonational inventory`);
                    this.selectedItem = this.getItemByIdFromAddonationalInventory(this.swappingObject.originalSource.dataset.itemid);
                    this.itemToSwap = this.getItemById(event.dragEvent.data.over.dataset.itemid);
                } else {
                    console.log('Swapping to addonational inventory');
                    this.selectedItem = this.getItemById(this.swappingObject.originalSource.dataset.itemid);
                    this.itemToSwap = this.getItemByIdFromAddonationalInventory(event.dragEvent.data.over.dataset.itemid);
                }
            } else if (this.swappingObject.sourceContainer.className.includes('addonational-inventory')) {
                this.selectedItem = this.getItemByIdFromAddonationalInventory(this.swappingObject.originalSource.dataset.itemid);
                this.itemToSwap = this.getItemByIdFromAddonationalInventory(event.dragEvent.data.over.dataset.itemid);
            } else {
                this.itemToSwap = this.getItemById(event.dragEvent.data.over.dataset.itemid);
                this.selectedItem = this.getItemById(this.swappingObject.originalSource.dataset.itemid);
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
                    if (this.swappingObject.sourceContainer.className.includes('addonational-inventory')) {
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
                    alt.emit(
                        'inventorySwapItems',
                        this.selectedItem.id,
                        this.selectedItem.slotId,
                        this.itemToSwap.id,
                        this.itemToSwap.slotId
                    );
                }

                this.addItemToLastAffectedItems(this.selectedItem, this.itemToSwap);
            } else if (this.newSlotId > -1) {
                // Moving item to empty slot
                if (this.moveBetweenInventories) {
                    this.selectedItem.slotId = this.newSlotId;
                    alt.emit('transferItemBetweenInventories');
                    console.log(`Moving between inventories`);
                    // this.swappingObject = this.lastDragOverContaier;
                    if (this.swappingObject.sourceContainer.className.includes('addonational-inventory')) {
                        console.log(`Moving from addonational inventory`);
                        this.personalInventory.items.push(this.selectedItem);
                        this.addonationalInventory.items = this.addonationalInventory.items.filter(i => i.id !== this.selectedItem.id);
                    } else {
                        console.log('Moving to addonational inventory');
                        this.addonationalInventory.items.push(this.selectedItem);
                        this.personalInventory.items = this.personalInventory.items.filter(i => i.id !== this.selectedItem.id);
                    }
                } else {
                    console.log('aaaaaaaaaa');
                    this.selectedItem.slotId = this.newSlotId;
                    alt.emit('inventoryMoveItem', this.selectedItem.id, this.selectedItem.slotId);
                }
                this.addItemToLastAffectedItems(this.selectedItem);
            }
        },
        onItemDrop() {
            if (this.selectedItem == null) return;
            if (!this.selectedItem.isDroppable) {
                // Propably emit notification that you can't drop this item
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
        personalInventoryBySlotId() {
            const array = Array(this.personalInventory.inventorySlots).fill(null);
            for (let i = 0; i < this.personalInventory.inventorySlots; i++) {
                const item = this.personalInventory.items[i];
                if (item) {
                    array[item.slotId] = item;
                }
            }
            return array;
        },
        showAddonationalInventory() {
            return !(Object.entries(this.addonationalInventory).length === 0 && this.addonationalInventory.constructor === Object);
            // return typeof this.addonationalInventoryContainer !== 'undefined';
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

.slot-content {
    width: 100%;
    height: 100%;
    overflow: auto;
}

.BlockLayout {
    border: 3px solid blue;
    width: 10em;
}

.color-rectangle-inventory-ovelray {
    background-color: rgba(0, 0, 0, 143);
}

.color-1 {
    color: rgba(255, 255, 255, 255);
}

.color-2 {
    color: rgba(68, 68, 68, 255);
}

.color-3 {
    color: rgba(112, 112, 112, 255);
}

.color-4 {
    color: rgba(65, 65, 65, 255);
}
</style>