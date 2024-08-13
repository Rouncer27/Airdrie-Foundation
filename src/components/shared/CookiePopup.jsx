import CookieConsent from "react-cookie-consent";
import "./cookiePopup.scss";

const CookiePopup = () => {
  return (
    <CookieConsent
      className="cookie-notice"
      location="bottom"
      buttonText="I understand"
      cookieName="adcf"
      style={{ background: "#2f4560" }}
      buttonStyle={{
        background: "#9d7a58",
        color: "#fff",
        fontSize: "16px",
      }}
    >
      <div className="cookie-wrap">
        <p>
          This website uses cookies to enhance the user experience.{" "}
          <a href="/privacy-policy">Read our Privacy Policy here.</a>
        </p>
      </div>
    </CookieConsent>
  );
};

export default CookiePopup;
