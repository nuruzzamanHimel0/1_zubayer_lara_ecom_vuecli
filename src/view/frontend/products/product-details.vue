<template>
    <div>
    
        <div class="page-tile-area py-3">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Library</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        {{ product_computed }}
   
         <div class="product-details-area">
            <div class="container">
                <div class="row"  v-for="(valeu,key) in product_computed" :key="key">
                    <div class="col-md-5">
                        <div class="img-tab-area">
                            <div class="tab-content tab-img">
                                <div class="tab-pane fade show active" id="img1" role="tabpane">
                                    <img class="img-fluid" :src="productImage(valeu.product_image)" alt="">
                                </div>
                                <div class="tab-pane fade" id="img2" role="tabpanel">
                                    <img class="img-fluid" src="../../../assets/frontend/img/pro-det-tab-img/2.jpg" alt="">
                                </div>
                                <div class="tab-pane fade" id="img3" role="tabpanel">
                                    <img class="img-fluid" src="../../../assets/frontend/img/pro-det-tab-img/3.jpg" alt="">
                                </div>
                            </div>
                            <ul class="nav" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#img1" role="tab">
                                        <img class="img-fluid" src="../../../assets/frontend/img/pro-det-tab-img/1.jpg" alt="">
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#img2" role="tab">
                                        <img class="img-fluid" src="../../../assets/frontend/img/pro-det-tab-img/2.jpg" alt="">
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#img3" role="tab">
                                        <img class="img-fluid" src="../../../assets/frontend/img/pro-det-tab-img/3.jpg" alt="">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <!-- product-details -->
                        <div class="product-details">
                            <h2> {{ valeu.product_name }}</h2>
                            <div class="rating-pro">
                                <i class="fas far fa-star"></i>
                                <i class="fas far fa-star"></i>
                                <i class="fas far fa-star"></i>
                                <i class="fas far fa-star"></i>
                                <i class="fas far fa-star"></i>
                                <span>3 Reating(s) | Add Your Reating(s)</span>
                            </div>
                            <p> {{ valeu.product_short_description }} </p>
                            <div class="price-pro">
                                <span>{{ valeu.product_price }} TK </span>
                            </div>
                            <hr>
                        </div>
                        <!-- product-details End -->
                        <!-- options-area start -->
                        <div class="options-area">
                            <div class="title">
                                <h3>Options</h3>
                            </div>

                            <form action="#">
                                <label for="">Size <span>*</span></label>
                                <select name="" id="">
                                    <option value="#">- Please select - </option>
                                    <option value="1">option 1</option>
                                    <option value="1">option 2</option>
                                    <option value="1">option 3</option>
                                    <option value="1">option 4</option>
                                    <option value="1">option 5</option>
                                </select>
                                <label for="">color <span>*</span></label>
                                <select name="" id="">
                                    <option value="#">- Please select - </option>
                                    <option value="1">option 1</option>
                                    <option value="1">option 2</option>
                                    <option value="1">option 3</option>
                                    <option value="1">option 4</option>
                                    <option value="1">option 5</option>
                                </select>
                                <span class="required">Repuired Fiields *</span>
                            </form>
                        <form action="" class="cart-and-action">
                            <div class="quanty clearfix mb-5">
                                <label class="float-left" for="">quantity</label>
                                <div class="float-left">
                                <input type="number" name="product_quantity" id="" min="1">
                                </div>
                            </div>
                            <div class="cart-pro ">
                                <a href="#">Add to cart</a>
                            </div>
                        </form>
                    </div>
                    <!-- options-area End -->
                    <div class="cart-and-action clearfix">
                        <div class="product-action-pro">
                            <a href="#"><i class="far fa-eye"></i></a>
                            <a href="#"><i class="fas fa-balance-scale"></i></a>
                            <a href="#"><i class="fas fa-heart"></i></a>
                        </div>
                    </div>
                        <div class="share-icon">
                            <img src="../../../assets/frontend/img/social-icon.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12"><h3>Latest Product</h3></div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <!--Single product start-->
                    <div class="product-wrapper">
                        <div class="product-img">
                            <a href="#"> <img src="../../../assets/frontend/img/product-img/product2.jpg" alt=""></a>
                            <a href="#"> <img class="secondary-img" src="../../../assets/frontend/img/product-img/product1.jpg"
                                    alt=""></a>
                            <span>hot</span>
                            <div class="product-action">
                                <a href="#"><i class="far fa-eye"></i></a>
                                <a href="#"><i class="fas fa-balance-scale"></i></a>
                                <a href="#"><i class="fas fa-heart"></i></a>
                            </div>
                        </div>
                        <div class="product-content text-center">
                            <h3><a href="#">Water Repellent Parka</a></h3>
                            <div class="rating">
                                <i class="fas far fa-star"></i>
                                <i class="fas far fa-star"></i>
                                <i class="fas far fa-star"></i>
                                <i class="fas far fa-star"></i>
                                <i class="fas far fa-star"></i>
                            </div>
                            <div class="price">
                                <span>$ 229.9 </span>
                                <span><del>$239.9</del></span>
                            </div>
                            <div class="cart-btn">
                                <form action="" method="POST" class="cart-and-action">
                                    <div class="">
                                        <div class="float-left">
                                            <input type="hidden" name="product_quantity" value="1">
                                            <input type="hidden" name="product_id" value="">
                                        </div>
                                    </div>
                                    <div class="cart-pro">
                                        <button class="btn btn-outline-dark btn-lg " type="submit">Add to cart</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!--Single product End-->
                </div>
                
                
            </div>
        </div>
    </div>
</template>

<script>



export default {
    data(){
        return {
            productid: this.$route.params.id,
         
        }
    },
    mounted(){
        this.getProductbyId(this.productid);
    },
    created(){},
    computed:{
        product_computed(){
            return this.$store.getters.getProductbyIdGetters;
        }
    },
    methods:{
        getProductbyId(id){
            this.$store.dispatch('getProductbyIdActions',id);
            // console.log(productid);
        },
         productImage(product_url){
            if(product_url.indexOf('https') != -1){
                return "https://picsum.photos/200/300";
            }else{
                return "http://localhost/1_zubayer_lara_ecom_api/public/images/products/"+product_url;
            }
        }
    }
}
</script>