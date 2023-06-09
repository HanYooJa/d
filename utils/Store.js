import { createContext, useReducer } from 'react'
export const Store = createContext() // 컨텍스트 생성
const initialState = {
  // 초기 상태 지정
  cart: { cartItems: [] },
}
function reducer(state, action) {
  // reducer 함수 생성
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      )
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem]
      return { ...state, cart: { ...state.cart, cartItems } }
    }
    default:
      return state
  }
}
