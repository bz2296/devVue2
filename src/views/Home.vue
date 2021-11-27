<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div>
            数据是 {{showSpin}}
            <div>
                <button @click="add"></button>
            </div>
        </div>
<!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    </div>
</template>

<script>
// @ is an alias to /src
import { isIE } from '@tools';
// import HelloWorld from '@/components/HelloWorld.vue';
import { mapMutations, mapState } from 'vuex';
import { APP_SPIN } from '@types';

export default {
    name: 'Home',
    // components: {
    //     HelloWorld,
    // },
    data() {
        return {
        };
    },
    created() {
        console.log('asda', isIE);
    },
    methods: {
        ...mapMutations([APP_SPIN]),
        add() {
            this[APP_SPIN](true);
        },
    },
    computed: {
        ...mapState(['app']),
    },
};
</script>
