
import compFrontendmaster from './view/frontend/frontend_master.vue'
import compHome from './view/frontend/home.vue'
import compLogin from './view/frontend/auth/login.vue'
import compRegister from './view/frontend/auth/register.vue'

export const routes = [
    { 
      path: '/',
      component: compFrontendmaster,
      name: "frontendmaster",
      redirect:{path:'/home'},
      children:[
       {
        path: 'home',
        component: compHome,
        name: 'home',
       },
       {
        path: 'login',
        component: compLogin,
        name: 'login',
       },
       {
        path: 'register',
        component: compRegister,
        name: 'register',
       },

       
      ]
    },
 
  ]