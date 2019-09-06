<template>
    <div class="admin-debug-menu">
        <h1>Admin debug menu</h1>
        <div class="row">
            <div class="col-3">
                <div class="card border shadow">
                    <div class="card-body">
                        <p
                            class="card-text"
                        >Debug mode: {{ debugModeStatus ? 'włączony' : 'wyłączony' }}</p>
                        <button
                            class="btn btn-primary"
                            @click="toggleDebugMode"
                        >{{ debugModeStatus ? 'Wyłącz' : 'Włącz' }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'adminDebugMenu',
    mounted() {
        alt.on('adminMenu::toggledDebugMode', this.toggledDebugMode);
    },
    data() {
        return {
            debugModeStatus: false,
        };
    },
    methods: {
        toggleDebugMode() {
            alt.emit('adminMenu::toggleDebugMode');
        },
        toggledDebugMode(debugStatus) {
            this.debugModeStatus = debugStatus;
        },
    },
};
</script>

<style>
</style>