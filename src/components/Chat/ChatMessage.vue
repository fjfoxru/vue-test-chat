<template>
    <div :class="clientMessage ? 'message_client' : 'message_other'">
        <span v-text="message.data"></span>
        <span v-text="clientMessage? 'Ваше сообщение: ' : message.user.name"></span>
        <p v-text="message.message"></p>
    </div>
</template>
<script>
export default {
    props: {
        message: {
            type: Object,
        },
        clientId: {
            type: String,
        }
    },
    computed: {
       clientMessage() {
           return this.clientId === this.message.user.id;
       } 
    },
}
</script>