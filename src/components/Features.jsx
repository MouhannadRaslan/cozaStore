import Footer from "./Footer";
import FeaturesStyle from "./Features.module.css";
import { Link } from "react-router-dom";
import ItemCart1 from "../assets/item-cart-04.jpg";
import ItemCart2 from "../assets/item-cart-05.jpg";
import { useState } from "react";

function Features() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const [count1, setCount1] = useState(0);
  const increaseCount1 = () => setCount1(count1 + 1);
  return (
    <>
      <div className={FeaturesStyle.feature}>
        <p className={FeaturesStyle.subPrg}>
          <Link to="/" className={FeaturesStyle.home}>
            Home →
          </Link>
          Shoping Cart
        </p>
        <div className={FeaturesStyle.content}>
          <div className={FeaturesStyle.cartContent}>
            <table>
              <tr>
                <th>PRODUCT</th>
                <th></th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>

              <tr>
                <td>
                  <img src={ItemCart1} alt="" />
                </td>
                <td>Fresh Strawberries</td>
                <td>$ 36.00</td>
                <td>
                  <div className={FeaturesStyle.count}>
                    <div className={FeaturesStyle.negatif}>-</div>
                    <div className={FeaturesStyle.num}>{count}</div>
                    <div className={FeaturesStyle.pozitif} onClick={increaseCount}>+</div>
                  </div>
                </td>
                <td>$ 36.00</td>
              </tr>
              <tr>
                <td>
                  <img src={ItemCart2} alt="" />
                </td>
                <td>Fresh Strawberries</td>
                <td>$ 36.00</td>
                <td>
                  <div className={FeaturesStyle.count}>
                    <div className={FeaturesStyle.negatif}>-</div>
                    <div className={FeaturesStyle.num}>{count1}</div>
                    <div className={FeaturesStyle.pozitif} onClick={increaseCount1}>+</div>
                  </div>
                </td>
                <td>$ 36.00</td>
              </tr>
            </table>
            <hr style={{ color: "rgba(201, 199, 199, 0.23)", marginTop: "20px" }} />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <input
                className={FeaturesStyle.coupon}
                placeholder="Coupon Code"
                type="text"
              />
              <button className={FeaturesStyle.apply}>APPLY COUPON</button>
              <button className={FeaturesStyle.update}>UPDATE CART</button>
            </div>
          </div>
          <div className={FeaturesStyle.cartTotal}>
            <h3 className={FeaturesStyle.totalHeader}>CARD TOTALS</h3>
            <h4 className={FeaturesStyle.subtotal}>Subtotal: <span style={{marginLeft:'40px'}}>$79.65</span></h4>
            <hr style={{marginTop:'20px',marginBottom:'20px'}} />
            <div className={FeaturesStyle.shippingText}>
            <h4 className={FeaturesStyle.shipping}>Shipping:</h4>
            <p className={FeaturesStyle.shippingPrg}>There are no shipping methods available. Please double check your address, or contact us if you need any help.</p>
            </div>
            <div className={FeaturesStyle.updateTotal}>
                <h5>Calculate Shipping</h5>
                <input type="text" placeholder="select a country" />
                <input type="text" placeholder="State / country" />
                <input type="text" placeholder="postcode / zip" />
                <button className={FeaturesStyle.updateTotalBtn}>UPDATE TOTAL</button>
            </div>
            <hr style={{marginTop:'20px',marginBottom:'20px'}} />
            <h4 className={FeaturesStyle.total}>Total: <span style={{marginLeft:'40px',fontSize:'15px',fontWeight:'300'}}>$79.65</span></h4>
            <button className={FeaturesStyle.proceed}>proceed to checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Features;
