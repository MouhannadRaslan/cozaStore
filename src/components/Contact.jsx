import Footer from "./Footer";
import ContactStyle from "./Contact.module.css";

function Contact() {
  return (
    <>
      <div className={ContactStyle.contact}>
        <div className={ContactStyle.contactBanner}>
          <h1>Contact</h1>
        </div>
        <div className={ContactStyle.contactBoxes}>
          <div className={ContactStyle.firstBox}>
            <h3>Send Us A Message</h3>
            <form action="">
              <input type="email" placeholder="Your Email Address" />
              <i class="fa-regular fa-envelope"></i>
              <textarea
                name=""
                id=""
                placeholder="How Can We Help ?"
                rows={12}
              ></textarea>
              <button type="submit">SUBMIT</button>
            </form>
          </div>

          <div className={ContactStyle.secondBox}>
            <i class="fa-solid fa-location-dot"></i>
            <h3>Address</h3>
            <p>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
            <i class="fa-solid fa-phone-flip"></i>
            <h3>Lets Talk</h3>
            <p style={{color:'#717fe0'}}>+1 800 1236879</p>
            <i class="fa-regular fa-envelope"></i>
            <h3>Sale Support</h3>
            <p style={{color:'#717fe0'}}>contact@example.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
