<template>
    <div class="admin-debug-menu">
        <h2>Debug mode</h2>
        <div class="row">
            <div class="col-3">
                <div class="card border shadow">
                    <div class="card-body">
                        <p class="card-text font-weight-bold">
                            Debug mode:
                            <span
                                class="disabled"
                                :class="{active: debugModeStatus}"
                            >{{ debugModeStatus ? 'włączony' : 'wyłączony' }}</span>
                        </p>
                        <button
                            class="btn btn-success"
                            :class="{'btn-danger': debugModeStatus}"
                            @click="toggleDebugMode"
                        >{{ debugModeStatus ? 'Wyłącz' : 'Włącz' }}</button>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card border shadow">
                    <div class="card-body">
                        <p class="card-text font-weight-bold">
                            Noclip:
                            <span
                                class="disabled"
                                :class="{active: noclipStatus}"
                            >{{ noclipStatus ? 'włączony' : 'wyłączony' }}</span>
                        </p>
                        <button
                            class="btn btn-success"
                            :class="{'btn-danger': noclipStatus}"
                            @click="toggleDebugMode"
                        >{{ noclipStatus ? 'Wyłącz' : 'Włącz' }}</button>
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
        alt.on('adminMenu::toggledNoclipMode', this.toggleNoclipMode);
    },
    data() {
        return {
            debugModeStatus: false,
            noclipStatus: false,
        };
    },
    methods: {
        toggleDebugMode() {
            alt.emit('adminMenu::toggleDebugMode');
        },
        toggledDebugMode(debugStatus) {
            this.debugModeStatus = debugStatus;
        },
        toggleNoclipMode() {
            alt.emit('adminMenu::toggleNoclipMode');
        },
        toggledNoclipMode(noclipStatus) {
            this.noclipStatus = noclipStatus;
        },
    },
};
</script>

<style scoped>
.disabled {
    color: red;
}

.active {
    color: green;
}
</style>