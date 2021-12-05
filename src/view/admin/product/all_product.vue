<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h2 class="text-center">ALL PRODUCT</h2>
            </div>
            <div class="card-body w-100" style="margin: 0 auto;">
                <!-- {{ allCategories }} -->
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product name</th>
                            <th>Product category name</th>
                            <th>Product short description</th>
                            <th>Product price</th>
                            <th>Product image</th>
                            <th>Created at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       <tr v-for="(value,key) in allProducts" :key="key" >
                           <td>{{key+1}}</td>
                           <td>{{ value.product_name }}</td>
                           <td> {{  value.category.category_name }}</td>
                           <td>
                               {{ value.product_short_description }}
                           </td>
                           <td>
                               {{ value.product_price }}
                           </td>
                           <td>
                               <img :src="postImage(value.product_image)" alt="">
                               <!-- <img :src="value.product_image" alt=""> -->
                           </td>
                           <td>
                               {{ value.created_at }}
                           </td>
                           <td>
                               <a href="" class="btn btn-success">Edit</a>
                               <a href="" class="btn btn-danger">Edit</a>
                           </td>
                       </tr>
                    </tbody>
                    </table>
            </div>
        </div>
         
              
    </div>
</template>

<script>
// import axios from 'axios';

// // import Form from 'vform';

// // import iziToast from 'izitoast';

// // ES6 Modules or TypeScript
// import Swal from 'sweetalert2'

export default {
    data(){
        return {
            // products:[],
        }
    },
    mounted(){
        this.getAllProduct();
    },
    created(){

    },
    computed:{
        allProducts(){
            return this.$store.getters.getAllProductGetters;
        }
    },
    methods:{
        getAllProduct(){
            this.$store.dispatch('getAllProductAction');
            // alert('ahle');
        },
        postImage(url){
            if(url.indexOf('https') != -1){
                return url;
            }
        }
    }
}
</script>