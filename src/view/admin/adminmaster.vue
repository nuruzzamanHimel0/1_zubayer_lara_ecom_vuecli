<template>
    <div>
        <h2>Admin Dashboard</h2>
        <a @click.prevent="logout"  class="btn btn-danger" > LOGOUT </a>

    </div>
</template>

 <script>

export default {
    data(){
        return {

        }
    },
    mounted() {
        var access_token = localStorage.getItem('AToken');
        if(!access_token){
            this.$router.push('/admin/login');
        }
    },
    methods:{
         logout(){
            localStorage.removeItem('AToken');
             this.$router.push('/admin/login');
        }
    }
    
}
</script>