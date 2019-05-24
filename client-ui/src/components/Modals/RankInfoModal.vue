<template>
  <modal name="rank-info-modal" transition="pop-out" height="auto" @before-open="beforeOpen">
    <div class="container">
      <div class="modal-header">
        <h5 class="modal-title">{{ selectedRank.RankName }}</h5>
      </div>
      <div class="modal-body">
        <div class="form-check row">
          <label class="col-sm-10 form-check-label">Otwieranie menu biznesu</label>
          <input
            class="col-sm-1 form-check-input"
            type="checkbox"
            v-model="selectedRank.CanOpenBusinessMenu"
          >
        </div>
        <div class="form-check row">
          <label class="col-sm-10 form-check-label">Klucze do budynków</label>
          <input
            class="col-sm-1 form-check-input"
            type="checkbox"
            v-model="selectedRank.HaveBusinessKeys"
          >
        </div>
        <div class="form-check row">
          <label class="col-sm-10 form-check-label">Otwieranie inwentarza</label>
          <input
            class="col-sm-1 form-check-input"
            type="checkbox"
            v-model="selectedRank.CanOpenBusinessInventory"
          >
        </div>
        <div class="form-check row">
          <label class="col-sm-10 form-check-label">Klucze do pojazdów</label>
          <input
            class="col-sm-1 form-check-input"
            type="checkbox"
            v-model="selectedRank.HaveVehicleKeys"
          >
        </div>
        <div class="form-check row">
          <label class="col-sm-10 form-check-label">Rekrutowanie pracowników</label>
          <input
            class="col-sm-1 form-check-input"
            type="checkbox"
            v-model="selectedRank.CanInviteNewMembers"
          >
        </div>
        <div class="form-check row">
          <label class="col-sm-10 form-check-label">Zarządzanie pracownikami</label>
          <input
            class="col-sm-1 form-check-input"
            type="checkbox"
            v-model="selectedRank.CanManageEmployees"
          >
        </div>
        <div class="form-check row">
          <label class="col-sm-10 form-check-label">Zarządzanie stanowiskami</label>
          <input
            class="col-sm-1 form-check-input"
            type="checkbox"
            v-model="selectedRank.CanManageRanks"
          >
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeRankInfo">Zamknij</button>
        <button type="button" class="btn btn-primary" @click="saveRankChanges">Zapisz zmiany</button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
    name: 'rankInfoModal',
    data() {
        return {
            selectedRank: {
                RankName: '',
            },
        };
    },
    methods: {
        beforeOpen(event) {
            console.log(JSON.stringify(event.params));
            this.selectedRank = event.params;
        },
        saveRankChanges() {
            this.$emit('save-rank-changes', this.selectedRank);
        },
        closeRankInfo() {
            this.$modal.hide('rank-info-modal');
        },
    },
};
</script>


<style>
</style>
