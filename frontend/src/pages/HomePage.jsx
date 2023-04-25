import { 
  BestDeals, 
  Categories, 
  Events, 
  FeaturedProduct, 
  Header, 
  Hero,
  Sponsored
 } from "../components"

const HomePage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProduct />
        <Sponsored />
    </div>
  )
}

export default HomePage