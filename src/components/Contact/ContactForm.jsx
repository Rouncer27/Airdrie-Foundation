import { useState } from "react";
import Input from "./form/Input";
import Textarea from "./form/Textarea";
import "./contactForm.scss";

import submitToServer from "./utils/submitToServer";
import { handleOnChange, handleOnSubmit } from "./utils/formFunctions";

import FormError from "./models/FormError";
import FormSuccess from "./models/FormSuccess";
import FormSubmitting from "./models/FormSubmitting";

const ContactForm = ({ data }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    youremail: "",
    phonenumber: "",
    questions: "",
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
        phonenumber: "",
        questions: "",
      };
    });
  };

  console.log("formStatus: ", formStatus);

  return (
    <div className="contact-form">
      <div className="contact-form-wrapper">
        <div className="contact-form-intro">
          <div>
            <h2>{data.title}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>

        <div className="contact-form-fields">
          <form
            id="contact-form"
            className="contact-us-form"
            onSubmit={(event) =>
              handleOnSubmit(
                event,
                setFormStatus,
                formData,
                submitToServer,
                583,
                clearFormFields,
                formStatus,
              )
            }
          >
            <div className="contact-form-fields-input-wrapper">
              <Input
                handler={(event) =>
                  handleOnChange(setFormData, formData, event)
                }
                value={formData.firstname}
                label="First Name"
                id="firstname"
                type="text"
                errors={formStatus.errors}
                required={true}
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
                errors={formStatus.errors}
              />
            </div>

            <div className="contact-form-fields-input-wrapper">
              <Input
                label="Your Email"
                id="youremail"
                type="email"
                value={formData.youremail}
                handler={(event) =>
                  handleOnChange(setFormData, formData, event)
                }
                required={true}
                errors={formStatus.errors}
              />
              <Input
                label="Phone Number"
                id="phonenumber"
                type="text"
                value={formData.phonenumber}
                handler={(event) =>
                  handleOnChange(setFormData, formData, event)
                }
                required={true}
                errors={formStatus.errors}
              />
            </div>

            <div className="contact-form-fields-input-wrapper">
              <Textarea
                value={formData.questions}
                handler={(event) =>
                  handleOnChange(setFormData, formData, event)
                }
                errors={formStatus.errors}
                size="full"
                position="last"
                title="Questions or Comments"
                type="text"
                nameId="questions"
                required={true}
                rows="5"
              />
            </div>

            <div className="button-wrapper">
              <button type="submit">Contact Us</button>
              <p className="message"></p>
            </div>
          </form>
        </div>
      </div>

      {formStatus.submitting && <FormSubmitting />}
      {formStatus.success && (
        <FormSuccess
          setFormStatus={setFormStatus}
          formStatus={formStatus}
          clearFormFields={clearFormFields}
        />
      )}
      {formStatus.errorWarnDisplay && (
        <FormError setFormStatus={setFormStatus} formStatus={formStatus} />
      )}
      <div
        className="contact-us-background-image"
        style={{ backgroundImage: `url(${""})` }}
      />
      <div className="contact-us-background-overlay" />
    </div>
  );
};

export default ContactForm;
