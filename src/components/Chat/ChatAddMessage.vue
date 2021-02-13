<template>
<div>
    <form @submit.prevent="sendMessage">
        <label for="message">Поле для сообщения</label>
        <input type="text" name="message" v-model="message">
        <button>Отправить сообщение</button>
    </form>
</div>
    
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
        }
    }
}
</script>