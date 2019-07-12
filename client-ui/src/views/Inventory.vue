<template>
  <div id="inventory" v-on:keyup.esc="closeInventory()" v-on:keyup.i="closeInventory()">
    <div class="container-fluid h-100 w-100">
      <div class="row align-items-end h-100">
        <div class="col-3">Tutaj bedzie equipped inventory</div>
        <div class="col-9">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="inventory-container">
                  <div class="row m-0 p-1">
                    <div
                      v-for="(n, index) in playerInventoryMaxSlots"
                      v-bind:key="index"
                      v-bind:id="index"
                      class="col-lg-2 col-md-4 inventory-slot"
                    >
                      <div
                        class="slot-content isDraggable"
                        v-bind:class="{ withItem: itemAtSlot(index) }"
                        v-bind:data-itemId="itemAtSlot(index) ? itemAtSlot(index).Id : 0"
                      >
                        <div v-if="itemAtSlot(index)">
                          {{ itemAtSlot(index).Name }}
                          <br />
                          {{ itemAtSlot(index).SlotId }} - {{ itemAtSlot(index).Quantity }}
                        </div>
                        <div v-else>Item</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="inventory-container other-inventory">
                <div class="row m-0 p-1">
                  <div
                    v-for="(index) in playerInventoryMaxSlots"
                    v-bind:key="index"
                    v-bind:id="'other-' + index"
                    class="col-lg-2 col-md-4 inventory-slot"
                  >
                    <div class="slot-content isDraggable">Item</div>
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
import { setTimeout } from 'timers';
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
    },
    props: {
        initialItems: {
            type: Array,
            default: function() {
                return [
                    {
                        Id: 47,
                        Name: 'Jakieś spodnie',
                        StackSize: 1,
                        Quantity: 1,
                        IsDroppable: true,
                        EquipmentSlot: 10004,
                        SlotId: 15,
                    },
                    {
                        Id: 48,
                        Name: 'Jakieś spodnie',
                        StackSize: 1,
                        Quantity: 1,
                        IsDroppable: true,
                        EquipmentSlot: 10004,
                        SlotId: 1,
                    },
                    {
                        Id: 65,
                        Name: 'Jakieś spodnie',
                        StackSize: 1,
                        Quantity: 1,
                        IsDroppable: true,
                        EquipmentSlot: 10004,
                        SlotId: 2,
                    },
                    {
                        Id: 66,
                        Name: 'Jakieś spodnie',
                        StackSize: 1,
                        Quantity: 1,
                        IsDroppable: true,
                        EquipmentSlot: 10004,
                        SlotId: 3,
                    },
                    {
                        Id: 67,
                        Name: 'Jakieś spodnie',
                        StackSize: 1,
                        Quantity: 1,
                        IsDroppable: true,
                        EquipmentSlot: 10004,
                        SlotId: 4,
                    },
                    {
                        Id: 68,
                        Name: 'Combat pistol',
                        StackSize: 1,
                        Quantity: 1,
                        IsDroppable: true,
                        EquipmentSlot: 12000,
                        SlotId: 5,
                    },
                    {
                        Id: 69,
                        Name: 'Combat pistol',
                        StackSize: 1,
                        Quantity: 1,
                        IsDroppable: true,
                        EquipmentSlot: 12000,
                        SlotId: 6,
                    },
                    {
                        Id: 70,
                        Name: 'Combat pistol',
                        StackSize: 1,
                        Quantity: 1,
                        IsDroppable: true,
                        EquipmentSlot: 12000,
                        SlotId: 7,
                    },
                    {
                        Id: 71,
                        Name: 'Combat pistol',
                        StackSize: 1,
                        Quantity: 1,
                        IsDroppable: true,
                        EquipmentSlot: 12000,
                        SlotId: 8,
                    },
                    {
                        Id: 72,
                        Name: 'Combat pistol',
                        StackSize: 1,
                        Quantity: 1,
                        IsDroppable: true,
                        EquipmentSlot: 12000,
                        SlotId: 9,
                    },
                    {
                        Id: 109,
                        Name: 'Burger',
                        StackSize: 20,
                        Quantity: 19,
                        IsDroppable: true,
                        EquipmentSlot: -1,
                        SlotId: 10,
                    },
                    {
                        Id: 110,
                        Name: 'Burger',
                        StackSize: 20,
                        Quantity: 8,
                        IsDroppable: true,
                        EquipmentSlot: -1,
                        SlotId: 11,
                    },
                ];
            },
        },
        initialEquippedItems: {
            type: Array,
            default: function() {
                return [];
            },
        },
        initialExtraInventory: {
            type: Object,
        },
    },
    data() {
        return {
            hoverClass: 'on-drag-enter',
            lastAffectedItems: [],
            playerInventoryMaxSlots: 30,
            withItem: 'withItem',
            moveBetweenInventories: false,
            swappingObject: null,
            selectedItem: null,
            lastDragOverItem: null,
            lastDragOverContaier: null,
            itemToSwap: null,
            newSlotId: -1,
            action: null,
            items: this.initialItems,
            equippedItems: this.initialEquippedItems,
            extraInventory: { ...this.initialExtraInventory },
        };
    },
    methods: {
        onSwappableStart(event) {
            this.swappingObject = event.dragEvent.data;
            event.dragEvent.data.source.classList.add('on-drag-start');
            this.selectedItem = this.getItemById(this.swappingObject.originalSource.dataset.itemid);
            // console.log(`Swapping item = ${JSON.stringify(this.selectedItem, null, 4)}`);
            if (!this.isSwappable(this.swappingObject.originalSource._prevClass) || this.selectedItem == null) {
                event.cancel();
                console.log(`Event canceled`);
            }
            console.log(event);
            console.log(`Swappable started ${JSON.stringify(event, null, 4)}`);
            console.log(`Swapping object ${JSON.stringify(this.swappingObject.originalSource, null, 4)}`);
        },
        onSwappableSwap(event) {
            if (this.selectedItem == null) return;
            this.applyHoverEffect(event);
            this.lastDragOverContaier = event.data.overContainer;
            if (this.lastDragOverContaier != this.swappingObject.sourceContainer) {
                console.log(`Move between inventories`);
                this.moveBetweenInventories = true;
            }

            this.itemToSwap = this.getItemById(event.dragEvent.data.over.dataset.itemid);
            if (this.itemToSwap == null) {
                // There was no item in that cell, it means we should drop it there
                this.action = 'swap';
                this.newSlotId = Number(event.data.over.parentNode.id);
                console.log(`New slot = ${this.newSlotId}`);
            } else {
                if (this.selectedItem.Name == this.itemToSwap.Name && this.selectedItem.StackSize > 1) {
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
            let amountOfItemsToStack = this.selectedItem.Quantity;
            const maxQuantity = this.itemToSwap.StackSize - this.itemToSwap.Quantity;
            const toAdd = Math.min(amountOfItemsToStack, maxQuantity);
            if (toAdd <= 0) return;
            this.itemToSwap.Quantity += toAdd;
            this.selectedItem.Quantity -= toAdd;
            if (this.selectedItem.Quantity <= 0) {
                console.log(`Should delete item`);
                this.items = this.items.filter(i => i.Id != this.selectedItem.Id);
            }
            amountOfItemsToStack -= toAdd;
            alt.emit('inventoryStackItems', this.itemToSwap.Id, this.selectedItem.Id);
            this.addItemToLastAffectedItems(this.itemToSwap, this.selectedItem);
        },
        onItemSwap() {
            if (this.itemToSwap != null) {
                // Swapping item with item
                const temporarySlot = this.itemToSwap.SlotId;
                this.itemToSwap.SlotId = this.selectedItem.SlotId;
                this.selectedItem.SlotId = temporarySlot;
                alt.emit('inventorySwapItems', this.selectedItem.Id, this.selectedItem.SlotId, this.itemToSwap.Id, this.itemToSwap.SlotId);
                this.addItemToLastAffectedItems(this.selectedItem, this.itemToSwap);
            } else if (this.newSlotId > -1) {
                // Moving item to empty slot
                this.selectedItem.SlotId = this.newSlotId;
                alt.emit('inventoryMoveItem', this.selectedItem.Id, this.selectedItem.SlotId);
                this.addItemToLastAffectedItems(this.selectedItem);
            }
        },
        onItemDrop() {
            if (this.selectedItem == null) return;
            if (!this.selectedItem.IsDroppable) {
                // Propably emit notification that you can't drop this item
                return;
            }
            alt.emit('inventoryDropItem', this.selectedItem.Id, this.selectedItem.Quantity);
            // Temporary till user can select quantity
            this.items = this.items.filter(i => i.Id !== this.selectedItem.Id);
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
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].SlotId == slotId) return this.items[i];
            }
            return null;
        },
        getItemById(itemId) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].Id == itemId) return this.items[i];
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
            if (this.lastDragOverItem) {
                this.lastDragOverItem.classList.remove('on-drag-enter');
                this.lastDragOverItem = null;
            }
        },
    },
};
</script>

<style>
#inventory {
    /* background-image: url('../assets/example-image.jpg'); */
    background-color: rgba(0, 0, 0, 0.561);
    padding-bottom: 2em;
}

.inventory-container {
    min-height: 45vh;
    /* min-width: 20rem; */
    max-height: 50vh;
    /* max-width: 35rem; */
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