import { Component, Vue } from 'vue-property-decorator';
import { CreateElement, VNode, VNodeData } from 'vue';
import '@/style/main.styl';
import { mapActions } from 'vuex';


@Component({
  name: 'App',
  methods: {...mapActions(['fetchData'])},
})
export default class App extends Vue {

  private created(): void {
    this.fetchData();
  }

  private render(createElement: CreateElement): VNode {

    const data: VNodeData = {
      class: { 'pa-4': true },
      domProps: {
        id: 'app',
      },
    };

    return createElement('div',
      data,
      ['Hello word!', createElement('router-view')],
    );
  }
}
