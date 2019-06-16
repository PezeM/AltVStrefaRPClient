<template>
    <modal name="add-new-role-modal" transition="pop-out" height="auto" @before-open="beforeOpen">
        <div class="container">
            <div class="modal-header">
                <h5 class="modal-title">Dodaj nowe stanowisko</h5>
            </div>
            <div class="modal-body">
                <div class="row">
                    <label class="col-sm-6 col-form-label">Nazwa stanowiska</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" v-model="newRole.RankName" placeholder="Podaj nazwę" />
                    </div>
                </div>
                <div class="form-check row">
                    <label class="col-sm-10 form-check-label">Otwieranie menu biznesu</label>
                    <input class="col-sm-1 form-check-input" type="checkbox" v-model="newRole.Permissions.CanOpenBusinessMenu" />
                </div>
                <div class="form-check row">
                    <label class="col-sm-10 form-check-label">Klucze do budynków</label>
                    <input class="col-sm-1 form-check-input" type="checkbox" v-model="newRole.Permissions.HaveBusinessKeys" />
                </div>
                <div class="form-check row">
                    <label class="col-sm-10 form-check-label">Otwieranie inwentarza</label>
                    <input class="col-sm-1 form-check-input" type="checkbox" v-model="newRole.Permissions.CanOpenBusinessInventory" />
                </div>
                <div class="form-check row">
                    <label class="col-sm-10 form-check-label">Klucze do pojazdów</label>
                    <input class="col-sm-1 form-check-input" type="checkbox" v-model="newRole.Permissions.HaveVehicleKeys" />
                </div>
                <div class="form-check row">
                    <label class="col-sm-10 form-check-label">Rekrutowanie pracowników</label>
                    <input class="col-sm-1 form-check-input" type="checkbox" v-model="newRole.Permissions.CanInviteNewMembers" />
                </div>
                <div class="form-check row">
                    <label class="col-sm-10 form-check-label">Zarządzanie pracownikami</label>
                    <input class="col-sm-1 form-check-input" type="checkbox" v-model="newRole.Permissions.CanManageEmployees" />
                </div>
                <div class="form-check row">
                    <label class="col-sm-10 form-check-label">Zarządzanie stanowiskami</label>
                    <input class="col-sm-1 form-check-input" type="checkbox" v-model="newRole.Permissions.CanManageRanks" />
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="closeNewRoleModal">Zamknij</button>
                <button type="button" class="btn btn-primary" @click="addNewRole">Dodaj stanowisko</button>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    name: 'addNewRoleModal',
    data() {
        return {
            newRole: {
                RankName: '',
                Permissions: {},
            },
        };
    },
    methods: {
        beforeOpen(event) {
            console.log(JSON.stringify(event.params));
            this.newRole = event.params;
        },
        addNewRole() {
            this.$emit('add-new-role', this.newRole);
        },
        closeNewRoleModal() {
            this.$modal.hide('add-new-role-modal');
        },
    },
};
</script>
