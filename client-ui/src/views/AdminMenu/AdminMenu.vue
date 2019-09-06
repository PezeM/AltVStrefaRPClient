<template>
    <div id="admin-menu">
        <admin-navbar />

        <div class="container-fluid h-100">
            <div class="row h-100">
                <admin-sidebar />

                <div id="admin-menu-content" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminNavbar from '@/components/AdminMenu/AdminNavbar.vue';
import AdminSidebar from '@/components/AdminMenu/AdminSidebar.vue';

export default {
    name: 'adminMenu',
    components: {
        AdminNavbar,
        AdminSidebar,
    },
};
</script>

<style scoped>
#admin-menu-content {
    padding-top: 133px;
    background-color: #f3f3f3;
}

@media (min-width: 768px) {
    #admin-menu-content {
        padding-top: 48px;
    }
}
</style>

<style>
#admin-menu p {
    font-family: 'Roboto' !important;
}
</style>