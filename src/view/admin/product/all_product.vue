<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h2 class="text-center">ALL PRODUCT</h2>
            </div>
            <div class="card-body w-100" style="margin: 0 auto;">
                <!-- {{ allCategory }} -->

                <b-button  class="btn btn-success float-right"  id="show-btn" @click.prevent="addProductModal">Add Product</b-button>

                <b-modal size="lg" ref="product-modal" id="bv-modal-example" hide-footer>
                    <template #modal-title>
                        {{ editModal == true ? "Edit Product" : "Add Product"  }}
                        
                    </template>
                    <div class="d-block ">
                        <form @submit.prevent="editModal == true ? updateProduct() : addProduct()" @keydown="form.onKeydown($event)">
                            <div class="form-group">
                                <label for="product_name">Product name</label>
                                <input v-model="form.product_name" type="text" class="form-control" id="product_name" name="product_name" >
                               <div v-if="form.errors.has('product_name')" v-html="form.errors.get('product_name')" />
                            </div>
                          

                           
                           
                            <div class="form-group">
                                <label for="category_id">Category name</label>

                               <select v-model="form.category_id" class="form-control" id="category_id" name="category_id">
                                   
                                    <option v-for="(value,key) in allCategory" :key="key" :value="value.id">
                                        {{ value.category_name }}
                                    </option>
                                   
                                </select>
                                <div v-if="form.errors.has('category_id')" v-html="form.errors.get('category_id')" />
                               
                            </div>
                           
                            <div class="form-group">
                                <label for="product_short_description">Product Short Description</label>
                                <textarea v-model="form.product_short_description" class="form-control" id="product_short_description" name="product_short_description"></textarea>
                                <div v-if="form.errors.has('product_short_description')" v-html="form.errors.get('product_short_description')" />
                            </div>
                            <div class="form-group">
                                <label for="product_long_description">Product long Des</label>
                                <textarea v-model="form.product_long_description" class="form-control" id="product_long_description" name="product_long_description"></textarea>
                               <div v-if="form.errors.has('product_long_description')" v-html="form.errors.get('product_long_description')" />
                            </div>

                             <div class="form-group">
                                <label for="product_image">Product Image</label>

                                <input type="file" @change="modalImageChange($event)" name="product_image" class="form-control-file" id="product_image">

                                <div class="row">
                                    <div class="col-md-12">
                                            <h2  v-if="form.product_image == '' " >Please Select Image</h2>
                                          <img v-if="form.product_image" :src="modalImageLoad()" alt="">
                                    </div>
                                    <div class="col-md-12">
                                        <button v-if="form.product_image != '' " @click.prevent="removeImage" class="btn btn-danger">Remove Image</button>
                                       
                                    </div>
                                </div>
                              
                               <div v-if="form.errors.has('product_image')" v-html="form.errors.get('product_image')" />
                            </div>
                            
                              <div class="form-group">
                                <label for="product_name">Product Price</label>
                                <input v-model="form.product_price" type="number" class="form-control" id="product_price" name="product_price" >
                               <div v-if="form.errors.has('product_price')" v-html="form.errors.get('product_price')" />
                            </div>

                            <div class="form-group">
                                <label for="publication_status">Product Status</label>
                                 <div class="form-check">
                                     <input v-model="form.publication_status" class="form-check-input" type="radio" name="publication_status" id="exampleRadios1" value="1" checked>
                                <label class="form-check-label" for="exampleRadios1">
                                    Publish
                                </label>
                                </div>
                                <div class="form-check">
                                <input v-model="form.publication_status" class="form-check-input" type="radio" name="publication_status" id="exampleRadios2" value="0">
                                <label class="form-check-label" for="exampleRadios2">
                                    Unpublish
                                </label>
                                </div>
                                 <div v-if="form.errors.has('product_price')" v-html="form.errors.get('product_price')" />
                            </div>
                           
                            
                         
                                <button v-if="editModal" type="submit" class="btn btn-primary">Update Product</button>
                                <button v-else type="submit" class="btn btn-primary">Add Product</button>
                            </form>
                    </div>
                  
                </b-modal>

                    
                
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
                        <!-- {{ allProducts }} -->
                        <tbody>
                            <tr v-for="(value,key) in allProducts" :key="key">
                                <td>{{key+1}}</td>
                                <td>{{value.product_name}}</td>
                                <td>{{value.category != null ? value.category.category_name : ''}}</td>
                                <td>{{value.product_short_description}}</td>
                                <td>{{value.product_price}}</td>
                                <td>
                                    <img :src="productImageTable(value.product_image)" alt="" style="width:80px;">
                                </td>
                                <td>{{value.created_at}}</td>
                                <td>
                                    <a href="" @click.prevent="editProduct(value)" class="btn btn-success">Edit</a>
                                    <a href="" @click.prevent="deleteProduct(value.id)" class="btn btn-danger">Delete</a>
                                </td>
                                </tr>
                        </tbody>
                        </table>
                </div>

                
            </div>
        </div>

     
     
                
                   
   
              
    </div>
