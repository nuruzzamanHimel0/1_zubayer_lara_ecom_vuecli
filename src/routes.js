
import compFrontendmaster from './view/frontend/frontend_master.vue'
import compHome from './view/frontend/home.vue'

import compLogin from './view/frontend/auth/login.vue'
import compRegister from './view/frontend/auth/register.vue'
// import compLogout from './view/frontend/auth/logout.vue'

import compAuthmaster from './view/frontend/auth/auth-master.vue'

import compAdminmaster from './view/admin/adminmaster.vue';
import compAdminhome from './view/admin/admin_hove.vue';
import compAdminaddcategory from './view/admin/category/add_category.vue';
import compAdminallcategory from './view/admin/category/all_category.vue';
import compAdmineditcategory from './view/admin/category/edit_category.vue';
//product
import compAdminallproduct from './view/admin/product/all_product.vue';

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
      //  {
      //   path: 'logout',
      //   component: compLogout,
      //   name: 'logout'
      //  },


      ]
    },
    {
      path: '/admin',
      component: compAuthmaster,
      name: "authmaster",
      redirect:{path:'/admin/login'},
      children:[
        {
        path: 'login',
        component: compLogin,
        name: 'login',
       },
       {
          path: 'register',
          component: compRegister,
          name: 'register'
        },

      ]
    },
    {
      path: '/dashboard',
      component: compAdminmaster,
      name: 'adminMaster',
      redirect:{path:"dashboard/homepage"},
      children:[
        {
          path: 'homepage',
          component: compAdminhome,
          name: 'homepage',
        },
        {
          path: 'addcategory',
          component: compAdminaddcategory,
          name: 'addcategory'
        },
        {
          path: 'allcategory',
          component: compAdminallcategory,
          name: 'allcategory'
        },
        {
          path: 'editCategory/:cat_id',
          component: compAdmineditcategory,
          name: 'editCategory'
        },
        //product
        {
          path: 'allproduct',
          component: compAdminallproduct,
          name: 'allproduct'
        },



      ]
    },
 
  ]