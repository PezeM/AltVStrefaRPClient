<template>
  <div id="bankWindow">
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
};

alt;
</script>

<style scoped>
#bankWindow {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>
