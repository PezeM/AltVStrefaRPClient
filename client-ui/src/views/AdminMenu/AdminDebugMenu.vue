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
        <div class="row mt-2">
            <div class="col-4">
                <div class="card border shadow h-100">
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="loadIplName">Załaduj interior</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="loadIplName"
                                    placeholder="Podaj nazwę interioru"
                                    v-model="loadIplName"
                                />
                            </div>
                            <button type="submit" class="btn btn-primary" @click="loadIpl">Załaduj</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card border shadow h-100">
                    <div class="card-body">
                        <p class="card-text">Aktywuj interior na twojej pozycji</p>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            @click="activateInteriorAtPlayerPosition"
                        >Aktywuj</button>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card border shadow h-100">
                    <div class="card-body">
                        <p class="card-text">Aktywuj test 3D sound</p>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            @click="activateTest3DSound"
                        >Aktywuj</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from '../../event-bus.js';

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
            loadIplName: '',
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
        loadIpl() {
            if (this.loadIplName == null || this.loadIplName.length < 3) {
                console.log('kurwa');
                EventBus.$emit('showNotification', 3, 'Błąd', 'Podano zbyt krótką nazwę interioru');
                return;
            }

            alt.emit('adminMenu::loadIpl', this.loadIplName);
        },
        activateInteriorAtPlayerPosition() {
            alt.emit('adminMenu::activateInteriorAtPlayerPosition');
        },
        activateTest3DSound() {
            alt.emit('adminMenu::activate3DSound');
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