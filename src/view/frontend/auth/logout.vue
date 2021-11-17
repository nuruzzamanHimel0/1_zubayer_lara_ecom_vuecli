<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <h2>Logout successfully</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
        this.logout();
    },
    methods:{
        logout(){
            // alert('he;');
            localStorage.removeItem('AToken');
            // this.$router.push({ name: 'home'});
        }
    }
}
</script>