<template>
  <div>
    <h2>Agregar Usuario</h2>
    <form @submit.prevent="submitUser">
      <input v-model="nombre" type="text" placeholder="Nombre" required />
      <input v-model="email" type="email" placeholder="Correo Electrónico" required />
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      nombre: '',
      email: ''
    };
  },
  methods: {
    ...mapActions(['addUser']),  
    async submitUser() {
      const user = { nombre: this.nombre, email: this.email };
      await this.addUser(user);  
      this.nombre = ''; 
      this.email = ''; 
    }
  }
};
</script>
