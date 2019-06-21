<template>
  <modal name="change-tax-modal" transition="pop-out" height="auto" @before-open="beforeOpen">
    <div class="container">
      <div class="modal-header">
        <h5 class="modal-title" id="modalCenterTitle">Zmień podatek</h5>
      </div>
      <div class="modal-body">
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Nazwa</label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control-plaintext"
              placeholder="Podaj imię"
              v-model="tax.name"
              readonly
            >
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Wartość</label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              placeholder="Podaj wartość"
              v-model="tax.value"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            >
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeChangeTaxModal">Zamknij</button>
        <button type="button" class="btn btn-primary" @click="updateTax">Aktualizuj</button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
    name: 'changeTaxModal',
    data() {
        return {
            tax: {
                id: 1,
                name: 'Vehicle tax',
                value: '0.3',
            },
        };
    },
    methods: {
        beforeOpen(event) {
            this.tax = event.params;
        },
        updateTax() {
            if (this.tax && this.tax.value > 0) {
                this.$emit('update-tax-value', this.tax);
            }
        },
        closeChangeTaxModal() {
            this.$modal.hide('change-tax-modal');
        },
    },
};
</script>
