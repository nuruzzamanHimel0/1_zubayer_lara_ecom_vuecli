<template>
    <div>
          <form @submit.prevent="add_category">
                <div class="form-group row">
                    <label for="category_name" class="col-sm-2 col-form-label">Category name: </label>
                    <div class="col-sm-10">
                    <input type="text" v-model="categories.category_name"  class="form-control-plaintext" name="category_name" id="category_name" value="email@example.com">
                    </div>
                </div>
                    <div class="form-group row">
                    <label for="category_description" class="col-sm-2 col-form-label">Category Description</label>
                    <div class="col-sm-10">
                    <textarea class="form-control" v-model="categories.category_description" name="category_description" id="category_description" rows="3"></textarea>
                    </div>
                </div>
                    <div class="form-group row">
                    <label for="category_des" class="col-sm-2 col-form-label">Radio</label>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" v-model="categories.publication_status"  name="publication_status" id="radio1" value="1" checked>
                            <label class="form-check-label"  for="radio1">
                                Published
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" v-model="categories.publication_status"  name="publication_status" id="unpublishedid" value="0">
                            <label class="form-check-label" for="unpublishedid">
                                Unpublished
                            </label>
                            </div>
                    </div>
                </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                
            </form>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data(){
        return {
            categories:{
                category_name: null,
                category_description: null,
                publication_status: null,
            }
        }
    },
    methods:{
        add_category(){
          axios.post('/category', {
                category_name: this.categories.category_name,
                    category_description: this.categories.category_description,
                    publication_status: this.categories.publication_status,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

       
           
        }
    }
}
</script>