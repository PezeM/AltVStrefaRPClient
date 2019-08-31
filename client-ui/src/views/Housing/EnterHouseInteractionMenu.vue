<template>
    <div id="enter-house-interaction-menu">
        <div class="enter-house-interaction-menu container"></div>
    </div>
</template>

<script>
export default {
    name: 'enterHouseInteractionMenu',
    props: {
        house: {
            type: Object,
            default: function() {
                return {
                    houseType: 1,
                    price: 150,
                    position: { x: 1, y: 1, z: 2 },
                    interiorName: 'Małe mieszkanie',
                    owner: false,
                    isClosed: true,
                };
            },
        },
    },
};
</script>

<style scoped>
#enter-house-interaction-menu {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.enter-house-interaction-menu {
    width: 40rem;
    height: 30rem;
    position: relative;
    background-color: #f8f9fa;
    color: rgb(0, 0, 0);
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 0 15px 8px rgba(0, 0, 0, 0.25);
}
</style>