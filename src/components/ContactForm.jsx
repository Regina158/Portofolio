import { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Button from "./Button";
import FormInput from "./FormInput";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Log the form data to verify it's being set correctly
      console.log(formData);

      const response = await axios.post(
        "https://high-pearle-istudent-e72a78db.koyeb.app/pesan",
        formData
      );

      toast.success("Pesan berhasil terkirim");

      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <>
      <Toaster />
      <div className="w-full">
        <div className="leading-loose">
          <form onSubmit={handleSubmit} className="text-left">
            <FormInput
              inputLabel="Name"
              labelFor="name"
              inputType="text"
              inputId="name"
              inputName="name"
              ariaLabelName="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <FormInput
              inputLabel="Email"
              labelFor="email"
              inputType="email"
              inputId="email"
              inputName="email"
              ariaLabelName="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="mt-6">
              <label
                className="block text-lg text-primary-dark dark:text-gray-900 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-5 py-2 border border-violet-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-gray-900 bg-violet-100 dark:bg-violet-100 rounded-3xl shadow-sm text-md focus:outline-none focus:ring-0 hover:border-none"
                id="message"
                name="message"
                cols="10"
                rows="4"
                aria-label="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-violet-500 hover:bg-violet-600 focus:ring-1 focus:ring-violet-900 rounded-3xl mt-6 duration-500">
              <Button
                title="Send Message"
                type="submit"
                aria-label="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
