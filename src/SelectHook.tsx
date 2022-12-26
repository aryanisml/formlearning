import { FormControl, InputLabel, Select } from "@material-ui/core";
import { Controller } from "react-hook-form";

const SelectHook  =({
    label,
    name ,
    control,
    defaultValue ,
    children ,
    ...props 
}:{
    label: any,
    name : string,
    control:any,
    defaultValue : any,
    children :any
}): JSX.Element =>{
    const labelId = `${name}-label`;
    return (
        <FormControl {...props}>
                <InputLabel  id={labelId}>{label}</InputLabel>
                <Controller
                 name ={name}
                 control ={control}
                 defaultValue ={defaultValue}
                 render={({field})=>( 
                     <Select label={label} defaultValue="">
                         {children}
                     </Select>
                 )}
                />
        </FormControl>
    );
}


export default SelectHook;