import { Box, Button, Checkbox, FormControlLabel } from "@mui/material"
import { Controller, useForm } from "react-hook-form"

export const MuiCheckbox =()=>{

    const {control, formState: {errors}, handleSubmit} = useForm({
        defaultValues : {
            terms: true
        }
    });


    return (
        <Box>
         
            <Controller 
            name = "terms"
            control ={control}
            render = {({field, fieldState})=>(
                <FormControlLabel  
                label="I Accept the terms"
                control={<Checkbox  checked ={field.value} onChange={(e)=>field.onChange(e)}/>}/>
            )}

            />
            <Button type="submit" onClick={handleSubmit((data)=>console.log(data))}>Save</Button>

          
        </Box>
    )

}