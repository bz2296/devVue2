import { APP_SPIN } from '@types';

export default {
    [APP_SPIN](state, isAdd) {
        state.app.showSpin = state.app.showSpin + (isAdd ? 1 : -1);
    },
};
