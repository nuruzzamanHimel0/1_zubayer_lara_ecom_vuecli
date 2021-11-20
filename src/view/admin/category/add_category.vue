<template>
    <div>
        <div class="card">
            <div class="card-body w-75" style="margin: 0 auto;">
                 <form @submit.prevent="add_category" @keydown="form.onKeydown($event)">
                <div class="form-group row">
                    <label for="category_name" class="col-sm-2 col-form-label">Category name: </label>
                    <div class="col-sm-10">
                    <input type="text" v-model="form.category_name"  class="form-control-plaintext" name="category_name" id="category_name" value="email@example.com">
                     <div v-if="form.errors.has('category_name')" v-html="form.errors.get('category_name')" />
                    </div>

                 
                </div>
                    <div class="form-group row">
                    <label for="category_description" class="col-sm-2 col-form-label">Category Description</label>
                    <div class="col-sm-10">
                    <textarea class="form-control" v-model="form.category_description" name="category_description" id="category_description" rows="3"></textarea>
                      <div v-if="form.errors.has('category_description')" v-html="form.errors.get('category_description')" />
                    </div>

                    
                </div>
                    <div class="form-group row">
                    <label for="category_des" class="col-sm-2 col-form-label">Radio</label>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" v-model="form.publication_status"  name="publication_status" id="radio1" value="1" checked>
                            <label class="form-check-label"  for="radio1">
                                Published
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" v-model="form.publication_status"  name="publication_status" id="unpublishedid" value="0">
                            <label class="form-check-label" for="unpublishedid">
                                Unpublished
                            </label>
                            </div>
                            <div v-if="form.errors.has('publication_status')" v-html="form.errors.get('publication_status')" />
                         
                    </div>
                </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                
               </form>
            </div>
        </div>
         
              
    </div>
</template>

<script>
// import axios from 'axios';
import Form from 'vform';

import iziToast from 'izitoast';

export default {
    data(){
        return {
            form: new Form({
                category_name: null,
                category_description: null,
                publication_status: null,
            })
           
        }
    },
    methods:{
         async add_category () {
            await this.form.post('http://localhost/1_zubayer_lara_ecom_api/public/api/category')
            .then((response) =>{
                iziToast.show({
                    title: 'Hey',
                    message: 'What would you like to add?'
                });
                console.log(response);
            }).catch((error) =>{
                console.log(error);
            });
        
        }
       
        // add_category(){
           

        //  this.form.post('http://localhost/1_zubayer_lara_ecom_api/public/api/category', {
        //         category_name: this.categories.category_name,
        //             category_description: this.categories.category_description,
        //             publication_status: this.categories.publication_status,
        //     })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

       
           
        // }
    }
}
</script>