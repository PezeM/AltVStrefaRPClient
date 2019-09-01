<template>
    <div id="house-interior-exit-menu">
        <div class="house-interior-exit-menu container">
            <div class="row menu-header">
                <div class="col">
                    <p class="mt-1 mb-1 menu-header-text">Wyjście</p>
                </div>
            </div>
            <div class="row house-interior-exit-menu-container">
                <div class="col">
                    <div class="row mb-3">
                        <div class="col">
                            <button
                                type="button"
                                class="btn btn-primary btn-block"
                                @click="exitInterior"
                            >Wyjdź</button>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                            <button
                                type="button"
                                class="btn btn-primary btn-block"
                                @click="openHouseDoor"
                            >Otwórz drzwi</button>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                            <button
                                type="button"
                                class="btn btn-primary btn-block"
                                @click="closeHouseDoor"
                            >Zamknij drzwi</button>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                            <button
                                type="button"
                                class="btn btn-danger btn-block"
                                @click="closeMenu"
                            >Zamknij menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        exitInterior() {
            alt.emit('tryLeaveHouse');
        },
        openHouseDoor() {
            alt.emit('tryOpenHouseDoor');
        },
        closeHouseDoor() {
            alt.emit('tryCloseHouseDoor');
        },
        closeMenu() {
            alt.emit('closeHouseInteriorExitMenu');
        },
    },
};
</script>

<style scoped>
#house-interior-exit-menu {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.house-interior-exit-menu {
    max-width: 15rem;
    position: relative;
    background-color: #000000e3;
    color: #f3f3f3;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 0 15px 8px rgba(0, 0, 0, 0.25);
}

.house-interior-exit-menu-container {
    padding: 1rem;
}

.house-interior-exit-menu p {
    font-family: 'Roboto';
}

.menu-header {
    background-color: #f8f8f8;
    box-shadow: 0 0 15px 6px rgba(0, 0, 0, 0.5);
}

.menu-header-text {
    font-family: 'Roboto' !important;
    color: #333333;
    font-size: 1.3rem;
}
</style>