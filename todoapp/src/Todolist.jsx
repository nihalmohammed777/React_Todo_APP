import Todoitem  from "./Todoitem"
import styles from './Todolist.module.css'

function Todolist({todos,settodos}){

    const sortedtodo=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))

    return(
        //removed map bracket  
        <div className={styles.list}>
        {sortedtodo.map((value,index)=>
         <Todoitem key={index} item={value} todos={todos} settodos={settodos}/>
        )}
        </div>
    )
}
export default Todolist