<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h2 class="text-center">ALL PRODUCT</h2>
            </div>
            <div class="card-body w-100" style="margin: 0 auto;">
                <!-- {{ allCategories }} -->

                <b-button  class="btn btn-success float-right"  id="show-btn" @click="addProductModal">Add Product</b-button>

                    
                
                <div class="table-responsive">
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
                            <td> {{ value.category != null ?  value.category.category_name : '' }}</td>
                            <td>
                                {{ value.product_short_description }}
                            </td>
                            <td>
                                {{ value.product_price }}
                            </td>
                            <td>
                                <img :src="postImage(value.product_image)" alt="" style="width:80px;">
                                <!-- <img :src="value.product_image" alt=""> -->
                            </td>
                            <td>
                                {{ value.created_at }}
                            </td>
                            <td>
                                <a href="" @click.prevent="editProductModal(value)"  class="btn btn-success">Edit</a>
                                <a href="" @click.prevent="product_delete(value.id)"  class="btn btn-danger">Delete</a>
                            </td>
                        </tr>
                        </tbody>
                        </table>
                </div>

                
            </div>
        </div>

     
        <b-modal size="lg"  ref="addProductModal-modal" hide-footer id="product_modal" >
              <template #modal-title>
                 {{ editMode ? "Product Update" : 'Product Add'  }} 
            </template>
            <div class="d-block ">
                <form @submit.prevent=" editMode == true ? product_update() : product_add()" @keydown="form.onKeydown($event)" enctype='multipart/form-data' >
                
                    <div class="form-group">
                        <label for="product_name">Product name</label>
                        
                        <input v-model="form.product_name" type="text" class="form-control" id="product_name" name="product_name" placeholder="Enter product name">
                    <div class="text-danger"  v-if="form.errors.has('product_name')" v-html="form.errors.get('product_name')" />
                    </div>

                    
                    <!-- {{ allCategories }} -->
                    <div class="form-group">
                        <label for="category_id">Product Category</label>
                    <select class="form-control" id="category_id" name="category_id" v-model="form.category_id">
                        
                            <option v-for="(value,key) in allCategories" :key="key" :value="value.id">
                                
                                {{ value.category_name }}
                            </option>
                            
                        
                        </select>
                        <div class="text-danger" v-if="form.errors.has('category_id')" v-html="form.errors.get('category_id')" />
                    </div>
                    <div class="form-group">
                        <label for="product_short_description">Product short description</label>
                        <textarea v-model="form.product_short_description" name="product_short_description" id="product_short_description" cols="30" rows="2" class="form-control" placeholder="Product short description"></textarea>
                        <div class="text-danger" v-if="form.errors.has('product_short_description')" v-html="form.errors.get('product_short_description')" />
                    
                    </div>
                    <div class="form-group">
                        <label for="product_long_description">Product long description</label>
                        <textarea  v-model="form.product_long_description" name="product_long_description" id="product_long_description"  cols="30" rows="4" class="form-control" placeholder="Product long description"></textarea>
                        <div class="text-danger" v-if="form.errors.has('product_long_description')" v-html="form.errors.get('product_long_description')" />
                    
                    </div>
                    <div class="form-group">
                        <label for="product_price">Product Price</label>
                        <input v-model="form.product_price" type="number" name="product_price" id="product_price"   placeholder="Product Price" class="form-control">
                        <div class="text-danger" v-if="form.errors.has('product_price')" v-html="form.errors.get('product_price')" />
                    
                    </div>

                    <div class="form-group">
                    
                        <div class="form-group">
                                <label for="product_image">Product Image </label>
                                <input type="file" @change="changePhoto($event)" class="form-control-file" id="product_image" name="product_image" value="">
                                <img v-if="form.product_image " :src="postModalPhoto()" alt="" class="img-fluid">
                                <div class="text-danger" v-if="form.errors.has('publication_status')" v-html="form.errors.get('publication_status')" />
                            </div>
                    
                    
                    </div>
                    <div class="form-group">
                        <label for="publication_status">Publication Status</label>
                        <div class="custom-control custom-radio">
                            <input v-model="form.publication_status" type="radio" id="customRadio1" name="publication_status" class="custom-control-input" value="1">
                            <label class="custom-control-label" for="customRadio1">Published</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input v-model="form.publication_status" type="radio" id="customRadio2" name="publication_status" class="custom-control-input" value="0">
                            <label class="custom-control-label" for="customRadio2">Unpublished</label>
                        </div>
                        <div class="text-danger" v-if="form.errors.has('publication_status')" v-html="form.errors.get('publication_status')" />
                    </div>
                
                
                    <button type="submit" v-if="editMode" class="btn btn-primary">Update Product</button>
                    <button type="submit" v-else class="btn btn-primary">Add Product</button>
                </form>
            </div>
       
         </b-modal>
                
                   
   
              
    </div>
