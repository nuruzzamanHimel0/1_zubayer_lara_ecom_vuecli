<template>
    <div id="frontendmaster">
        <!-- <comNavbar></comNavbar> -->

        <compHeader></compHeader>
        
        <router-view></router-view>
       
    </div>
</template>

<script>
// import comNavbar from './navbar.vue'

import compHeader from './header.vue'

import("../../assets/frontend/css/main.css");
import("../../assets/frontend/css/responsive.css");
import("../../assets/frontend/css/all.css");
import("../../assets/frontend/css/meanmenu.css");



export default {
    data(){
        return {

        }
    },
    components:{
        // comNavbar,
        compHeader,
    }
}
</script>