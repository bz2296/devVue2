<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div>
            <div>
                <button @click="add"></button>
            </div>
        </div>
<!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
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
    data() {
        return {
        };
    },
    created() {
        console.log('asda', isIE);
    },
    methods: {
        add() {
        },
    },
    computed: {
    },
};
</script>
