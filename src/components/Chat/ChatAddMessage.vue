<template>
    <form @submit.prevent="sendMessage" class="add-message">
        <label for="message" class="add-message__label">
            <span>Введите сообщение:</span>
            <textarea type="text" name="message" v-model="message" class="input add-message__input"></textarea>
        </label>
        <button class="button button_style_1">Отправить сообщение</button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            message: '',
        }
    },
    methods: {
        sendMessage() {
            this.$emit('addNewMessage', this.message);
            this.message = '';
        }
    }
}
</script>