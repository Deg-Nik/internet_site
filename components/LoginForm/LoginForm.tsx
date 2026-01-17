// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useContext } from "react";


// import Button from "../Button/Button";
// import Input from "../Input/Input";

// import { LOGIN_FORM_VALUES } from "./types";
// import { LoginFormContainer, InputsContainer, Title } from "./styles";

// import type { USER } from "../../modules/Users/types";
// import { useNavigate } from "react-router-dom";
// import { ROUTES } from "../../constants/routes";
// import { UserContext } from "../../App";


// const validationShema = Yup.object().shape({
//   [LOGIN_FORM_VALUES.NAME]: Yup.string()
//     .required("Name field is required")
//     .min(2, "min 2 simbols")
//     .max(10, "max 20 simbols"),
//   [LOGIN_FORM_VALUES.EMAIL]: Yup.string()
//     .required("Email field is required")
//     .email("fild email forme"),
//   [LOGIN_FORM_VALUES.PASSWORD]: Yup.string()
//     .required("Password field is required")
//     .min(5, "min 5 simbols")
//     .max(10, "max 10 simbols"),
// });

// function LoginForm() {

//   const {setUserData} = useContext(UserContext)
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       [LOGIN_FORM_VALUES.NAME]: "",
//       [LOGIN_FORM_VALUES.EMAIL]: "",
//       [LOGIN_FORM_VALUES.PASSWORD]: "",
//     },
//     validationSchema: validationShema,
//     validateOnChange: false,

//     onSubmit: (values, helpers) => {
//       let role: USER["role"] = "GUEST";

//       if (values.name === "admin" && values.email === "admin@gmail.com" && values.password === "admin") {
//         role = "ADMIN"
//       } 
//       else if (values.name === "Degtiarev" && values.email === "degnik@gmail.com" && values.password === "123456") { 
//         role = "EMPLOYEE"
//       }

//       setUserData({
//         name: values[LOGIN_FORM_VALUES.NAME],
//         email: values[LOGIN_FORM_VALUES.EMAIL],
//         password: values[LOGIN_FORM_VALUES.PASSWORD],
//         role,
//       })

//       navigate(ROUTES.USERS)
//       console.log("formik");
//       console.log(values, helpers);
//       helpers.resetForm();
//     },
//   });

//   console.log(formik.errors[LOGIN_FORM_VALUES.EMAIL]);

//   return (
//     <LoginFormContainer onSubmit={formik.handleSubmit}>
//       <Title>Login form</Title>
//       <InputsContainer>
//         <Input
//           id="name-id"
//           name={LOGIN_FORM_VALUES.NAME}
//           placeholder="Enter your name"
//           label="Name*"
//           value={formik.values[LOGIN_FORM_VALUES.NAME]}
//           onChange={formik.handleChange}
//           error={formik.errors[LOGIN_FORM_VALUES.NAME]}
//         />
//         <Input
//           id="email-id"
//           name={LOGIN_FORM_VALUES.EMAIL}
//           placeholder="Enter your email"
//           label="Email*"
//           value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
//           onChange={formik.handleChange}
//           error={formik.errors[LOGIN_FORM_VALUES.EMAIL]}
//         />
//         <Input
//           id="password-id"
//           name={LOGIN_FORM_VALUES.PASSWORD}
//           type="password"
//           placeholder="Enter your password"
//           label="Password*"
//           value={formik.values[LOGIN_FORM_VALUES.PASSWORD]}
//           onChange={formik.handleChange}
//           error={formik.errors[LOGIN_FORM_VALUES.PASSWORD]}
//         />
//       </InputsContainer>
//       <Button name="Login" type="submit"  />
//     </LoginFormContainer>
//   );
// }

// export default LoginForm;
