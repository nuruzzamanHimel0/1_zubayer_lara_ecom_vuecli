<template>
    <div>
        <h2>Admin Dashboard</h2>
    </div>
</template>

 <script>

export default {

    mounted() {
        var access_token = localStorage.getItem('AToken');
        if(!access_token){
            this.$router.push('/admin/login')
        }
    },
    
}
</script>