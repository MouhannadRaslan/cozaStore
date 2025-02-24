import Footer from "./Footer";
import BlogStyle from './Blog.module.css';

function Blog(){
    return(
        <>
            <div className={BlogStyle.blog}>
                <div className={BlogStyle.blogBanner}>
                    <h1>Blog</h1>
                </div>
                <div className={BlogStyle.blogContent}>
                        <div className={BlogStyle.leftSection}>
                            {/* first blog */}
                            <div className={BlogStyle.firstImgContainer}>
                                <div className={BlogStyle.firstImg}></div>
                            </div>
                            <div className={BlogStyle.blogText}>
                                <h1>8 Inspiring Ways to Wear Dresses in the Winter</h1>
                                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            </div>
                            {/* second blog */}
                            <div className={BlogStyle.secondImgContainer}>
                                <div className={BlogStyle.secondImg}></div>
                            </div>
                            <div className={BlogStyle.blogText}>
                                <h1>8 Inspiring Ways to Wear Dresses in the Winter</h1>
                                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            </div>
                            {/* third blog */}
                            <div className={BlogStyle.thirdImgContainer}>
                                <div className={BlogStyle.thirdImg}></div>
                            </div>
                            <div className={BlogStyle.blogText}>
                                <h1>8 Inspiring Ways to Wear Dresses in the Winter</h1>
                                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            </div>
                            <div className={BlogStyle.circle}>
                                    <span className={BlogStyle.one}>1</span>
                                    <span className={BlogStyle.two}>2</span>
                            </div>
                        </div>
                        <div className={BlogStyle.rightSection}>
                            <div className={BlogStyle.searchInput}>
                            <input type="text" className={BlogStyle.search} placeholder="Search" />
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className={BlogStyle.categories}>
                                <h1>Categories</h1>
                                <a href="">Fashion</a>
                                <a href="">Beauty</a>
                                <a href="">Street Style</a>
                                <a href="">Life Style</a>
                                <a href="">DIY & Crafts</a>
                            </div>
                            <div className={BlogStyle.archive}>
                                <h1>Archive</h1>
                                <a href="">July 2018 <span>(9)</span></a>
                                <a href="">June 2018 <span>(39)</span></a>
                                <a href="">May 2018 <span>(29)</span></a>
                                <a href="">April 2018 <span>(35)</span></a>
                                <a href="">March 2018 <span>(22)</span></a>
                                <a href="">February 2018 <span>(32)</span></a>
                                <a href="">January 2018 <span>(21)</span></a>
                                <a href="">December 2017 <span>(26)</span></a>
                            </div>
                            <div className={BlogStyle.tags}>
                                <h1>Tags</h1>
                                <a href="">Fashion</a>
                                <a href="">Lifestyle</a>
                                <a href="">Denim</a> <br />
                                <a href="">Streetstyle</a>
                                <a href="">Crafts</a>
                            </div>
                        </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Blog;