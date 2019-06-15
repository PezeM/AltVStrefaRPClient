<template>
    <div class="testMenu" @click="onClick">
        <div class="myContainer">
            <h1>{{ name }}</h1>
            <div class="buttonGroup">
                <button class="buttonHover" @click="buttonClick">Eluwa</button>
                <span class="textHover">Hover me</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'testMenu',
    data() {
        return {
            name: 'Grzegorz',
        };
    },
    methods: {
        onClick() {
            console.log('Clicked inside TestMenu.vue');
        },
        buttonClick() {
            console.log(`Kliknieto buttonik sobie`);
        },
    },
};
</script>

<style>
.testMenu {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.myContainer {
    width: 20vh;
    height: 20vh;
    background-color: red;
    border-radius: 8px;
}

.buttonGroup {
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 1fr 1fr;
}

.buttonHover {
    padding: 6px;
    border-radius: 6px;
    margin: 12px;
    background-color: green;
}

.buttonHover:hover {
    background-color: blue;
}

.textHover {
    margin: 12px;
    padding: 6px;
    color: #f8f8f8;
    border: 2px solid black;
}

.textHover:hover {
    color: black;
    border-color: white;
}
</style>
