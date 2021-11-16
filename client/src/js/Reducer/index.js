import {combineReducers} from 'redux'
import ProductADD from './ProductReducer'
import ProductGetAll from './AllProductGet'
import Register from './Register'
import ProductValide from './ProductValide'
import AdminReducer from './Admin'
export default combineReducers({ProductADD,ProductGetAll,Register , ProductValide , AdminReducer})