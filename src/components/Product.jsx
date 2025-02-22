import ProductStyle from "./Product.module.css";
import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";

function Product() {
  const [isOpen, setIsOpen] = useState(false); //offcanvas menu

  // add to cart
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <>
      <div className={ProductStyle.product}>
        <h1 className={ProductStyle.productHeader}>Product Overview</h1>
        <div className={ProductStyle.productList}>
          <ul>
            <li className={ProductStyle.selectedList}>All Product</li>
            <li>Women</li>
            <li>Men</li>
            <li>Bag</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
          <div className={ProductStyle.filterSearch}>
            <span className={ProductStyle.filter}>
              <i class="fa-solid fa-filter fa-2xs"></i> Filter
            </span>
            <span className={ProductStyle.search}>
              <i class="fa-solid fa-magnifying-glass"></i> Search
            </span>
          </div>
        </div>
        <div className={ProductStyle.cardContainer}>
          <div className={ProductStyle.cardRow}>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img1} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({ name: "Esprit Ruffle Shirt", price: 16.64 })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>Esprit Ruffle Shirt</p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$16.64</span>
            </div>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img2} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({ name: "Herschel supply", price: 35.31 })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>Herschel supply</p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$35.31</span>
            </div>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img3} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({ name: "Only Check Trouser", price: 25.5 })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>Only Check Trouser</p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$25.50</span>
            </div>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img4} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({ name: "Classic Trench Coat", price: 75.0 })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>Classic Trench Coat</p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$75.00</span>
            </div>
          </div>
          <div className={ProductStyle.cardRow}>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img5} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({ name: "Front Pocket Jumper", price: 34.75 })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>Front Pocket Jumper</p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$34.75</span>
            </div>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img6} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({
                        name: "Vintage Inspired Classic",
                        price: 93.2,
                      })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>
                  Vintage Inspired Classic
                </p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$93.20</span>
            </div>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img7} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({
                        name: "Shirt in Stretch Cotton",
                        price: 52.66,
                      })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>
                  Shirt in Stretch Cotton
                </p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$52.66</span>
            </div>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img8} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({
                        name: "Pieces Metallic Printed",
                        price: 18.96,
                      })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>
                  Pieces Metallic Printed
                </p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$18.96</span>
            </div>
          </div>
          <div className={ProductStyle.cardRow}>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img9} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({
                        name: "Converse All Star Hi Plimsolls",
                        price: 75.0,
                      })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>
                  Converse All Star Hi Plimsolls
                </p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$75.00</span>
            </div>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img10} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({
                        name: "Femme T-Shirt In Stripe",
                        price: 25.85,
                      })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>
                  Femme T-Shirt In Stripe
                </p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$25.85</span>
            </div>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img11} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({ name: "Herschel supply", price: 63.16 })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>Herschel supply</p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$63.16</span>
            </div>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img12} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({ name: "Herschel supply", price: 63.15 })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>Herschel supply</p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$63.15</span>
            </div>
          </div>
          <div className={ProductStyle.cardRow}>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img13} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({ name: "T-Shirt with Sleeve", price: 18.49 })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>T-Shirt with Sleeve</p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$18.49</span>
            </div>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img14} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({ name: "Pretty Little Thing", price: 54.79 })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>Pretty Little Thing</p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$54.79</span>
            </div>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img15} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({
                        name: "Mini Silver Mesh Watch",
                        price: 86.85,
                      })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>
                  Mini Silver Mesh Watch
                </p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$86.85</span>
            </div>
            <div className={ProductStyle.productContent}>
              <div className={ProductStyle.imgContainer}>
                <div className={`${ProductStyle.img16} ${ProductStyle.img}`}>
                  <button
                    className={ProductStyle.addToCart}
                    onClick={() =>
                      addToCart({ name: "Square Neck Back", price: 29.64 })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className={ProductStyle.productHead}>
                <p className={ProductStyle.productName}>Square Neck Back</p>
                <span className={ProductStyle.fav}>
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
              <span className={ProductStyle.price}>$29.64</span>
            </div>
          </div>
          <div className={ProductStyle.moreBtn}>
            <button className={ProductStyle.loadMore}>Load More</button>
          </div>
        </div>
      </div>
      <div>
        {/* offcanvas menu */}
        <span onClick={() => setIsOpen(true)} className={ProductStyle.cartBtn}>
          <i class="fa-solid fa-cart-shopping fa-lg"></i>
        </span>
        <div
          className={`overlay ${isOpen ? "show" : ""}`}
          onClick={() => setIsOpen(false)}
        ></div>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            ✖
          </button>
          {/* add to cart */}
          <div
            style={{
              width: "100%",
            }}
          >
            <span
              style={{
                fontFamily: "sans-serif",
                textAlign: "center",
                marginLeft: "100px",
                fontSize: "1.5rem",
              }}
            >
              Your Cart
            </span>
            <hr />
            <ul className="cartList">
              {cart.map((item, index) => (
                <li key={index} className="cartLi">
                  {item.name} - ${item.price}
                  <button
                    className="productCartBtn"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <hr style={{marginBottom:'20px' , marginTop:'20px'}} />
            <span className="totalPrice">Total Price : {totalPrice} $</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
