<template>
  <div id="bankWindow" @mousedown="onMouseDown">
    <Bank :characterData="bankData"></Bank>
  </div>
</template>

<script>
import Bank from '@/components/Bank.vue';

export default {
    name: 'bankWindow',
    props: {
        bankData: Object,
    },
    components: {
        Bank,
    },
    methods: {
        onMouseDown() {
            console.log(`On mouse down inside BankView.vue`);
        },
    },
};
</script>

<style scoped>
#bankWindow {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>
