<template>
    <div class="town-hall-ranks-page">
        <v-dialog />
        <EditRankModal v-on:save-rank-changes="saveRankChanges" />
        <NewRankModal v-on:add-new-rank="addNewRank" />

        <div class="row mb-3">
            <div class="col-4">
                <div class="card h-100 shadow rounded border text-center">
                    <div class="card-body">
                        <button class="btn btn-primary action-button" @click="showNewRankModal()">
                            <v-icon name="user-plus" />Dodaj nową role
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card h-100 shadow rounded border text-center">
                    <div class="card-body align-items-center d-flex justify-content-center">
                        <p class="card-text">
                            Aktualna liczba roli:
                            <strong>{{ data.rolesCount }}</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" v-if="ranks">
            <div class="col-12">
                <div class="overflow-auto ranks-table shadow">
                    <table class="table table-sm table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th>Stanowisko</th>
                                <th
                                    v-for="permission in ranks[0].Permissions"
                                    v-bind:key="permission.Id"
                                >{{ permission.Name }}</th>
                                <th style="width: 10%">Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="rank in getRanks" v-bind:key="rank.Id">
                                <td>{{ rank.RankName }}</td>
                                <td
                                    v-for="permission in rank.Permissions"
                                    v-bind:key="permission.Id"
                                >{{ betterPermissionDisplay(permission.HasPermission) }}</td>
                                <td>
                                    <button
                                        class="btn btn-danger"
                                        :disabled="canDeleteRank(rank)"
                                        @click="showRemoveRankDialog(rank)"
                                    >
                                        <v-icon name="user-slash" />
                                    </button>
                                    <button
                                        class="btn btn-primary"
                                        @click="showEditRankModal(rank)"
                                    >
                                        <v-icon name="user-edit" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue-awesome/icons/user-edit';
import 'vue-awesome/icons/user-plus';
import 'vue-awesome/icons/user-slash';
import Icon from 'vue-awesome/components/Icon';
import EditRankModal from '@/components/Modals/Fractions/EditRankModal.vue';
import NewRankModal from '@/components/Modals/Fractions/NewRankModal.vue';
import EventBus from '@/event-bus.js';

