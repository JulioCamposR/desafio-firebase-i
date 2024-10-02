<template>
  <div>
    <h2>Lista de Usuarios</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.nombre }} - {{ user.email }}
        <button @click="removeUser(user.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['users'])  
  },
  created() {
    this.fetchUsers();  
  },
  methods: {
    ...mapActions(['fetchUsers', 'deleteUser']),
    removeUser(userId) {
      this.deleteUser(userId);  
    }
  }
};
</script>
