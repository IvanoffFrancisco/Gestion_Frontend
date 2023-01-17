import React, { useState } from 'react'

export default function Login() {

  const [data, setData] = useState({});

  const hendlerChangeLogin=(e)=>{
    const {name,value}=e.target;
    setData({...data,[name]:value});
  }

  const hendlerSubmitLogin=async (e)=>{
      e.preventDefault();
      let config={
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    }
      const res=await fetch('http://localhost:4000/api/login',config);
      const respuesta=await res.json();

      console.log(respuesta);
  }

  return (
    <div className='container border border-success rounded-5' style={{"width":"60%","margin-top":"100px","padding":"30px"}}>
        <h2 className='text-center'>Bienvenido</h2>
        <form className='colum'>
        <small id="emailHelp" class="form-text text-muted">Porfavor ingrese su correo y contraseña para poder ingresar</small>
          <div style={{"margin-top":"20px"}} className="form-group">
            <label for="exampleInputEmail1">Correo:</label>
            <input type="email" className="form-control border border-primary-subtle" onChange={hendlerChangeLogin} name="correo" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div style={{"margin-top":"30px"}} className="form-group">
            <label for="exampleInputPassword1">Contraseña:</label>
            <input type="password" className="form-control border border-primary-subtle" onChange={hendlerChangeLogin} name="contraseña" id="exampleInputPassword1"/>
          </div>
          <div className='colum'>
            <button onClick={hendlerSubmitLogin} style={{"width":"50%","display":"block", "margin":"20px auto"}} type="submit" className="btn btn-primary">Ingresar</button>
          </div>
        </form>
    </div>
    
  )
}
