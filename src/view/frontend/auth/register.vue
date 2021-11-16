<template>
    <div id="loginform">
        <div class="container">
            <div class="row justify-content-center ">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <h3>REGISTER FORM</h3>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                {{ user.name }}
                                <label for="nameId">Name </label>
                                <input type="text" v-model="user.name" class="form-control" id="nameId" >
                            
                            </div>
                            <div class="form-group">
                                <label for="emailId">Email address</label>
                                <input type="email" v-model="user.email" class="form-control" id="emailId" aria-describedby="emailHelp" placeholder="Enter email">
                            
                            </div>
                            <div class="form-group">
                                <label for="passId">Password</label>
                                <input type="password" v-model="user.password" class="form-control" id="passId" placeholder="Password">
                            </div>
                        
                            <button type="submit" @click.prevent="userRegister" class="btn btn-primary">REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// var token = localStorage.getItem('AToken');
// console.log(token);
// // window.token = localStorage.getItem('AToken');
// axios.defaults.headers.common['Authorization'] = "Bearer "+token;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

export default {
    data(){
        return {
              user:{name:null,email:null,password:null}
        }
    },
    methods:{
       userRegister(){
           axios.post('/register', {
                name: this.user.name,
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