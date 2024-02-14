<template>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
</template>

<script>

import Footer from './components/includes/Footer.vue';
import Header from './components/includes/Header.vue';

export default {
    name: 'App',
    components:{
        Header, Footer

    }
}


</script>

<style lang="scss">
* {
    padding: 0px;
    margin: 0px;
}
</style>

