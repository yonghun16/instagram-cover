import Redirect from "../components/Redirect";
import backShop from '../assets/post/back_shop.jpg';

function ShopPage() {
  return (
    <div>
      <Redirect page="Shop" backImg={backShop}/>
    </div>
  )
}

export default ShopPage;
