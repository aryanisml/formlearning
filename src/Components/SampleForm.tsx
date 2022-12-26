import { Controller, useForm, useWatch } from "react-hook-form";

const SampleForm =()=>{

    const {control, handleSubmit} = useForm();
    const onSave =() =>{

    }
    const firstNameValue = useWatch({
        control,
        name : 'firstName'
    })

    console.log(firstNameValue);

    return (
        <form onSubmit={handleSubmit(onSave)}>
            {/* <Controller name="firstName" render={()=>(
                <input type="text" />
            )}/> */}
             <input type="text" />
            <input type="submit" />
        </form>
    )

}
export default SampleForm;