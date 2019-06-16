<template>
  <div class="town-hall-navbar">
    <div class="row justify-content-between">
      <div class="col-6">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <v-icon name="search"/>
            </span>
          </div>
          <vue-bootstrap-typeahead
            v-model="query"
            :data="searchQueries"
            @keydown.enter="search"
            @hit="selectedQuery = $event"
            :serializer="item => item.displayName"
            placeholder="Wyszukaj..."
            :maxMatches="maxMatches"
            :minMatchingChars="minMatchingChars"
          >
            <template slot="append">
              <button @click="search" class="btn btn-primary">Szukaj</button>
            </template>

            <template slot="suggestion" slot-scope="{ data, htmlText }">
              <span v-html="htmlText"></span>&nbsp;
              <small>{{ data.description }}</small>
            </template>
          </vue-bootstrap-typeahead>
        </div>
      </div>
      <div class="col-1">
        <button type="button" class="btn btn-danger close-button" @click="closeMenu">
          <v-icon name="times"/>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import 'vue-awesome/icons/search';
import 'vue-awesome/icons/times';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';
import Icon from 'vue-awesome/components/Icon';

export default {
    name: 'townHallNavbar',
    components: {
        VueBootstrapTypeahead,
        'v-icon': Icon,
    },
    props: {
        searchQueries: Array,
    },
    data() {
        return {
            maxMatches: 3,
            minMatchingChars: 1,
            query: '',
            selectedQuery: null,
        };
    },
    methods: {
        search() {
            let action = null;
            if (this.query.length > 0) {
                let searchResult = this.searchQueries.find(q => q.displayName.toLowerCase() == this.query.toLowerCase());
                if (searchResult != null) {
                    action = searchResult.action;
                }
            } else if (this.selectedQuery != null) {
                action = this.selectedQuery.action;
            }
            if (action != null) {
                this.$emit('search-result', action);
                this.query = null;
                this.selectedQuery = null;
            }
        },
        closeMenu() {
            this.$emit('close-menu');
        },
    },
};
</script>

<style>
.town-hall-navbar {
    height: 100%;
    width: 100%;
    background-color: rgba(209, 209, 209, 0.125);
    box-shadow: 0px 6px 3px -1px rgba(100, 100, 100, 0.125);
}

.close-button {
    border-radius: 0;
    border-top-right-radius: 6px;
}
</style>
