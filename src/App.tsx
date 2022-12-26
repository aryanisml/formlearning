import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm , SubmitHandler, Controller} from 'react-hook-form';
import {yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {MenuItem, TextField} from '@material-ui/core';
import SelectHook from './SelectHook';
import SampleForm from './Components/SampleForm';
import FormCheckbox from './Components/FormCheckbox';
import { Grid } from '@mui/material';
import FunnelChart from './Components/FunnelChart';
import { Patnagon } from './Components/Pantagon';
import { FieldExample } from './Components/FieldExample';
import { MuiCheckbox } from './Components/MuiCheckbox';
/// https://www.youtube.com/watch?v=nt8NTuUbuG4

interface InputFields {
email : string;
password : string;
locations :Array<any>;
}

const schema = yup.object().shape({
  email : yup.string().required().email(),
  password : yup.string().min(4).max(20).required()
})


function App() {

  const [list, setList] =useState([{
    id :1,
    name :'A'
  },
  {
    id :2,
    name :'B'
  },
  {
    id :3,
    name :'C'
  }])

 const {register,control, handleSubmit, watch, formState : {errors}} = useForm<InputFields>({
   resolver: yupResolver(schema)
 });

const formSumbitMethod : SubmitHandler<InputFields> =(data)=>{
console.log(data);
}




  return (
//     <>
//     <div className="App">
//       <form onSubmit={handleSubmit(formSumbitMethod)}>
//       <Controller
//       defaultValue="swapnil@gmail.com" 
//       name ="email"
//       control={control}
//       render ={({field})=>(  <TextField  {...field} label="Email"  variant='outlined' error={!!errors.email} 
//       helperText={errors.email ? errors.email.message : ''}
//         />
//       )}
//       />
//       <br/>
//       <Controller
//       defaultValue="" 
//       name ="password"
//       control={control}
//       render ={({field})=>(  <TextField  {...field} label="Password"  variant='outlined' error={!!errors.password} 
//       helperText={errors.password ? errors.password.message : ''}
//         />
//       )}
//       />

//  <br />

//     {/* <SelectHook 
//     label ="Select Location"
//     name ="locations"
//     control ={control}
//     defaultValue="">
//       {
//         list.map((data) => (
//           <MenuItem key={data.id} value={data.id}>
//             {data.name}
//           </MenuItem>
//         ))
//       }
//       </SelectHook>
//       <SampleForm /> */}
      

//  <br />








//  <input type="submit" />

//       </form>

//     </div>
//     <Grid container>
//       <Grid item>
//         <FormCheckbox />
//       </Grid>

//     </Grid>
// //     </>
// <FunnelChart />
// <FieldExample />


<MuiCheckbox />
  );
  
}

export default App;
