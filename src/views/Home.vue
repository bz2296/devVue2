<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <test></test>
    </div>
</template>

<script>
// @ is an alias to /src
import { isIE } from '@tools';
import HelloWorld from '@components/HelloWorld';
import test from './Test';

export default {
    name: 'Home',
    components: {
        HelloWorld,
        test,
    },
    created() {
        console.log('asda', isIE);
    },
};
</script>
