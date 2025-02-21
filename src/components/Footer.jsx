import FooterStyle from './Footer.module.css';

function Footer(){
    return(
        <>
            <footer>
                <div className={FooterStyle.row}>
                    <div className={FooterStyle.footerSection}>
                        <h1 className={FooterStyle.h1}>Categories</h1>
                        
                        <a className={FooterStyle.links} href="">Women</a>
                        <a className={FooterStyle.links} href="">Men</a>
                        <a className={FooterStyle.links} href="">Shoes</a>
                        <a className={FooterStyle.links} href="">Watches</a>
                        
                    </div>
                    <div className={FooterStyle.footerSection}>
                        <h1 className={FooterStyle.h1}>Help</h1>
                        
                        <a className={FooterStyle.links} href="">Track Order</a>
                        <a className={FooterStyle.links} href="">Returns</a>
                        <a className={FooterStyle.links} href="">Shipping</a>
                        <a className={FooterStyle.links} href="">FAQs</a>
                        
                    </div>
                    <div className={FooterStyle.footerSection}>
                        <h1 className={FooterStyle.h1}>GET IN TOUCH</h1>
                        <p className={FooterStyle.p}>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    </div>
                    <div className={FooterStyle.footerSection}>
                        <h1 className={FooterStyle.h1}>Newsletter</h1>
                        <form action="">
                            <input type="email" placeholder='email@example.com' />
                            <button className={FooterStyle.btn}>SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
                <p className={FooterStyle.prg}>Copyright ©2025 All rights reserved | Made with  by <span className={FooterStyle.span}>Colorlib</span> & distributed by <span className={FooterStyle.span}>ThemeWagon</span></p>
            </footer>
        </>
    );
}

export default Footer;