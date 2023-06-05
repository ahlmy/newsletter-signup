import "./newsletter.css";
import icon_list from "../../assets/icon-list.svg";
import Button from "../button/Button";
import Newsletter_success from "../newsletter_success/Newsletter_success";
import { useState, useRef } from "react";

const Newsletter = () => {
  const [imgRadius, setImgRadius] = useState("25px");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [blank, setBlank] = useState(false);
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setBlank(true);
      inputRef.current.focus();
      inputRef.current.style.outline = "solid 1px red";
      setTimeout(() => {
        setBlank(false);
        inputRef.current.style.outline = "none";
      }, 2000);
      return;
    }
    setSuccess(true);
  };
  return (
    <div className="newsletter-container">
      <div>
        {success ? (
          <Newsletter_success
            emailName={email}
            setSuc={() => {
              setSuccess(false);
              setEmail("");
            }}
          />
        ) : (
          <div className="newsletter">
            <div className="newsletter--content">
              <h1 className="newsletter--content--title">Stay updated!</h1>
              <p className="newsletter--content--desc">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul className="newsletter--content--list">
                <li>
                  <img src={icon_list} alt="icon" />
                  <p>Product discovery and building what matters</p>
                </li>
                <li>
                  <img src={icon_list} alt="icon" />
                  <p> Measuring to ensure updates are a success</p>
                </li>
                <li>
                  <img src={icon_list} alt="icon" />
                  <p>And much more!</p>
                </li>
              </ul>
              <form
                className="newsletter--content--form"
                onSubmit={handleSubmit}
              >
                <label htmlFor="email">Email address</label>
                {blank ? <span id="asterisk">*</span> : ""}
                <input
                  ref={inputRef}
                  type="email"
                  id="email"
                  placeholder="email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  onMouseEnter={() => setImgRadius("0")}
                  onMouseLeave={() => setImgRadius("25px")}
                >
                  Subscribe to monthly newsletter
                </Button>
              </form>
            </div>
            <div className="newsletter--image--container">
              <img
                className="newsletter--image"
                alt="signup-desktop"
                style={{ borderRadius: `${imgRadius}` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Newsletter;
