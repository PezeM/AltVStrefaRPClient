<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button type="button" class="btn btn-primary">{{ msg }}</button>
    </div>
</template>

<script>
export default {
    name: 'about',
    data() {
        return {
            msg: 'Kliknij tutaj'
        };
    }
};
</script>
