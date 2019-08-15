<template>
    <div class="row m-0 w-100">
        <div
            v-for="(item, key) in equipmentItems"
            :key="key"
            :id="key"
            class="col-4 item-slot"
            :class="{ withItem: item != null }"
        >
            <span class="item-slot-name">{{ getSlotName(key) }}</span>
            <div
                v-if="item != null"
                class="slot-content isDraggable withItem"
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
                                <div class="row item-popover-quantity">Typ: {{ getSlotName(key) }}</div>
                            </div>
                        </div>
                    </template>
                </v-popover>
            </div>
            <div
                v-else
                class="slot-content isDraggable"
                :class="{ withItem: item != null }"
                v-bind:data-itemId="0"
            >
                <div class="item-wrapper"></div>
            </div>
        </div>
    </div>
</template>

<script>
import InventorySlotImages from '@/scripts/inventorySlotImages.js';
import InventoryNameImages from '@/scripts/inventoryNameImages.js';

export default {
    name: 'inventory-equipment-container',
    props: {
        equipmentItems: {
            type: Object,
        },
        isMovingItem: {
            type: Boolean,
        },
    },
    data() {
        return {
            tooltipDelay: {
                tooltipDelay: {
                    show: 500,
                    hide: 20,
                },
            },
        };
    },
    methods: {
        getCorrectImage(item) {
            const imageByName = InventoryNameImages[item.name];
            return imageByName != null ? imageByName : InventorySlotImages[item.equipmentSlot];
        },
        getSlotName(equipmentSlot) {
            switch (equipmentSlot) {
                case '1001':
                    return 'Tors';
                case '1002':
                    return 'Podkoszulek';
                case '1003':
                    return 'Top';
                case '1004':
                    return 'Spodnie';
                case '1005':
                    return 'Buty';
                case '1006':
                    return 'Pancerz';
                case '1007':
                    return 'Dodatki';
                case '1201':
                    return 'Dodatkowe';
                case '1202':
                    return 'Dodatkowe';
                case '1300':
                    return 'Lewa ręka';
                case '1301':
                    return 'Prawa ręka';
                case '1302':
                    return 'Telefon';
                case '1101':
                    return 'Maska';
                case '1102':
                    return 'Czapka';
                case '1103':
                    return 'Okulary';
                case '1104':
                    return 'Zegarek';
                case '1105':
                    return 'Bransoletka';
                case '1106':
                    return 'Uszy';
                case '1107':
                    return 'Akcesoria';
                case '1108':
                    return 'Plecak';
                case '1203':
                    return 'Dodatkowe';
                case '1000':
                default:
                    return 'Brak';
            }
        },
    },
};
</script>

<style scoped>
.item-slot {
    height: 5.5rem;
    padding: 0.1rem;
    background: rgba(0, 0, 0, 0.5);
    mix-blend-mode: normal;
    border: 1px solid rgba(133, 133, 133, 0.4);

    transition: box-shadow 0.25s;
}

.item-slot:hover {
    box-shadow: inset 0px 0px 0px 1px #f3f3f3;
}

.item-image {
    padding-top: 1.3rem;
}

.item-slot-name {
    position: absolute;
    top: 0.1rem;
    right: 0.4rem;
    font-size: 0.75rem;
    z-index: 1;

    color: #f3f3f3;
    text-shadow: 3px 1px 10px rgba(0, 0, 0, 1);
}

@media (max-width: 1281px) {
    .item-slot-name {
        font-size: 0.7rem;
    }
}

@media (max-width: 1025px) {
    .item-slot-name {
        font-size: 0.6rem;
    }
}

@media (max-width: 767.98px) {
    .item-slot-name {
        font-size: 0.5rem;
        word-wrap: break-word;
    }
}
</style>