<template>
    <div class="hotel-enter-menu">
        <div class="row mb-3">
            <div class="col">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text small-input-label">Pokój</span>
                    </div>
                    <input
                        type="number"
                        min="0"
                        max="2000"
                        class="form-control"
                        placeholder="Pokój"
                        v-model="hotelRoom"
                    />
                </div>
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
        hotelRoom: {
            type: Number,
        },
    },
    data() {
        return {
            lastTimeButtonPressed: new Date().getTime() - this.cooldownTime,
            cooldownTime: 500,
        };
    },
};
</script>

<style scoped>
.small-input-label {
    padding: 0rem 0.4rem;
}
</style>