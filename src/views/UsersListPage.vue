<template>
  <div class="users-list-page">
    <UserCard
        class="user-card"
        v-for="(u, i) in users"
        :login="u.login"
        :key="u.id"
        :img="u.avatar_url"
        :id="i"
    />
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import UserCard from '../components/UserCard'

  export default {
    name: 'UsersListPage',
    components: {UserCard},
    methods: mapActions(['fetchUsers']),
    computed: mapGetters(['users']),
    mounted() {
      console.log('mounted')
      if (this.users.length === 0) this.fetchUsers()
    }
  }
</script>

<style scoped>
  .users-list-page {
    padding: 16px 16px 8px 16px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .user-card {
    margin-bottom: 8px;
  }
</style>
