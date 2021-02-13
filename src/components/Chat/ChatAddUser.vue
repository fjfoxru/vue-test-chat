<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="login">
        <button>Добавить пользователя</button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            login: '',
        }
    },
    methods: {
        onSubmit() {
            this.$emit('authUser', this.login);
        }
    }
}
</script>