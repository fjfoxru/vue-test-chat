<template>
<main>
     <router-link :to="{name: 'Main'}" class="button">На главную</router-link>
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