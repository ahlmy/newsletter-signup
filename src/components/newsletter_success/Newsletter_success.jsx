import "./newsletter_success.css";
import icon_success from "../../assets/icon-success.svg";
import Button from "../button/Button";

const Newsletter_success = ({ emailName = "", setSuc }) => {
  return (
    <div className="newsletterSuccess">
      <div className="newsletterSuccess--container">
        <div>
          <div>
            <img src={icon_success} alt="" />
          </div>
          <div className="newsletterSuccess--content">
            <h1>Thanks for subscribing</h1>
            <p>
              A confirmation email has been sent to
              <span className="emailSpan"> {emailName}</span>. Please open it
              and click the button inside to confirm your subscription.
            </p>
          </div>
        </div>
        <Button onClick={setSuc}>Dismiss Message</Button>
      </div>
    </div>
  );
};
export default Newsletter_success;
