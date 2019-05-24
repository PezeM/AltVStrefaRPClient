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
    width: 100%;
    height: 100%;
    z-index: 10;
}
</style>
