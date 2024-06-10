import { useState } from "react";
import Input from "../shared/form/Input";
import "./newsletter.scss";

const Newsletter = ({ data }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    youremail: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
    captachError: false,
  });

  const clearFormFields = () => {
    setFormData(() => {
      return {
        firstname: "",
        lastname: "",
        youremail: "",
      };
    });
  };

  return (
    <div className="newsletter-sign">
      <div className="newsletter-sign-wrapper">
        <div className="newsletter-sign-content">
          <div className="newsletter-sign-content-inner">
            <div>
              <h2>{data.title}</h2>
              <h3>{data.subTitles}</h3>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
        <div className="newsletter-sign-form">
          <form className="newsletter-form">
            <div className="newsletter-form-input-wrapper">
              <Input
                handler={(event) =>
                  handleOnChange(setFormData, formData, event)
                }
                value={formData.firstname}
                label="First Name"
                id="firstname"
                type="text"
                required={true}
                size="half"
              />
              <Input
                label="Last Name"
                id="lastname"
                type="text"
                value={formData.lastname}
                handler={(event) =>
                  handleOnChange(setFormData, formData, event)
                }
                required={true}
                size="half"
              />
            </div>
            <div className="newsletter-form-input-wrapper newsletter-form-input-wrapper-full">
              <Input
                handler={(event) =>
                  handleOnChange(setFormData, formData, event)
                }
                value={formData.youremail}
                label="Email Address"
                id="youremail"
                type="text"
                required={true}
                size="full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
