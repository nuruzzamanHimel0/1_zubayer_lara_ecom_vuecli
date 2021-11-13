<template>
    <div id="frontendmaster">
        <comNavbar></comNavbar>
        
       <div class="container">
           <div class="card border-success mb-3" >
                <div class="card-header bg-transparent border-success">Header</div>
                <div class="card-body text-success">
                    <h5 class="card-title">Success card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-footer bg-transparent border-success">Footer</div>
            </div>
       </div>
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