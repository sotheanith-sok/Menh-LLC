// vuex.d.ts
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { IState } from './interfaces-and-types/Interfaces';
declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<IState>
  }
}
