<template>
  <UserDashboard />
  <AddUser />
</template>

<script>
import UserDashboard from './components/UserDashboard.vue'
import AddUser from './components/AddUser.vue'
export default {
  name: 'App',
  components: {
    UserDashboard,
    AddUser
  }
}
</script>

<style>

</style>
