import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>La carta che rende <br className="sm:block hidden"/> tutto possibile</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Ottenere la tua carta non è mai stato così semplice. Registrati in pochi semplici passi e inizia subito a utilizzare la tua nuova carta di credito: avrai a disposizione un regalo di benvenuto del valore di 50€* </p>
        <p className={`${styles.paragraph} max-w-[470px] text-sm mt-3 italic`}>*Il bonus regalo non è prelevabile ma spendibile tramite acquisti in-app o negozi</p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>
    </section>
  )

export default CardDeal