<template>
<main class="chat-area">
     <router-link :to="{name: 'Main'}" class="button button_style_2">На главную</router-link>
     <HandlerChat />
</main>
</template>

<script>
import HandlerChat from '@/handlers/HandlerChat';
export default {
  components: {
       HandlerChat
  },
}
</script>