</template>

<script>
// import axios from 'axios';

// // import Form from 'vform';

// // import iziToast from 'izitoast';


import Swal from 'sweetalert2'

// import $ from 'jquery'

import Form from 'vform'
import axios from 'axios'

export default {
    data(){
        return {
  
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
            editModal:true,
            imageBool:true,
        }
    },
    mounted(){
       this.allProductsMethods();
       this.allCategoryMethods();
    },
    created(){

    },
    computed:{
       allProducts(){
           return this.$store.getters.getAllProductGetters;
       },
       allCategory(){
           return this.$store.getters.getAllCategoryGetters;
       }
    },
    methods:{
       allProductsMethods(){
           this.$store.dispatch("getAllProductAction");
       },
       productImageTable(url){
           if(url.indexOf('https') != -1 ){
            //    console.log(1);
               return url;
           }
           else  {
                // console.log(2);
                return "http://localhost/1_zubayer_lara_ecom_api/public/images/products/"+url;
           }
       },
       addProductModal(){
            this.$refs['product-modal'].show();
            this.form.reset();
            this.editModal = false;
       },
       allCategoryMethods(){
           this.$store.dispatch('getAllCategoryAction');
       },
        async addProduct () {
             await this.form.post('http://localhost/1_zubayer_lara_ecom_api/public/api/product')
             .then((response)=>{
                 if(response.data.status == 'success'){
                    this.form.reset();
                    this.$refs['product-modal'].hide();
                    this.allProductsMethods();

                 }
                 console.log(response);
                
             });
       
        },
        modalImageChange(event){
              var file = event.target.files[0];
                var reader = new FileReader();
                reader.onload = (e) =>{
                    this.form.product_image = e.target.result;
                    // The file's text will be printed here
                    console.log(e.target.result)
                };

                reader.readAsDataURL(file);
        },
        modalImageLoad(){
            let url = this.form.product_image;
            // console.log(url);
            if(url.indexOf('data') != -1){
                return url;
            }else{
                 return "http://localhost/1_zubayer_lara_ecom_api/public/images/products/"+url;
            }
            // console.log(url);
        },
        deleteProduct(id){
            console.log(id);
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
                                this.allProductsMethods();
                        }

                        }).catch((error)=>{
                            console.log(error);
                        });

                        // Swal.fire(
                        // 'Deleted!',
                        // 'Your file has been deleted.',
                        // 'success'
                        // )
                    }
                })
        },
        editProduct(value){
            this.editModal = true;
                    this.form.fill(value);
                    this.$refs['product-modal'].show();
                    // updateProduct
        },
         async updateProduct () {
             await this.form.patch ('http://localhost/1_zubayer_lara_ecom_api/public/api/product/'+this.form.id)
             .then((response)=>{
                 if(response.data.status == 'success'){
                    this.form.reset();
                    this.$refs['product-modal'].hide();
                    this.allProductsMethods();
                     Swal.fire(
                        'Update!',
                        'Post fileUpdate successfully',
                        'success'
                        );

                 }
                 console.log(response);
                
             });
       
        },
        removeImage(){
            this.form.product_image = "";
        }
        
     
       
    }
}
</script>