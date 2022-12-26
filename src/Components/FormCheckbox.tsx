import { FormControlLabel, TextField } from "@material-ui/core";
import { Button, Checkbox, Chip } from "@mui/material";
import { useState } from "react";
import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";

const FormCheckbox = () => {

    const [options, setOptions] = useState([]);
    const { control , handleSubmit, setValue} = useForm({
        defaultValues : {
            employeeList :true,
            customText :''
        }
    });



    const onSubmit =(data :any)=>{
  console.log(data);
    }

    return (
        <>
            <Controller
                control={control}
                name="employeeList"
                render={({
                    field: { value, name, onChange },
                    fieldState,
                    formState
                }) => (
                    <>
                        <FormControlLabel
                            label="Selection Category"
                            control={
                                <Checkbox checked={value}
                                 onChange ={(e)=>onChange(e)}
                                 
                                />
                            }
                        />
                    </>
                )}
            />
              <Controller 
            control={control}
            name="customText"
            render ={({
                field,
                fieldState,
                formState
            })=>(
             <TextField 
                  onChange={field.onChange}
                  value={field?.value}
                  InputProps ={{
                    startAdornment : field.value ? <Chip /> : ''
                  }}
             />

                
            )}
            />
          
            <Button onClick={handleSubmit(onSubmit)}>save</Button>
        </>

    )

}




export default FormCheckbox;