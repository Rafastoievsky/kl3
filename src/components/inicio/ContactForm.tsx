import React, { useRef, useState } from "react";
import type { FC } from "react";
//import emailjs from "@emailjs/browser";
//import { ToastContainer, toast } from "react-toastify";
//import { useFormik } from "formik";
//import * as Yup from "yup";
//import { SpinnerComponent } from "../ui/SpinnerComponent";

interface Props {
  pathname: string;
}
const ContactForm: FC<Props> = ({ pathname }) => {
  const [showToasty, setShowToasty] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const spanishPath = "/es/";

/*   const formik = useFormik({
    initialValues: {
      firstName: "", //user name
      lastName: "", //user name
      phone: "", //user name
      user_email: "", // user email
      services: "", // user email
      message: "", // message of email
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("* First name is required"),
      lastName: Yup.string().required("* Last name is required"),
      phone: Yup.string().required("* Phone is required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("* Email is required"),
      services: Yup.string().nullable(),
      message: Yup.string().required("* Message is required"),
    }),
    onSubmit: (values) => {
      try {
        emailjs
          .sendForm(
            import.meta.env.PUBLIC_SERVICE_ID,
            import.meta.env.PUBLIC_TEMPLATE_ID,
            form.current,
            import.meta.env.PUBLIC_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log(result.text);
              if (result.text == "OK") {
                toast.success("Tu Mensaje fue enviado correctamente", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
                setShowToasty(true);
                setShowSpinner(false);
              }
            },
            (error) => {
              console.log(error.text);
              toast.error(
                "Encontramos un error al tratar de enviar tu mensaje",
                {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                }
              );
              setShowSpinner(false);
            }
          );
      } catch (error) {
        console.log(error);
        toast.error("Encontramos un error al tratar de enviar tu mensaje", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setShowSpinner(false);
      }
    },
  }); */

  const form: any = useRef();

  return (
    <div className="bg-secondBlue md:h-[600px]  p-16 pt-24">
      <h1 className="md:text-5xl text-2xl font-extrabold text-gray-50">
        Contáctanos
      </h1>
     {showToasty ? ( 
        <div className=" flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <div
            className="bg-blue-100  border-t border-b border-blue-500 text-blue-700 px-4 py-12"
            role="alert"
          >
            <p className="font-bold">
              {pathname.includes(spanishPath)
                ? "Tu Mensaje fue enviado correctamente"
                : "Your message was sent successfully."}
            </p>
            <p className="text-sm mb-2 mt-8 text-justify">
              {pathname.includes(spanishPath)
                ? `Gracias por contactarnos. Hemos recibido tu mensaje, además
                te hemos enviado un correo electrónico a la dirección 
                proporcionada. Por favor, revisa tu bandeja de entrada 
                (y también la carpeta de correo no deseado, por si acaso) 
                y asegúrate de que has recibido nuestra confirmación.`
                : `Thank you for contacting us. We have received your message, and we have also sent you 
                an email to the provided address. Please check your inbox (and also the spam folder, 
                just in case) and make sure you have received our confirmation.`}
            </p>
            <p className="text-sm mt-2 text-justify">
              {pathname.includes(spanishPath)
                ? `Gracias de nuevo por ponerte en contacto con nosotros. 
                Esperamos poder hablar contigo pronto.`
                : `Thank you again for getting in touch with us. We look forward 
                to speaking with you soon.`}
            </p>
            <p className="text-sm mt-2 text-justify">
              {pathname.includes(spanishPath)
                ? `Saludos cordiales,`
                : `Kind regards,`}
            </p>
          </div>
        </div>
       ) : (
        <form
          ref={form}
          //onSubmit={formik.handleSubmit}
          name="contact"
          className=" flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <div className="grid md:grid-cols-2 gap-2">
            <div className="grid md:grid-cols-2 gap-2">
              <div className="relative mb-4">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder={
                    pathname.includes(spanishPath) ? "Nombre(s)" : "Firstname"
                  }
                  //onChange={formik.handleChange}
                  //value={formik.values.firstName}
                  className="w-full bg-gray-50 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-darkBlue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
{/*                 <div
                  className={`expandable text-red-500 ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "show"
                      : ""
                  }`}
                >
                  {formik.errors.firstName}
                </div> */}
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder={
                    pathname.includes(spanishPath) ? "Apellidos" : "Lastname"
                  }
/*                   onChange={formik.handleChange}
                  value={formik.values.lastName} */
                  className="w-full bg-gray-50 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-darkBlue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
{/*                 <div
                  className={`expandable text-red-500 ${
                    formik.touched.lastName && formik.errors.lastName
                      ? "show"
                      : ""
                  }`}
                >
                  {formik.errors.lastName}
                </div> */}
              </div>
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder={
                  pathname.includes(spanishPath) ? "Celular" : "Phone number"
                }
/*                 onChange={formik.handleChange}
                value={formik.values.phone} */
                className="w-full bg-gray-50 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-darkBlue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
{/*               <div
                className={`expandable text-red-500 ${
                  formik.touched.phone && formik.errors.phone ? "show" : ""
                }`}
              >
                {formik.errors.phone}
              </div> */}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            <div className="relative mb-4">
              <input
                type="text"
                id="user_email"
                name="user_email"
                placeholder="e-mail"
/*                 onChange={formik.handleChange}
                value={formik.values.user_email} */
                className="w-full bg-gray-50 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-darkBlue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
{/*               <div
                className={`expandable text-red-500 ${
                  formik.touched.user_email && formik.errors.user_email
                    ? "show"
                    : ""
                }`}
              >
                {formik.errors.user_email}
              </div> */}
            </div>
            <div className="relative mb-4 inline-block ">
              <select
                id="services"
                name="services"
                placeholder={
                  pathname.includes(spanishPath) ? "Servicios" : "Services"
                }
                className="cursor-pointer w-full bg-gray-50 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-darkBlue py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
/*                 onChange={formik.handleChange}
                value={formik.values.services} */
              >
                <option value="">
                  {pathname.includes(spanishPath) ? "Servicios" : "Services"}
                </option>
                <option value="Backyard">
                  {pathname.includes(spanishPath) ? "Patios" : "Backyard"}
                </option>
                <option value="Kitchen">
                  {pathname.includes(spanishPath) ? "Cocinas" : "Kitchen"}
                </option>
                <option value="Shower">
                  {pathname.includes(spanishPath) ? "Baños" : "Shower"}
                </option>
                <option value="Tile">
                  {pathname.includes(spanishPath) ? "Pisos" : "Tile"}
                </option>
                <option value="Drywall">
                  {pathname.includes(spanishPath)
                    ? "Paredes y Techos"
                    : "Drywall"}
                </option>
                <option value="Paint">
                  {pathname.includes(spanishPath) ? "Pintura" : "Paint"}
                </option>
                <option value="Plumbing">
                  {pathname.includes(spanishPath) ? "Plomeria" : "Plumbing"}
                </option>
                <option value="Cabinets">
                  {pathname.includes(spanishPath) ? "Gabinetes" : "Cabinets"}
                </option>
                <option value="Electricity">
                  {pathname.includes(spanishPath)
                    ? "Electricidad"
                    : "Electricity"}
                </option>
                <option value="Frame">
                  {pathname.includes(spanishPath) ? "Estructuras" : "Frame"}
                </option>
                <option value="Countertops">
                  {pathname.includes(spanishPath) ? "Encimeras" : "Countertops"}
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
{/*               <div
                className={`expandable text-red-500 ${
                  formik.touched.services && formik.errors.services
                    ? "show"
                    : ""
                }`}
              >
                {formik.errors.services}
              </div> */}
            </div>
          </div>
          <div className="relative mb-4">
            <textarea
              id="message"
              name="message"
              placeholder={
                pathname.includes(spanishPath) ? "Mensaje" : "Message"
              }
/*               onChange={formik.handleChange}
              value={formik.values.message} */
              className="w-full bg-gray-50 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-darkBlue py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
{/*             <div
              className={`expandable text-red-500 ${
                formik.touched.message && formik.errors.message ? "show" : ""
              }`}
            >
              {formik.errors.message}
            </div> */}
          </div>
          <div className="flex flex-col">
          <a href={
            pathname.includes(spanishPath)
              ? `/es/privacidad`
              : "/privacy"
        } className="font-semibold text-lg text-white hover:text-lightBlue">
        
            {
                pathname.includes(spanishPath)
                  ? `Pólitica de Privacidad`
                  : "Privacy Policy"
            }
        </a>
            <button
              type="submit"
              className="bg-white text-darkBlue py-2 px-8 focus:outline-none 
                    focus:ring-2 text-center focus:ring-offset-2 focus:ring-offset-gray-800 
                    focus:ring-white rounded"
            >
{/*               {!showSpinner ? (
                pathname.includes(spanishPath) ? (
                  "Enviar"
                ) : (
                  "Send"
                )
              ) : (
                <SpinnerComponent />
              )} */}
            </button>
          </div>
        </form>
      )} 
    </div>
  );
};

export default ContactForm;