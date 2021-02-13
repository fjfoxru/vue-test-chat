<template>
    <form @submit.prevent="onSubmit" class="add-user">
        <input class="input add-user__input" type="text" v-model="login">
        <button class="button button_style_1">Добавить себя</button>
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