</template>

<script>
import axios from 'axios';

// // import Form from 'vform';

// // import iziToast from 'izitoast';


import Swal from 'sweetalert2'

// import $ from 'jquery'

import Form from 'vform'

export default {
    data(){
        return {
            // products:[],
            editMode:false,
            form: new Form({
                id: '',
                product_name: '',
                category_id: '',
                product_short_description: '',
                product_long_description: '',
                product_price: '',
                publication_status: '',
                product_image: '',
            }),
        }
    },
    mounted(){
        this.getAllProduct();
        this.getAllCategory();
    },
    created(){

    },
    computed:{
        allProducts(){
            return this.$store.getters.getAllProductGetters;
        },
        allCategories(){
           return this.$store.getters.getAllCategoryGetters;
       }
    },
    methods:{
       
        getAllCategory(){
           this.$store.dispatch('getAllCategoryAction');
       },
        getAllProduct(){
            this.$store.dispatch('getAllProductAction');
            // alert('ahle');
        },
        postImage(url){
            if(url.indexOf('https') != -1){
                return url;
            }else{
                return "http://localhost/1_zubayer_lara_ecom_api/public/images/products/"+url;
            }
        },
         addProductModal(){
            this.editMode = false;
            this.form.reset();
            // $("#product_modal").attr('title');
            // alert($("#product_modal").attr('title'));
            this.$refs['addProductModal-modal'].show();
        }, 
         async product_add () {
           await this.form.post('http://localhost/1_zubayer_lara_ecom_api/public/api/product')
           .then((response)=>{
               if(response.data.status == 'success'){
                     this.$refs['addProductModal-modal'].hide();
                     //v-form reset
                     this.form.reset();
                     // table data load
                     this.getAllProduct();
               }
           });
           
            // alert('hlw');
        },
         async product_update () {
           await this.form.put('http://localhost/1_zubayer_lara_ecom_api/public/api/product/'+this.form.id)
           .then((response)=>{
               if(response.data.status == 'success'){
                     this.$refs['addProductModal-modal'].hide();
                     //v-form reset
                     this.form.reset();
                     // table data load
                     this.getAllProduct();
               }
           });
           
            // alert('update');
        },
        changePhoto(event){
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.onload = (e)=> {
                // The file's text will be printed here
                this.form.product_image = e.target.result;
                // console.log(e.target.result);
                console.log(this.form.product_image);
            };

            reader.readAsDataURL(file);
        },
        postModalPhoto(){
              let str1 = this.form.product_image;
            if(str1.indexOf('data') != -1){
                return this.form.product_image;
                // console.log(str2 + " found");
            }
            if(str1.indexOf('https') != -1){
                return this.form.product_image;
                // console.log(str2 + " found");
            }else{
                  return "http://localhost/1_zubayer_lara_ecom_api/public/images/products/"+str1;
            }
        },
        product_delete(id){
             Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                 axios.delete(`/product/${id}`)
                    .then((response)=>{
                        if(response.data.status == 'success'){
                            
                                Swal.fire(
                                'Deleted!',
                                'Post file has been deleted.',
                                'success'
                                );
                                this.getAllProduct();
                        }
                    }).catch((error)=>{
                        console.log(error)
                    });

                //  alert(id);
                
            }
            });
           
        },
        editProductModal(value){
             this.editMode = true;
             this.$refs['addProductModal-modal'].show();
             this.form.fill(value);
            // alert(id);
        }
       
    }
}
</script>