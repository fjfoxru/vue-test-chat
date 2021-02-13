<template>
    <section class="user-list">
        <h3 class="title title_second user-list__title">Список пользователей, оставивших последние 10 сообщений:</h3>
        <div class="user-list__user" v-for="(user, index) in get_users" :key="index" v-text="user"></div>
    </section>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters('data', {get_users: 'get_users'}),
    }
}
</script>