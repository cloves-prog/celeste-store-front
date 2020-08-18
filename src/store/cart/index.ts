import { Action, ActionTypes, CartState } from "./types";

const INITIAL_STATE: CartState = {
  products: [],
};

export default function reducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      let products = [...state.products];
      let product = products.find((product) =>
        product.id === action.payload.id
      );
      if (!product) {
        products.push({
          id: action.payload.id,
          quantity: 1
        })
      } else {
        product.quantity++
        products = products.map(item => 
          item.id === product?.id ? product : item)
      }
      
      return {
        ...state,
        products,
      };

    case ActionTypes.REMOVE_ITEM:
      let productsFiltered = [...state.products];
      let productFiltered = productsFiltered.find((product) =>
        product.id === action.payload.id
      );
      productFiltered!.quantity--
      if (productFiltered!.quantity === 0) {
        productsFiltered.splice(productsFiltered.indexOf(productFiltered!), 1);
      }

      return {
        ...state,
        products: productsFiltered
      }
    case ActionTypes.SET_SALES_PEOPLE_ID: 
      return{
        ...state,
        salesPeopleId: action.payload,


      }
    case ActionTypes.SET_CLIENT_ID:
      return{
        ...state,
        clientId: action.payload,
      }
    case ActionTypes.CREATE_SALE_SUCCESS:
      return {
        ...INITIAL_STATE,
        created: true,
      };
    case ActionTypes.CLEAR:
      return {
        ...INITIAL_STATE,
      };
    case ActionTypes.CLOSE_ALERT_SUCCESS:
      return {
        ...state,
        created: false,
      };
      case ActionTypes.CREATE_SALE_ERROR:
        return {
          ...state,
          messageError: "Ocorreu um erro ao finalizar a compra"
        };
    default:
      return state;
  }
}
