<template>
<main>
    <div v-if="get_status_need_auth">
        <p>Нужна авторизация!!!</p>
        <ChatAddUser @authUser="onAuthUser($event)" />
    </div>
    <div v-if="get_user">
        <p>Ваш логин:<span v-text="get_user.name"></span></p>
    </div>

    <ChatAddMessage v-if="get_user" @addNewMessage="onAddNewMessage($event)" />
    <ChatListMessages v-if="get_user" :messages="get_messages" :clientId="get_user.id" />
</main>
</template>

<script>
import ChatAddUser from '@/components/Chat/ChatAddUser';
import ChatAddMessage from '@/components/Chat/ChatAddMessage';
import ChatListMessages from '@/components/Chat/ChatListMessages';
import {mapGetters, mapActions} from 'vuex';

export default {
  components: {
      ChatAddUser,
      ChatAddMessage,
      ChatListMessages,
  },
  mounted() {
    this.getUser();
    this.fetchMessages();
    window.addEventListener('storage', this.onUpdateLocalStorage);
  },
  beforeDestroy() {
      window.removeEventListener('storage', this.onUpdateLocalStorage);
  },

computed: {
    ...mapGetters('data', {get_status_need_auth: 'get_status_need_auth'}),
    ...mapGetters('data', {get_user: 'get_user'}),
    ...mapGetters('data', {get_messages: 'get_messages'}),
},
methods: {
    ...mapActions('data', {getUser: 'getUser'}),
    ...mapActions('data', {fetchMessages: 'fetchMessages'}),
    ...mapActions('data', {addNewMessage: 'addNewMessage'}),
    ...mapActions('data', {addUser: 'addUser'}),
    onAddNewMessage(event) {
        this.addNewMessage({data: new Date(), message: event, user: this.get_user});
    },
    onAuthUser(name) {
        this.addUser(name);
    },
    onUpdateLocalStorage() {
        this.fetchMessages();
    }
},
}
</script>