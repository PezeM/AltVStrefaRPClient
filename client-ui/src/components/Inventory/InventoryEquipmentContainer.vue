<template>
    <div class="row m-0">
        <div
            v-for="(item, key) in equipmentItems"
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
</template>

<script>
export default {
    name: 'inventory-equipment-container',
    props: {
        equipmentItems: {
            type: Object,
        },
    },
};
</script>

<style scoped>
.item-slot {
    width: 64px;
    height: 80px;
    padding: 0.1rem;
    background: rgba(0, 0, 0, 0.5);
    mix-blend-mode: normal;
    border: 1px solid rgba(133, 133, 133, 0.4);

    transition: 0.3s;
}

.item-slot:hover {
    box-shadow: inset 0px 0px 0px 1px #f3f3f3;
}
</style>