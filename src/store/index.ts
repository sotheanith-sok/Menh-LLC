import { IState } from '@/interfaces-and-types/Interfaces';
import { TScrollTarget } from '@/interfaces-and-types/Types';
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

export const key: InjectionKey<Store<IState>> = Symbol('injection-key');

export const store = createStore<IState>({
    state: {
        scrollTarget: 'header-section',
        companyName: 'Menh LLC',
        companySlogan: 'Design . Build . Engineering',
        operatingDays: 'Monday - Friday',
        operatingHours: '10:00 AM - 10:00 PM',
        companyEmail: 'menhllc@outlook.com',
        companyPhoneNumber: '(562) - 556 - 2078',
        companyAddress: '111 W Ocean Blvd, Suite 478, Long Beach, CA, 90802-4615',
    },
    mutations: {
        updateScrollTarget(state: IState, payload: TScrollTarget) {
            state.scrollTarget = payload;
        },
    },
});
