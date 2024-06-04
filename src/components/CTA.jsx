import styles from "../style"
import Button from "./Button"


const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}> 
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2}`}>Cosa stai aspettando?</h2>
        <p className={`${styles.paragraph}`}>Iscriviti oggi e approfitta di tutti i vantaggi esclusivi della nostra carta, progettata per offrirti il massimo della comodità e della sicurezza!</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
    </section>
  )

export default CTA