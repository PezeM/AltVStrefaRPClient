<template>
  <modal name="new-rank-modal" transition="pop-out" height="auto" @before-open="beforeOpen">
    <div class="container">
      <div class="modal-header">
        <h5 class="modal-title">Dodaj nowe stanowisko</h5>
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
              v-model="newRank.RankName"
            >
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Priorytet</label>
          <div class="col-sm-10">
            <input type="number" min="1" max="99" class="form-control" v-model="newRank.Priority">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeNewRankModal">Zamknij</button>
        <button type="button" class="btn btn-primary" @click="addNewRank">Dodaj stanowisko</button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
    name: 'newRankModal',
    data() {
        return {
            newRank: {
                RankName: '',
                Priority: '',
                RankType: 0,
            },
            regex: /^[a-zA-Z0-9ęółśążźćńĘÓŁŚĄŻŹĆŃ\s]{3,20}$/,
        };
    },
    methods: {
        beforeOpen(event) {
            this.newRank = event.params.newRank;
        },
        addNewRank() {
            if (this.newRank && this.newRank.Priority >= 0 && this.newRank.Priority <= 100 && this.validateName) {
                this.$emit('add-new-rank', this.newRank);
            } else {
                alt.emit('showNotification', 3, 'Błąd', 'Podano błędne dane.', 5000);
            }
        },
        closeNewRankModal() {
            this.$modal.hide('new-rank-modal');
        },
    },
    computed: {
        validateName() {
            return this.regex.test(this.newRank.RankName);
        },
    },
};
</script>
