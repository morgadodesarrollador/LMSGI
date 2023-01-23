import { useState } from "react"

export const AddCategory = ({ onNewCategoria }) => { 
    
    const [inputvalue, setInputValue] = useState('One Punch')

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }
    const onSubmitForm = (event) => {
        event.preventDefault();

        if (inputvalue.trim().length <= 1) return  //1
        //se emite onNewCategory el valor que argumenta
        onNewCategoria( inputvalue.trim())
        setInputValue('')
    }
    return (  
        <form onSubmit= { onSubmitForm }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputvalue}
                onChange = { onInputChange }
             // onChange = { (event) => onInputChange (event)}
            />
        </form>
    )
}
