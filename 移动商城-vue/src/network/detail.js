import {request} from 'network/request.js'

export function getDetail(iid) {
   return request({
     url: '/detail',
     params: {
       iid
     }
   })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.lowNowPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.shopUrl = shopInfo.shopUrl
    this.sells = shopInfo.cSells
    this.goodsNum = shopInfo.cGoods
    this.score = shopInfo.score
  }
}