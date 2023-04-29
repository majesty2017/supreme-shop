import { useParams } from "react-router-dom"
import { Footer, Header, ProductDetails, SuggestedProducts } from "../components"
import { useEffect, useState } from "react"
import { productData } from "../static/data"

const ProductDetailPage = () => {
    const { name } = useParams()
    const [data, setData] = useState(null)
    const productName = name.replace(/-/g, ' ')

    useEffect(() => {
      const data = productData.find((item) => item.name === productName);
      setData(data)
    }, [productName])
    
  return (
    <div>
        <Header />
        <ProductDetails data={data} />
        {
          data && (
            <SuggestedProducts data={data} />
          )
        }
        <Footer />
    </div>
  )
}

export default ProductDetailPage