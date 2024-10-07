import { create } from 'zustand'
interface Product {}
interface State {
  cart: Product[]
  totalItems: number
  totalPrice: number
}
// Item?: Product
// Item?: Product
interface Actions {
  addToCart: () => void
  removeFromCart: () => void
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
}

export const useCartStore = create<State & Actions>(() => ({
  cart: INITIAL_STATE.cart,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,
  addToCart: () => {
    // product?: Product
    // something
  },
  removeFromCart: () => {
    // product?: Product
    // something
    alert('Delete item in cart')
  },
}))
