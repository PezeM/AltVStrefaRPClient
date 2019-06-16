<template>
    <modal name="delete-business-modal" transition="pop-out" height="auto">
        <div class="container">
            <div class="modal-header">
                <h5 class="modal-title" id="modalCenterTitle">Czy na pewno chcesz usunąć biznes?</h5>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="closeDeleteBusinessModal">Zamknij</button>
                <button type="button" class="btn btn-danger" @click="deleteBusiness">Usuń biznes</button>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    name: 'deleteBusinessModal',
    methods: {
        deleteBusiness() {
            this.$emit('delete-business');
        },
        closeDeleteBusinessModal() {
            this.$modal.hide('delete-business-modal');
        },
    },
};
</script>

<style></style>
