<template>
    <div id="login"><h1>Login</h1></div>
</template>
<script>
    export default {
        created(){
            console.log('LOGIN')
            axios.get('me');
        }
    }
</script>