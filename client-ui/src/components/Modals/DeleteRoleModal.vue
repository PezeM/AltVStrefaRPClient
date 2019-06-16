<template>
    <modal name="delete-role-modal" transition="pop-out" height="auto" @before-open="beforeOpen">
        <div class="container">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Usuwanie stanowiska</h5>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <label class="col-sm-6 col-form-label">Wybierz stanowisko</label>
                        <div class="col-sm-6">
                            <vSelect v-model="rankToDelete" label="RankName" :options="allRanks" :clearable="false" :filterable="true" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeDeleteRoleModal">Zamknij</button>
                    <button type="button" class="btn btn-danger" @click="deleteRole">Usuń stanowisko</button>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
import vSelect from 'vue-select';

export default {
    name: 'deleteRoleModal',
    components: {
        vSelect,
    },
    data() {
        return {
            allRanks: [],
            rankToDelete: null,
        };
    },
    methods: {
        beforeOpen(event) {
            console.log(JSON.stringify(event.params));
            this.allRanks = event.params;
        },
        deleteRole() {
            this.$emit('delete-role', this.rankToDelete);
        },
        closeDeleteRoleModal() {
            this.$modal.hide('delete-role-modal');
        },
    },
};
</script>
