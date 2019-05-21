<template>
  <div id="bank-window">
    <bank :characterData="bankData"></bank>
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
</script>

<style scoped>
#bank-window {
    width: 100%;
    height: 100%;
}
</style>
