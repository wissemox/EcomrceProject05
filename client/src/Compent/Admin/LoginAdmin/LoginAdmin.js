import React , {useState} from "react";
import { Redirect } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {AAdminLoginUser} from '../../../js/action/Actions' 
import {useSelector} from 'react-redux'
const LoginAdmin = () => {
    const Dispatch=useDispatch()
    const login  =()=>{
        Dispatch(AAdminLoginUser({email:Usrename ,password:Password }))
    }
    const [Usrename, setUsername] = useState()
    const [Password, setPassword] = useState()
  var x = localStorage.getItem("Admin");
  const AdminTrueorFalse =localStorage.getItem('AdminToken')  
    const AdminRedirect = useSelector(state => state.AdminReducer.msg)
  return (
    <div>
      {x ? (
        <div style={{ justifyContent: "center" }} className="flex">
            { AdminRedirect &&<Redirect to="/admin/dashboard"/> }
          <div
            className="mt-14 mb-14"
            style={{ backgroundColor: "#1d252d", width: "50%", height: "80vh" }}
          >
            <p style={{textAlign:"center"}} className="text-white pt-12">Admin</p>
            <p className="text-white mt-4 ml-4"> Userename</p>
            <input value={Usrename} onChange={(e)=>setUsername(e.target.value)}/>
            <p className="text-white mt-4 ml-4"> Password</p>
            <input value={Password} onChange={(e)=>setPassword(e.target.value)}/>
            <div className="mt-4">
            <button onClick={login} className="bg-white pl-4 pr-4">Login</button>

            </div>
          </div>
          
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default LoginAdmin;
