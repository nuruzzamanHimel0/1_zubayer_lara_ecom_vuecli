<template>
    <div id="frontendmaster">
        <comNavbar></comNavbar>
        
        <router-view></router-view>
       
    </div>
</template>

<script>
import comNavbar from './navbar.vue'

export default {
    data(){
        return {

        }
    },
    components:{
        comNavbar,
    }
}
</script>