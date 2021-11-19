<template>
    <div id="navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link tag="a" :to="{ name: 'home'}" class="nav-link">Home </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>

          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>

          <ul class="navbar-nav ml-auto">
        
         <li class="nav-item" v-if="token">
            <router-link tag="a" :to="{name: 'logout'}" class="nav-link">Logout</router-link>
          </li>
          <li class="nav-item" v-for="(value,key) in manus" :key="key" v-else>
            <router-link tag="a" :to="{ name: value.route }" class="nav-link">{{ value.name }}</router-link>
          </li>
        

      
      </ul>

    </div>
    </nav>

    </div>
</template>

<script>
import axios from 'axios'

var token = localStorage.getItem('AToken');
// console.log("nav = "+token);

axios.defaults.headers.common['Authorization'] = "Bearer "+token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default {
  data(){
    return {
      token: token,
      manus:[
        {name:'Login',route:'login'},
        {name:'Register',route:'register'},
      ]
    }
  },
  mounted() {
  
  }
}
</script>