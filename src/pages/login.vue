<template>
    <div id="login"><h1>Login</h1></div>
</template>
<script>
    //import { axios } from '../axios.js'
    import { mapGetters, mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'getTest'
            ]),
        },
        created(){
            console.log('LOGIN',this)
            this.getTest()
            
        }
    }
</script>