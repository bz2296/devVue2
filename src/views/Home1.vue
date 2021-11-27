<template>
    <div class="home1">
        <div>
            数据是 {{app.showSpin}}
            <div>
                <button @click="add"></button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { APP_SPIN } from '@store/types';

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
        console.log(mapMutations);
        console.log(mapState);
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
