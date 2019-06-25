<template>
  <div class="town-hall-registration-page">
    <div class="row mb-3">
      <div class="col-4">
        <div class="card h-100 shadow rounded border text-center">
          <div class="card-body">
            <button class="btn btn-primary action-button">Coś</button>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card h-100 shadow rounded border text-center">
          <div class="card-body align-items-center d-flex justify-content-center">
            <p class="card-text">
              Aktualna liczba pracowników:
              <strong>{{ data.employeesCount }}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'townHallRegistrationPage',
    props: {
        data: {
            type: Object,
        },
    },
    mounted() {
        this.$emit('update-menu-name', 'Rejestracja');
    },
    methods: {},
};
</script>

<style scoped>
.town-hall-registration-page p {
    font-family: 'Roboto', sans-serif;
}

.town-hall-registration-page .action-button {
    min-height: 3rem;
    min-width: 5rem;
}
</style>
