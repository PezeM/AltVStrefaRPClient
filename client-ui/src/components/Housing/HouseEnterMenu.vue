<template>
    <div class="house-enter-menu">
        <div class="row mb-3">
            <div class="col">
                <p class="text-center">
                    Drzwi:
                    <span
                        class="closed"
                        v-bind:class="{ opened: !isClosed }"
                    >{{ getDoorsText }}</span>
                </p>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <button type="button" class="btn btn-primary btn-block">Wejdź</button>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <button type="button" class="btn btn-primary btn-block">Otwórz drzwi</button>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <button type="button" class="btn btn-primary btn-block">Zamknij drzwi</button>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <button type="button" class="btn btn-danger btn-block">Wyjdź</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isClosed: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            lastTimeButtonPressed: new Date().getTime() - this.cooldownTime,
            cooldownTime: 500,
        };
    },
    computed: {
        getDoorsText() {
            return this.isClosed ? 'Zamknięte' : 'Otwarte';
        },
    },
};
</script>

<style scoped>
.house-enter-menu p {
    font-family: 'Roboto';
}

.house-enter-menu .closed {
    color: red;
}

.house-enter-menu .opened {
    color: rgb(20, 150, 20);
}
</style>
