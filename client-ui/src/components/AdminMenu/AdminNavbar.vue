<template>
    <div class="admin-menu-navbar">
        <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <span class="navbar-brand col-sm-3 col-md-2 mr-0">Admin dashboard</span>
            <input
                class="form-control form-control-dark"
                type="text"
                placeholder="Szukaj"
                aria-label="Search"
            />
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                    <button
                        class="btn btn-primary my-2 my-sm-0"
                        type="button"
                        @click="closeMenu"
                    >Wyjdź</button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'adminMenuNavbar',
    methods: {
        closeMenu() {
            alt.emit('closeAdminMenu');
        },
    },
};
</script>
<style scoped>
.navbar-brand {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar a {
    color: #f3f3f3;
}

.navbar .form-control {
    padding: 0.75rem 1rem;
    margin: 0rem 0.5rem;
}
</style>