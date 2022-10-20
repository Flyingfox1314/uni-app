export default {
  // 开启命名空间
  namespaced: true,
  // state 数据
  state: () => ({
    // 收货地址
    address: JSON.parse(uni.getStorageSync('address') || '{}'), 
    token:'', 
    // 用户的信息对象
    userinfo:JSON.parse(uni.getStorageSync('userinfo') || '{}')
  }), 
  // 方法
  mutations: {
    // 更新收货地址
    updateAddress(state, address) {
      state.address = address
      this.commit('m_user/saveAddressToStorage')
    },
    // 持久化存储addreess
    saveAddressToStorage(state){
      uni.setStorage('address', JSON.stringify(state.address))
    }, 
    updateUserInfo(state, userinfo){
      state.userinfo = uesrinfo
      this.commit('m_user/saveUserInfoStorage')
    }, 
    saveUserInfoStorage(state){
      uni.setStorageSync('userinfo', JSON.stringify(state.userinfo))
    }
  },
  // 数据包装器
  getters: {
    addstr(state){
      if(!state.address.provinceName) return ''
      // 拼接 省，市，区，详细地址 的字符串并返回给用户
      return state.address.provinceName + state.address.cityName + state.address.countyName + state.address.detailInfo
    }
  },
}