export default {
    name: 'townHallRanksPage',
    components: {
        'v-icon': Icon,
        EditRankModal,
        NewRankModal,
    },
    props: {
        data: {
            type: Object,
        },
        ranksData: {
            type: Array,
            default() {
                return [
                    {
                        Id: 3,
                        RankName: 'Burmistrz',
                        Priority: 100,
                        RankType: 2,
                        Permissions: [
                            {
                                Name: 'Zarządzanie pracownikami',
                                Description: 'Opis pierwszy',
                                HasPermission: true,
                                Id: 11,
                            },
                            {
                                Name: 'Korzystanie z pojazdów',
                                Description: 'Opis pierwszy',
                                HasPermission: true,
                                Id: 12,
                            },
                            {
                                Name: 'Zarządanie rangami',
                                Description: 'Opis pierwszy',
                                HasPermission: false,
                                Id: 13,
                            },
                        ],
                    },
                    {
                        Id: 4,
                        RankName: 'Pracownik',
                        Priority: 0,
                        RankType: 0,
                        Permissions: [
                            {
                                Name: 'Zarządzanie pracownikami',
                                Description: 'Opis pierwszy',
                                HasPermission: true,
                                Id: 15,
                            },
                            {
                                Name: 'Korzystanie z pojazdów',
                                Description: 'Opis pierwszy',
                                HasPermission: false,
                                Id: 16,
                            },
                            {
                                Name: 'Zarządanie rangami',
                                Description: 'Opis pierwszy',
                                HasPermission: false,
                                Id: 17,
                            },
                        ],
                    },
                    {
                        Id: 5,
                        RankName: 'Lepszy pracownik',
                        Priority: 10,
                        RankType: 1,
                        Permissions: [
                            {
                                Name: 'Zarządzanie pracownikami',
                                Description: 'Opis pierwszy',
                                HasPermission: true,
                                Id: 18,
                            },
                            {
                                Name: 'Korzystanie z pojazdów',
                                Description: 'Opis pierwszy',
                                HasPermission: false,
                                Id: 19,
                            },
                            {
                                Name: 'Zarządanie rangami',
                                Description: 'Opis pierwszy',
                                HasPermission: false,
                                Id: 20,
                            },
                        ],
                    },
                ];
            },
        },
    },
    data() {
        return {
            ranks: this.ranksData,
        };
    },
    mounted() {
        EventBus.$on('succesfullyAddedNewFractionRank', this.updateFractionRanks);
        EventBus.$on('succesfullyDeletedFractionRank', this.succesfullyDeletedFractionRank);
        EventBus.$on('succesfullyUpdatedFractionRank', this.succesfullyUpdatedFractionRank);
        this.$emit('update-menu-name', 'Stanowiska');
    },
    methods: {
        updateFractionRanks(updatedRanks) {
            this.ranks = updatedRanks;
        },
        showRemoveRankDialog(rank) {
            this.$modal.show('dialog', {
                title: rank.RankName,
                text: 'Czy na pewno chcesz usunąc tą rolę?',
                buttons: [
                    {
                        title: '<h6>Anuluj</h6>',
                        default: true,
                        handler: () => {
                            this.$modal.hide('dialog');
                        },
                    },
                    {
                        title: 'Usuń',
                        handler: () => {
                            this.removeRank(rank);
                            this.$modal.hide('dialog');
                        },
                    },
                ],
            });
        },
        showNewRankModal() {
            let newRank = {
                RankName: 'Nowe stanowisko',
                Priority: 10,
            };

            this.$modal.show('new-rank-modal', {
                newRank,
            });
        },
        addNewRank(rank) {
            if (rank) {
                alt.emit('tryToAddNewFractionRank', this.data.id, JSON.stringify(rank));
                this.$modal.hide('new-rank-modal');
            }
        },
        showEditRankModal(rank) {
            this.$modal.show('edit-rank-modal', {
                rank,
            });
        },
        saveRankChanges(rank) {
            if (rank) {
                alt.emit('tryToUpdateFractionRank', this.data.id, JSON.stringify(rank));
                this.$modal.hide('edit-rank-modal');
            }
        },
        canDeleteRank(rank) {
            return rank.RankType == 0 || rank.RankType == 2;
        },
        removeRank(rank) {
            if (rank) {
                alt.emit('tryToDeleteFractionRank', this.data.id, rank.Id);
            }
        },
        succesfullyDeletedFractionRank(rankId) {
            if (!this.ranks) return;
            this.ranks = this.ranks.filter(rank => rank.Id != rankId);
        },
        succesfullyUpdatedFractionRank(newRank) {
            if (!this.ranks) return;
            this.ranks = this.ranks.filter(rank => rank.Id != newRank.Id);
            this.ranks.push(newRank);
        },
        betterPermissionDisplay(hasPermission) {
            return hasPermission ? 'Tak' : 'Nie';
        },
    },
    computed: {
        getRanks() {
            return this.ranks.sort((a, b) => b.Priority - a.Priority);
        },
    },
    beforeDestroy() {
        EventBus.$off('succesfullyAddedNewFractionRank', this.updateFractionRanks);
        EventBus.$off('succesfullyDeletedFractionRank', this.succesfullyDeletedFractionRank);
        EventBus.$off('succesfullyUpdatedFractionRank', this.succesfullyUpdatedFractionRank);
    },
};

alt.on('succesfullyAddedNewFractionRank', updatedRanks => {
    EventBus.$emit('succesfullyAddedNewFractionRank', JSON.parse(updatedRanks));
});

alt.on('succesfullyDeletedFractionRank', rankId => {
    EventBus.$emit('succesfullyDeletedFractionRank', rankId);
});

alt.on('succesfullyUpdatedFractionRank', updatedRank => {
    EventBus.$emit('succesfullyUpdatedFractionRank', JSON.parse(updatedRank));
});
</script>

<style scoped>
.town-hall-ranks-page p {
    font-family: 'Roboto', sans-serif;
}

.town-hall-ranks-page .action-button {
    min-height: 3rem;
    min-width: 5rem;
}

.ranks-table {
    max-height: 30rem;
}

.ranks-table td,
.ranks-table th {
    vertical-align: middle;
}
</style>
