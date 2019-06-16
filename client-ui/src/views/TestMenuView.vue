<template>
    <div class="testMenuView" @click="onClick">
        <TestMenu></TestMenu>
    </div>
</template>

<script>
import TestMenu from '@/components/TestMenu.vue';

export default {
    name: 'testMenuView',
    props: {
        testData: Object,
    },
    components: {
        TestMenu,
    },
    methods: {
        onClick() {
            console.log(`Clicked inside TestMenuView.vue`);
        },
    },
};
</script>
