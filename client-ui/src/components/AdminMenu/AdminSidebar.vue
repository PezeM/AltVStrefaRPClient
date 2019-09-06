<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        <v-icon name="home" />Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <v-icon name="bug" />Debug
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <v-icon name="toolbox" />Admin
                    </a>
                </li>
            </ul>

            <h6
                class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
            >
                <span>
                    <v-icon name="users" />Gracze
                </span>
                <a class="d-flex align-items-center text-muted" href="#">
                    <span data-feather="plus-circle"></span>
                </a>
            </h6>
            <ul class="nav flex-column mb-2">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <v-icon name="list" />Lista graczy
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <v-icon name="user-edit" />Zarządzaj graczem
                    </a>
                </li>
            </ul>

            <h6
                class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
            >
                <span>
                    <v-icon name="home" />Mieszkania
                </span>
                <a class="d-flex align-items-center text-muted" href="#">
                    <span data-feather="plus-circle"></span>
                </a>
            </h6>
            <ul class="nav flex-column mb-2">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <v-icon name="list" />Lista mieszkań
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <v-icon name="plus-square" />Dodaj mieszkanie
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <v-icon name="edit" />Zmień mieszkanie
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import 'vue-awesome/icons/home';
import 'vue-awesome/icons/list';
import 'vue-awesome/icons/plus-square';
import 'vue-awesome/icons/edit';
import 'vue-awesome/icons/users';
import 'vue-awesome/icons/user-edit';
import 'vue-awesome/icons/bug';
import 'vue-awesome/icons/toolbox';
import Icon from 'vue-awesome/components/Icon';

export default {
    components: {
        'v-icon': Icon,
    },
};
</script>

<style scoped>
.fa-icon {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
}

.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

.sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto;
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
    .sidebar-sticky {
        position: -webkit-sticky;
        position: sticky;
    }
}

.sidebar .nav-link {
    font-weight: 500;
    color: #333;
}

.sidebar .fa-icon {
    margin-right: 4px;
    color: #999;
}

.sidebar .nav-link.active {
    color: #007bff;
}

.sidebar .nav-link:hover .fa-icon,
.sidebar .nav-link.active .fa-icon {
    color: inherit;
}

.sidebar-heading {
    font-size: 0.75rem;
    text-transform: uppercase;
}
</style>