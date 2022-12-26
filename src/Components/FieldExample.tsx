import { Button } from "@mui/material"
import { Controller, useFieldArray, useForm } from "react-hook-form"

type FieldValues = {
    cart: {
        name: string,
        amount: number
    }[]

}


export const FieldExample = () => {

    const { control, formState: { errors }, handleSubmit, watch } = useForm<FieldValues>({
        defaultValues: {
            cart: [{
                name: '222',
                amount: 0
            },
            {
                name: '2',
                amount: 0
            },
            {
                name: '22',
                amount: 0
            }]
        }
    });
    const { fields, append, prepend, remove } = useFieldArray({
        name: 'cart',
        control,
    });

    const onSave =(data : any)=>{
console.log(data);
    }

    console.log(watch());
    return <>

        {fields.map((value, index) => {
            return <section key={value.id}>
                <label>
                    <span>Name</span>
                    <Controller
                        control={control}
                        name={`cart.${index}.name`}
                        render={({ field, fieldState }) => (
                            <input type="text" value={field.value} onChange={(e) => field.onChange(e)} />
                        )}
                    />
                </label>

                <label><span>Amount</span>
                    <Controller
                        control={control}
                        name={`cart.${index}.amount`}
                        render={({ field, fieldState }) => (
                            <input type="number" value={field.value} onChange={(e) => field.onChange(e)} />
                        )}
                    />
                </label>
              <Button onClick={()=>remove(index)}>Remove</Button>              

            

            </section>
            

            
        })}
          <Button onClick={()=>{append({
                name : '',
                amount : 100
              })}}>Append</Button>

              <Button onClick={()=>{prepend({
                name : '',
                amount : 300
              })}}>Prepend</Button>

          <Button type="submit" onClick={handleSubmit(onSave)}>Save</Button>


    </>

}