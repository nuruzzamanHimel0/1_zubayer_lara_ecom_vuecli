<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h2 class="text-center">ALL CATEGORY</h2>
            </div>
            <div class="card-body w-100" style="margin: 0 auto;">
                <!-- {{ allCategories }} -->
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Sn</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Category Description</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, key) in allCategories"  :key="key" >
                            <td>{{key+1}}</td>
                            <td>{{value.category_name}}</td>
                            <td>{{value.category_description}}</td>
                            <td>{{value.created_at}}</td>
                            <td>
                                <router-link tag="a" :to="{name: 'editCategory', params:{cat_id:value.id} }" class="btn btn-success">Edit</router-link>
                                <a href="" class="btn btn-danger">Delete</a>
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
// import Form from 'vform';

// import iziToast from 'izitoast';

export default {
   data(){
       return {

       }
   },
   mounted(){
       this.getAllCategory();
   },
   created(){

   },
   computed:{
       allCategories(){
           return this.$store.getters.getAllCategoryGetters;
       }
   },
   methods:{
       getAllCategory(){
           this.$store.dispatch('getAllCategoryAction');
       }
   }
}
</script>