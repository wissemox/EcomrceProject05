import {combineReducers} from 'redux'
import ProductADD from './ProductReducer'
import ProductGetAll from './AllProductGet'
import Register from './Register'
import ProductValide from './ProductValide'
export default combineReducers({ProductADD,ProductGetAll,Register , ProductValide})