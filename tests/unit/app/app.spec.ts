import App from '@/app';
import { shallowMount, createLocalVue } from '@vue/test-utils';
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* need add to all views for mock store and dependencies      */
import '../common';
import Vuex from 'vuex';
import store from '@/store';
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

describe('app renders correctly', () => {
  let wrapper: any;
  const localVue = createLocalVue();
  localVue.use(Vuex);

  // clean instance for all test
  beforeEach(() => {
    // mount the component and have the wrapper
    wrapper = shallowMount(App, {localVue, store });
  });

  it('check vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('snapshot correct', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
