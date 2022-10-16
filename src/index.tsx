// import dependencies
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import provider to use redux state's in hole app
import { Provider as ReduxProvider } from "react-redux";

// import route component's
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ConfirmEmail from "./routes/ConfirmEmail";

// import routes middlewares
import CheckConnection from "./middlewares/CheckConnection";
import CheckAuth from "./middlewares/CheckAuth";

// import store -> created by redux/toolKit state manager
import { store } from "./redux/configureStore";

// import base style file's
import "./assets/styles/tailwind.scss";

// import theme dependencies
import theme from "./helpers/theme";
import { ThemeProvider } from "@mui/material/styles";
import CustomThemeProvider from "./middlewares/CustomThemeProvider";

// create app inside div.root
ReactDOM.createRoot(document.querySelector(".root") as HTMLElement).render(
  <ReduxProvider store={store}>
    <CustomThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<CheckConnection />}>
            <Route element={<CheckAuth />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="confirm-email" element={<ConfirmEmail />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  </ReduxProvider>
);

// // create app inside div.root
// ReactDOM.createRoot(document.querySelector(".root") as HTMLElement).render(
//   <Provider store={store}>
//     <ThemeProvider theme={theme}>
//       <BrowserRouter>
//         <Routes>
//           <Route element={<CheckConnection />}>
//             <Route element={<CheckAuth />}>
//               <Route path="/" element={<Dashboard />} />
//             </Route>
//             <Route path="register" element={<Register />} />
//             <Route path="confirm-email" element={<ConfirmEmail />} />
//             <Route path="login" element={<Login />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </ThemeProvider>
//   </Provider>
// );

// Route's :

//   - './' => access to the main dashboard of the messenger
//   - './login' => login to existing user
//   - './register' => register new user
//   - './confirm-email' => confirm the email of new registered user
