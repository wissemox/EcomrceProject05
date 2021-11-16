import React , {useEffect , useState} from "react";
import Navbar02 from "../../HomePage/Navbar/Navbar02";
import Reserche from "./Reserche";
import Filter from "../Filter/Filter";
import Container from '@mui/material/Container';
import {useDispatch , useSelector} from 'react-redux'
import {ProductGetAll} from '../../../js/action/Actions'
import ProductMap from '../map/ProductMap'
import Pannier from '../../HomePage/Pannier/Pannier'
import Catgories from '../../HomePage/Catgories/Catgories'
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const MainPage = ({setCatgorie , Catgoire}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ProductGetAll())
  }, [])
  const [Number01, setNumber01] = useState(0);

  const ProductGet4 = useSelector(state => state.ProductGetAll.ProductAll)
  const [Reserche01 , setResechre]=useState("")
  const [Tile , setTaile]=useState("")
  const[Filter01 , setFilter01]=useState(false)
  return (
    <div >
      {!ProductGet4 ? <p>Spinner</p> : <div className=" mb-6">
        <Pannier/>
      <Navbar02 /> 
      <Reserche Reserche01={Reserche01} setResechre={setResechre}  />
      <div style={{backgroundColor:"#f4f4f4" , width:"100%"}} className="flex  DisplayNoneRepsive600Mobie"> 
      <div>
      {Filter01 && 
 
      <AppBar   style={{background: "rgba(42, 199, 220, 0.527)" , boxShadow:"none"  }}>
        <div   className={`${Filter01 && "AnimationMarinLeftMenu"}`}     style={{width:"280px" , backgroundColor:"white"  , height:"100vh" ,overflowY: "scroll",}}> 
        <div   style={{ width: "100%" , marginTop:"50px" }}>
          <div style={{justifyContent:"flex-end"}} className="flex  pr-6 "> 
           <HighlightOffIcon onClick={()=>setFilter01(!Filter01)} style={{color:"#9e0a0a"}}/>
          </div>
          <div  > 
          <Filter setCatgorie={setCatgorie} Catgoire={Catgoire} setTaile={setTaile} Tile={Tile} Number01={Number01} setNumber01={setNumber01} /> 
          </div>
        </div>
        </div>
      </AppBar>
     
       }
      </div>
          <Container> 
            <div className="pt-2 pb-4 pl-4 pr-4 flex 	"> 
               <div className="w-2/4" > 
                  <p  style={{fontWeight:"600"}}>Filter</p>
               </div> 
               <div style={{display:"flex"  , justifyContent:"flex-end"}} className="w-2/4" >
                 <IconButton> 
                   <FilterListIcon onClick={()=>setFilter01(!Filter01)}  />
                 </IconButton> 
               </div>
            </div>
           
          </Container>
      </div>
    
      <div style={{maxWidth:"1400px" , marginRight:"auto" , marginLeft:"auto"}} className="flex">
            {console.log(Reserche01)}
        <div className="DisplayNoneRepsosiveProduct"  style={{ width: "20%" , marginTop:"30px" }}>
          <Filter setCatgorie={setCatgorie} Catgoire={Catgoire} setTaile={setTaile} Tile={Tile} Number01={Number01} setNumber01={setNumber01} />
        </div>
        {console.log(Tile)}
        {console.log(Number01)}
        <div className="widhtReposiveFrom80To100Product marginReposiveProduct widht80pr" > 
      
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
