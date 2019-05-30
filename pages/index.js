import ThreeColumnSection from '../components/ThreeColumnSection';
import Footer from '../components/Footer';
import Promo from '../components/Promo';
// import ButtonUp from '../components/ButtonUp;'

const content_sheep = "We provide our customers with products crafted with love to farming traditions, but keep our prices low. Find out how is that possible!"
const content_cheese = "We provide our customers with products crafted with love to farming traditions, but keep our prices low. Find out how is that possible!"
const Index = () => (
  <div>
    {/* <ButtonUp/> */}
    <Promo
      img="static/img/cheese.png"
      title="Say cheese, say gouda!"
      content={content_cheese}
      action="Get your tour ticket"
      sizing="cover"
    />
    <ThreeColumnSection />
    <Promo img="static/img/sheep.png" title="HANDCRAFTED QUALITY AT SCALE" content={content_sheep} action="About us" />
    <Footer />
  </div>
);

export default Index;
