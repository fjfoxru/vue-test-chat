<template>
    <div :class="clientMessage ? 'message_client' : 'message_other'" class="message">
        <span v-text="messageDate" class="message__date"></span>
        <span v-text="clientMessage? 'Ваше сообщение: ' : message.user.name"></span>
        <p v-text="message.message"></p>
    </div>
</template>
<script>
import moment from 'moment';
moment.locale('ru'); 
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
       },
       messageDate() {
           return moment(this.message.date).format('LLL');
       }
    },
}
</script>