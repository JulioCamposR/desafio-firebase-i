import { createRouter, createWebHistory } from 'vue-router';
import AddUser from '../components/AddUser.vue';  
import UserList from '../components/UserList.vue'; 

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList  
  },
  {
    path: '/add',
    name: 'AddUser',
    component: AddUser   
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
