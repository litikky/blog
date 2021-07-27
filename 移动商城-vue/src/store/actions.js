import {ADD_TO_CHART, ADD_COUNTER} from './mutations-types'

export default {
  addChart(context, payload) {
    return new Promise((resolve, reject) => {
      // 1. 查找之前数组是否有该商品
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    // 2. 判断
    if(oldProduct) {
      context.commit(ADD_COUNTER, oldProduct)
      resolve('数量+1')
    } else {
      payload.count = 1
      context.commit(ADD_TO_CHART, payload)
      resolve('加入购物车')
    }
    })
  }
}