import styles from './Footer.module.css'
function Footer({completedtodos,totaltodos}){
return (
<div className={styles.footer}>
<span className={styles.item}>completed todos:{completedtodos}</span>
<span className={styles.item}>total todos:{totaltodos}</span>
</div>
)
}
export default Footer