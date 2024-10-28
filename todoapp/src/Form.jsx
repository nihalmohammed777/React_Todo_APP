import { useState } from "react"
import styles from './Form.module.css'

function Form({todos,settodos}){

    const [todo,settodo]=useState({name:"",done:false})


    function handelsubmit(e){
     e.preventDefault()
     settodos([...todos,todo])
     settodo({name:"",done:false})
    }

    return(
          <form action="" onSubmit={handelsubmit} className={styles.todoform} >
            <div className={styles.inpbox}>
            <input type="text" onChange={(e)=>settodo({name:e.target.value,done:false})} value={todo.name} className={styles.input} />
            <button type="submit" className={styles.button}>Add</button>
            </div>
        </form> 
    )
}
export default Form