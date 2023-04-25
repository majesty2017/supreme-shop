import { Header } from "../components"
import styles from "../styles/styles"

const ProductPage = () => {
  return (
    <div>
        <Header activeHeading={3} />
        <br />
        <br />
        <div className={`${styles.section}`}></div>
    </div>
  )
}

export default ProductPage