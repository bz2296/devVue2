import { APP_SPIN } from '@store/types';

export default {
    [APP_SPIN](state, isAdd) {
        state.app.showSpin += (isAdd ? 1 : -1);
    },
};
