<template>
    <div class="row w-100 inventory-top">
        <div class="col-2 p-0 inventory-header-date">
            <p class="inventory-text header-date-text">{{ gameInfo.hours }}:{{ gameInfo.minutes }}</p>
        </div>
        <div class="col-10 p-0 inventory-top-bar">
            <div class="row inventory-top-bar-container">
                <div class="col-8 my-auto">
                    <p class="inventory-text">Losowy header</p>
                </div>
                <div class="col-4 my-auto">
                    <span class="inventory-text">H: {{ gameInfo.health }}</span>
                    <span class="inventory-text ml-4">A: {{ gameInfo.armor }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'inventory-top-bar',
    props: {
        gameInfo: {
            type: Object,
            default: () => {
                return {
                    hours: 18,
                    minutes: 20,
                    health: 20,
                    armor: 50,
                };
            },
        },
    },
};
</script>

<style scoped>
.inventory-top .inventory-text {
    margin-bottom: 0;
}

.inventory-header-date {
    border-bottom-right-radius: 10px;
    border-bottom: 1px solid #f3f3f3;
}

.inventory-top-bar {
    border-bottom-left-radius: 10px;
    border-bottom: 1px solid #f3f3f3;
    border-left: 1px solid #f3f3f3;
}

.inventory-top-bar .inventory-top-bar-container {
    height: 100%;
    padding-left: 1.5rem;
}
</style>