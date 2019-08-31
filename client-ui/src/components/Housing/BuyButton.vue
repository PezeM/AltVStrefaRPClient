<template>
    <div class="row">
        <div class="col">
            <button
                class="btn btn-success btn-block"
                @click="onClickButton"
            >{{ buttonText }} {{ price }}$</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        price: {
            type: Number,
            required: true,
        },
        buttonText: {
            type: String,
            required: true,
        },
    },
    methods: {
        onClickButton() {
            this.$emit('buy-button-clicked');
        },
    },
};
</script>