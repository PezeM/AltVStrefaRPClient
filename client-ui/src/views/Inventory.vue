<template>
  <div id="inventory">
    <div class="container-fluid h-100 w-100">
      <!-- <div id="GridLayout" class="GridLayout">
        <div class="BlockLayout BlockLayout--typeGrid" tabindex="0">
          <div class="BlockWrapper">
            <a class="Block Block--isDraggable" title="Click to drag">
              <div class="BlockContent">
                <h3>No eldo</h3>
              </div>
            </a>
          </div>
        </div>
        <div class="BlockLayout BlockLayout--typeGrid" tabindex="0">
          <div class="BlockWrapper">
            <a class="Block Block--isDraggable" title="Click to drag">
              <div class="BlockContent">
                <h3>No eldo 2</h3>
              </div>
            </a>
          </div>
        </div>
        <div class="BlockLayout BlockLayout--typeGrid" tabindex="0">
          <div class="BlockWrapper">
            <a class="Block" title="Click to drag">
              <div class="BlockContent">
                <h3>No eldo 3</h3>
              </div>
            </a>
          </div>
        </div>
      </div>-->
      <div class="row align-items-end h-100">
        <div class="col-3">Tutaj bedzie equipped inventory</div>
        <div class="col-9">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="inventory-container">
                  <div class="row m-0">
                    <div
                      v-for="(n, index) in playerInventoryMaxSlots"
                      v-bind:key="index"
                      v-bind:id="index"
                      class="col-lg-2 col-md-4 inventory-slot p-1"
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
              <div class="inventory-container">
                <div class="row m-0">
                  <div
                    v-for="(index) in playerInventoryMaxSlots"
                    v-bind:key="index"
                    v-bind:id="index"
                    class="col-lg-2 col-md-4 inventory-slot p-1"
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
        console.log(containers);

        const swappable = new Swappable(containers, {
            draggable: '.isDraggable',
            distance: 50000,
            delay: 100,
            mirror: {
                appendTo: containerSelector,
                constrainDimensions: true,
            },
            plugins: [Plugins.ResizeMirror],
        });

        swappable.on('swappable:start', this.onSwappableStart.bind(this));
        swappable.on('swappable:swap', this.onSwappableSwap.bind(this));
        swappable.on('swappable:swapped', this.onSwappableSwapped.bind(this));
        swappable.on('swappable:stop', this.onSwappableStop.bind(this));
        swappable.on('drag:stop', event => {
            console.log(event);
            this.newSlotId = event.data.originalSource.parentElement;
            console.log(this.newSlotId);
        });
    },
    data() {
        return {
            lastAffectedItems: [],
            playerInventoryMaxSlots: 30,
            withItem: 'withItem',
            swappingObject: null,
            swappingItem: null,
            itemToSwap: null,
            newSlotId: -1,
            action: null,
            items: [
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
            ],
        };
    },
    methods: {
        onSwappableStart(event) {
            this.swappingObject = event.dragEvent.data.originalSource;
            this.swappingItem = this.getItemById(this.swappingObject.dataset.itemid);
            console.log(`Swapping item = ${JSON.stringify(this.swappingItem, null, 4)}`);
            if (!this.isSwappable(this.swappingObject._prevClass) || this.swappingItem == null) {
                event.cancel();
                console.log(`Event canceled`);
            }
            console.log(`Swappable started ${JSON.stringify(event, null, 4)}`);
            console.log(`Swapping object ${JSON.stringify(this.swappingObject, null, 4)}`);
        },
        onSwappableSwap(event) {
            if (this.swappingObject == null) return;
            this.itemToSwap = this.getItemById(event.dragEvent.data.over.dataset.itemid);
            if (this.itemToSwap == null) {
                this.action = 'swap';
                // There was no item in that cell, it means we should drop it there
            } else {
                // There is item in that cell.
                // If it has the same name we should stack it instead of swapping
                // Have to get stack size and stack it to max
                // Rest is another item which we have to copy and save to database
                // And return to next slot
                if (this.swappingItem.Name == this.itemToSwap.Name && this.swappingItem.StackSize > 1) {
                    console.log(`We should stack`);
                    this.action = 'stack';
                    event.cancel();
                } else {
                    this.action = 'swap';
                }
            }
            console.log('swappable:swap');
            // console.log(JSON.stringify(event, null, 4));
        },
        onSwappableSwapped(event) {
            if (this.swappingItem == null) return;
            // this.newSlotId = event.data.dragEvent.originalSource.parentElement.outerHTML;
            // console.log(`NewSlotId = ${this.newSlotId}`);
            console.log(event);
            console.log('swappable:swapped');
        },
        onSwappableStop(event) {
            // Send data
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
                default:
                    break;
            }
            this.swappingObject = null;
            this.swappingItem = null;
            this.action = null;
            // this.newSlotId = -1;
        },
        onItemStack() {
            let amountOfItemsToStack = this.swappingItem.Quantity;
            const maxQuantity = this.itemToSwap.StackSize - this.itemToSwap.Quantity;
            const toAdd = Math.min(amountOfItemsToStack, maxQuantity);
            if (toAdd <= 0) return;
            this.itemToSwap.Quantity += toAdd;
            this.swappingItem.Quantity -= toAdd;
            if (this.swappingItem.Quantity <= 0) {
                console.log(`Should delete item`);
                this.items = this.items.filter(i => i.Id != this.swappingItem.Id);
            }
            amountOfItemsToStack -= toAdd;
            alt.emit('inventoryStackItems', this.itemToSwap.Id, this.swappingItem.Id);
            this.addItemToLastAffectedItems(this.itemToSwap, this.swappingItem);
        },
        onItemSwap() {
            // const temporarySlot = this.itemToSwap.SlotId;
            // this.itemToSwap.SlotId = this.swappingItem.SlotId;
            // this.swappingItem.SlotId = temporarySlot;
            // alt.emit('inventorySwapItems', this.itemToSwap.Id, this.itemToSwap.SlotId, this.swappingItem.Id, this.swappingItem.SlotId);
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
    },
};
</script>

<style>
#inventory {
    /* background-color: rgba(0, 0, 0, 0.561); */
}

.inventory-container {
    min-height: 35vh;
    min-width: 20rem;
    max-height: 40vh;
    max-width: 35rem;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.15);
    border: 3px solid white;
}

.inventory-slot {
    width: 96px;
    height: 96px;
    background-color: rgba(0, 0, 0, 0.15);
    border: 1px solid white;
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