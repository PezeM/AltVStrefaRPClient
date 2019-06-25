<template>
  <modal name="edit-rank-modal" transition="pop-out" height="auto" @before-open="beforeOpen">
    <div class="container">
      <div class="modal-header">
        <h5 class="modal-title">{{ selectedRank.RankName }}</h5>
      </div>
      <div class="modal-body">
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Nazwa</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              placeholder="Nazwa stanowiska..."
              maxlength="20"
              v-model="selectedRank.RankName"
            >
          </div>
        </div>
        <div class="form-group row" v-if="canChangePriority">
          <label for="inputPassword" class="col-sm-2 col-form-label">Priorytet</label>
          <div class="col-sm-10">
            <input
              type="number"
              min="1"
              max="99"
              class="form-control"
              v-model="selectedRank.Priority"
            >
          </div>
        </div>
        <div
          v-for="permission in selectedRank.Permissions"
          v-bind:key="permission.Id"
          class="form-check row"
        >
          <label class="col-sm-10 form-check-label">
            {{ permission.Name }}
            <small class="form-text text-muted">{{ permission.Description }}</small>
          </label>

          <input
            class="col-sm-1 form-check-input"
            type="checkbox"
            v-model="permission.HasPermission"
          >
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeRankInfo">Zamknij</button>
        <button
          type="button"
          class="btn btn-primary"
          @click="saveRankChanges"
          :disabled="!isChanged"
        >Zapisz zmiany</button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
    name: 'editRankModal',
    data() {
        return {
            selectedRank: {
                RankName: 'Elo',
            },
            originalRank: null,
            regex: /^[a-zA-Z0-9ęółśążźćńĘÓŁŚĄŻŹĆŃ\s]{3,20}$/,
        };
    },
    methods: {
        beforeOpen(event) {
            this.originalRank = event.params.rank;
            this.selectedRank = JSON.parse(JSON.stringify(this.originalRank));
        },
        saveRankChanges() {
            if (
                this.selectedRank &&
                this.isChanged &&
                this.selectedRank.Priority >= 0 &&
                this.selectedRank.Priority <= 100 &&
                this.validateName
            ) {
                this.$emit('save-rank-changes', this.selectedRank);
            } else {
                alt.emit('showNotification', 3, 'Błąd', 'Podano błędne dane.', 5000);
            }
        },
        closeRankInfo() {
            this.$modal.hide('edit-rank-modal');
        },
    },
    computed: {
        isChanged() {
            return JSON.stringify(this.originalRank) !== JSON.stringify(this.selectedRank);
        },
        canChangePriority() {
            return this.selectedRank.RankType === 1;
        },
        validateName() {
            return this.regex.test(this.selectedRank.RankName);
        },
    },
};
</script>

<style></style>
