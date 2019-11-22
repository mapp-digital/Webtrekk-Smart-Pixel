import {mount, createLocalVue} from '@vue/test-utils';
import Webtrekk from '../../src/index';
import VueRouter from 'vue-router';

const createWrapper = (component, config) => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    const router = new VueRouter({
        mode: 'history',
        base: 'localhost',
        routes: [
            {
                path: '/',
                name: 'route',
                component: component
            }
        ]
    });

    localVue.use(Webtrekk, config);

    const wrapper = mount(component, {
        sync: false,
        localVue,
        router
    });
    // if router is used, the test utils need this tiny kick in the butt to execute hook
    const from = {}; // mock 'from' route
    const to = {}; // mock 'to' route
    wrapper.vm.$options.beforeRouteEnter[0](to, from, cb => cb(wrapper.vm));
    return wrapper;
};

export {createWrapper};
