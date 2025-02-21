import ProductStyle from "./Product.module.css";
import "font-awesome/css/font-awesome.min.css";

function Product() {
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
                  <button className={ProductStyle.addToCart}>
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
          <div className={ProductStyle.moreBtn}><button className={ProductStyle.loadMore}>Load More</button></div>
        </div>
      </div>
    </>
  );
}

export default Product;
