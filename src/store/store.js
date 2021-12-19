  //vuex install
  import Vue from 'vue';
  import Vuex from 'vuex';
  import axios from 'axios';

  Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        auth:[],
        allcategory:[],
        categoryByid:'',
        allpost:[],
        productById:[]
       
    },
    getters:{
        // getAllCategorGetters(state){
        //     return state.categories;
        // },
        getAuthVisaAccesstoken(state){
            return state.auth;
        },
        getAllCategoryGetters(state){
            return state.allcategory;
        },
        getCategoryByCatidGetters(state){
            return state.categoryByid;
        },
        getAllProductGetters(state){
            return state.allpost;
        },
        getProductbyIdGetters(state){
            return state.productById;
        }
        
       
    },
    mutations: {
        // getAllCategoryMutation(state,data){
        //    return state.categories = data;
        // },
        passignThenAccessTokenMutation(state,data){
            state.auth = data;
            // console.log(data);
        },
        getAllCategoryMutation(state,data){
            state.allcategory = data;
            // console.log(data);
        },
        getCategoryByCatidMutation(state,data){
            state.categoryByid = data;
        },
        getAllProductMutation(state,data){
            state.allpost = data;
            // console.log(data);
        },
        getProductbyIdMutations(state,data){
            state.productById = data;
        }
      
    },
    actions: {
     
        passignThenAccessTokenAction(context,access_token){

         

            axios.post('/auth-user', {
                accessToken: access_token,
            })
            .then(function (response) {
                if(response.data.status == "success"){

                    context.commit('passignThenAccessTokenMutation',response.data.data);
                    // console.log(response.data.data);
                }
                // console.log(response.data.data.name);
            })
            .catch(function (error) {
                console.log(error);
            });

            // console.log(access_token);
        },
        getAllCategoryAction(context){
            axios.get("/category")
            .then((response)=>{
                if(response.data.status == 'success'){
                    context.commit('getAllCategoryMutation',response.data.data);
                }
                
                // console.log(response.data);
            }).catch((error) =>{
                console.log(error);
            });
        },
        getAllProductAction(context){
            axios.get("/product")
            .then((response)=>{
                if(response.data.status == 'success'){
                    context.commit('getAllProductMutation',response.data.data);
                }
                
                // console.log(response.data);
            }).catch((error) =>{
                console.log(error);
            });
        },
        getProductbyIdActions(context,id){
            // alert(id);
            axios.get(`/product/${id}`)
            .then((response)=>{
                if(response.data.status == 'success'){
                    context.commit('getProductbyIdMutations',response.data.data);
                }
                
                console.log(response.data);
            }).catch((error) =>{
                console.log(error);
            });
        }
        // getCategoryByCatidAction(context,cat_id){
        //     axios.get(`/category/${cat_id}`)
        //     .then((response)=>{
        //         if(response.data.status == 'success'){
        //             context.commit('getCategoryByCatidMutation',response.data.data);
        //         }
                
        //         console.log(response.data);
        //     }).catch((error) =>{
        //         console.log(error);
        //     });
        //     // alert(cat_id);
        // }
       
    }
  })
