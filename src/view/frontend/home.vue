<template>
    <div id="home">
           <!-- Header Area -->
           
           
            
            <!-- normal product area -->
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-12"><h3>Latest Product</h3></div>
                    </div>
                    <div class="row">
                       <!-- {{ laravelData }} -->
                        <div v-for="(value,key) in laravelData.data" :key="key" class="col-md-3">
                        
                                <div class="product-wrapper">
                                    <div class="product-img">
                                        <router-link :to="{name:'productDetails', params:{id:value.id}}" > <img :src="productImage(value.product_image)" alt=""></router-link >

                                        <router-link  :to="{name:'productDetails', params:{id:value.id}}"> <img class="secondary-img" src="../../assets/frontend/img/product-img/product1.jpg"
                                                alt=""></router-link >
                                        <span>hot</span>
                                        <div class="product-action">
                                            <a href="#"><i class="far fa-eye"></i></a>
                                            <a href="#"><i class="fas fa-balance-scale"></i></a>
                                            <a href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                    </div>
                                    <div class="product-content text-center">
                                        <h3><a href="#">{{value.product_name}}</a></h3>
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
                                            <a href="#">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                          
                        </div>

                        <pagination :data="laravelData" @pagination-change-page="getResults"></pagination>
                       
                       
                </div>
                </div>
            </section>
       
            <footer>
                <div class="container">
                    <div class="footer-area">
                        <div class="row">
                            <div class="col-lg-3 col-sm-6 mb-sm-5">
                                <div class="footer-widget">
                                    <h3>About</h3>
                                    <ul>
                                        <li><a href="#">News & Stories</a></li>
                                        <li><a href="#"> History</a></li>
                                        <li><a href="#">Our Studio</a></li>
                                        <li><a href="#">Showrooms</a></li>
                                        <li><a href="#">Stockists</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 mb-sm-5">
                                <div class="footer-widget">
                                    <h3>About</h3>
                                    <ul>
                                        <li><a href="#">News & Stories</a></li>
                                        <li><a href="#"> History</a></li>
                                        <li><a href="#">Our Studio</a></li>
                                        <li><a href="#">Showrooms</a></li>
                                        <li><a href="#">Stockists</a></li>
                                    </ul>

                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 ">
                                <div class="footer-widget">
                                    <h3>About</h3>
                                    <ul>
                                        <li><a href="#">News & Stories</a></li>
                                        <li><a href="#"> History</a></li>
                                        <li><a href="#">Our Studio</a></li>
                                        <li><a href="#">Showrooms</a></li>
                                        <li><a href="#">Stockists</a></li>
                                    </ul>

                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 ">
                                <div class="footer-widget">
                                    <h3>About</h3>
                                    <ul>
                                        <li><a href="#">News & Stories</a></li>
                                        <li><a href="#"> History</a></li>
                                        <li><a href="#">Our Studio</a></li>
                                        <li><a href="#">Showrooms</a></li>
                                        <li><a href="#">Stockists</a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 col-sm-8 ">
                                <div class="footer-menu  d-flex align-items-center ">
                                    <nav class="">
                                        <ul>
                                            <li><a href="#">About Us </a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">FAQs</a></li>
                                            <li><a href="#">Order Tracking</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-md-5 col-sm-4 ">
                                <div class="footer-icon d-flex justify-content-end align-items-center">
                                    <span>Connect with us:</span>
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-skype"></i></a>
                                    <a href="#"><i class="fab fa-skype"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <!--Footer-section End-->





    </div>
</template>

<script>
 import axios from 'axios';

export default {
    data(){
        return {
            laravelData: {},
        }
    },
    mounted(){
         this.getResults();
    },
    created(){},
    methods:{
        
        getResults(page = 1) {
			axios.get('/product_paginate?page=' + page)
				.then(response => {
					this.laravelData = response.data.data;
                    // console.log(response.data);
				});
		},
        productImage(url){
            if(url.indexOf('https') != -1){
                return "https://picsum.photos/200/300";
            }else{
                return "http://localhost/1_zubayer_lara_ecom_api/public/images/products/"+url;
            }
        }
    },
    computed:{
        
    }
}
</script>