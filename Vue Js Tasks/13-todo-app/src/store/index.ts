import { createStore } from 'vuex'

import post from  '@/store/modules/post/post.store'
import { State } from '@/interfaces'


export default createStore<State>({
  
  modules: {
    post
  }
})
