import {
    APP_SPIN,
} from '@store/types';

export default {
    [APP_SPIN](state, isAdd) {
        // eslint-disable-next-line operator-assignment
        state.app.showSpin = state.app.showSpin + (isAdd ? 1 : -1);
    },
};
