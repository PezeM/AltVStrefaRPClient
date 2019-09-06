<template>
    <div id="admin-menu">
        <admin-navbar />

        <div class="container-fluid">
            <div class="row">
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
.feather {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
}

#admin-menu-content {
    padding-top: 133px;
}

@media (min-width: 768px) {
    #admin-menu-content {
        padding-top: 48px;
    }
}
</style>