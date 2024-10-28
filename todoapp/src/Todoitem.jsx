import styles from './Todoitem.module.css'

function Todoitem({item,todos,settodos}){

  function handeldelete(item){
    settodos(todos.filter((value)=> value !== item))
  }

  function handelclick(name){
const newarray=todos.map((value,index)=>value.name===name?
{...value,done:!value.done}:value  )
settodos(newarray)
console.log(todos);
  }

  const completed=item.done ?  styles.completed : ""

    return(
          <div className={styles.item}>
        <h1 className={styles.itemname} >
          {/* adding span tag */}
        <span className={completed}  onClick={()=>handelclick(item.name)}>{item.name}</span>
        <span className={styles.delete} onClick={()=>handeldelete(item)} >X</span>
        </h1>
        <hr className={styles.line} />
          </div>
    )
}

export default Todoitem