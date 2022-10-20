import Vue from 'vue'
import Vuex from 'vuex'
import modureCart from '@/store/cart.js'
import  moduleUsers from '@/store/user.js'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules:{
    'm_cart' : modureCart, 
    'm_user': moduleUsers
  }
})

export default store