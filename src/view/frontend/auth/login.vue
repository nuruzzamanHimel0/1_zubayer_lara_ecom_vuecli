<template>
    <div id="loginform">
        <div class="container">
            <div class="row justify-content-center ">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <h3>LOGIN FORM</h3>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" v-model="user.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" v-model="user.password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                        
                            <button type="submit" @click.prevent="usrLogin" class="btn btn-primary">LOGIN</button>

                            <router-link tag="a" class="btn btn-success ml-3" :to="{ name: 'register'}"> Register </router-link>
                              <!-- <router-link tag="a" :to="{name: 'logout'}" class="nav-link">Logout</router-link> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
var token = localStorage.getItem('AToken');
console.log("login="+token);
// window.token = localStorage.getItem('AToken');
axios.defaults.headers.common['Authorization'] = "Bearer "+token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default {
    data(){
        return {
              user:{email:null,password:null}
        }
    },
    computed:{

    },
    methods:{
       usrLogin(){
           axios.post('/login', {
                email: this.user.email,
                password: this.user.password,
            })
            .then(function (response) {
                localStorage.setItem('AToken',response.data.access_token);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
       }
    }
}
</script>