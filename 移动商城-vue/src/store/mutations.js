import {ADD_TO_CHART, ADD_COUNTER, CHANGE_CHECKED} from './mutations-types'

export default {
  [ADD_TO_CHART](state, payload) {
    payload.checked = false
    state.cartList.push(payload)
  },
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [CHANGE_CHECKED](state, payload) {
    payload.checked = !payload.checked
  }
}