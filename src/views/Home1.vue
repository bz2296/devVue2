<template>
    <div class="home1">
        <div>
            数据是 {{app.showSpin}}
            {{$t('test')}}
            <div>
                <button @click="add"></button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { APP_SPIN } from '@store/types';
import { testQuery } from '@/api/api';

export default {
    name: 'Home',
    // components: {
    //     HelloWorld,
    // },
    data() {
        return {
        };
    },
    async created() {
        const res = await testQuery({
        }, {
            restfulParams: {
                users: 'users',
            },
        });
        console.log('created: ', res);
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
