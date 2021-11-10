import React , {useEffect , useState} from "react";
import Navbar from "../../HomePage/Navbar/Navbar";
import Reserche from "./Reserche";
import Filter from "../Filter/Filter";
import Container from '@mui/material/Container';
import {useDispatch , useSelector} from 'react-redux'
import {ProductGetAll} from '../../../js/action/Actions'
import ProductMap from '../map/ProductMap'
import Pannier from '../../HomePage/Pannier/Pannier'
import Catgories from '../../HomePage/Catgories/Catgories'
const MainPage = ({setCatgorie , Catgoire}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ProductGetAll())
  }, [])
  const [Number01, setNumber01] = useState(0);

  const ProductGet4 = useSelector(state => state.ProductGetAll.ProductAll)
  const [Reserche01 , setResechre]=useState("")
  const [Tile , setTaile]=useState("")
  return (
    <div >
      {!ProductGet4 ? <p>Spinner</p> : <div className="mt-6 mb-6">
        <Pannier/>
      <Navbar /> 
      <Reserche Reserche01={Reserche01} setResechre={setResechre}  />
      <div style={{maxWidth:"1400px" , marginRight:"auto" , marginLeft:"auto"}} className="flex">
            {console.log(Reserche01)}
        <div  style={{ width: "20%" , marginTop:"10px" }}>
          <Filter setCatgorie={setCatgorie} Catgoire={Catgoire} setTaile={setTaile} Tile={Tile} Number01={Number01} setNumber01={setNumber01} />
        </div>
        {console.log(Tile)}
        {console.log(Number01)}
        <div style={{width:"80%"}}> 
      
          <div className="flex justify-evenly" style={{  flexWrap:"wrap"    }}>
            
            {ProductGet4&&ProductGet4.filter((el) =>
                  el.ProductName.toLocaleLowerCase().includes(
                    Reserche01.toLocaleLowerCase().trim()
                  )
                ).filter((el) => (Number01 ? el.Prix == Number01 : el.Prix)).filter((el) => (Catgoire ? el.Tail == Catgoire : el.Tail)).map((el)=><ProductMap el={el}/>)}
          </div>
        </div>
      </div>
    </div> }
     
    </div>
   
  );
};

export default MainPage;
