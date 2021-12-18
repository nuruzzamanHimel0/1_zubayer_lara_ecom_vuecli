<template>
    <div id="frontendmaster">
        <!-- <comNavbar></comNavbar> -->
        
        <router-view></router-view>
       
    </div>
</template>

<script>
// import comNavbar from './navbar.vue'

import("../../assets/frontend/css/main.css");
import("../../assets/frontend/css/responsive.css");
import("../../assets/frontend/css/all.css");


export default {
    data(){
        return {

        }
    },
    components:{
        // comNavbar,
    }
}
</script>