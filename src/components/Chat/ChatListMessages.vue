<template>
<div class="messages-list">
    <ChatMessage v-for="(message, index) in messages" :key="index" :message="message" :clientId="clientId" />
</div>   
</template>
<script>
import ChatMessage from '@/components/Chat/ChatMessage';
export default {
    components: {
        ChatMessage
    },
    props: {
        messages: {
            type: Array,
        },
        clientId: {
            type: String,
        }
    }
}
</script>