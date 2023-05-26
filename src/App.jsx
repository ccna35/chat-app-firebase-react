import ChatDashboard from "./pages/ChatDashboard";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import NoMatch from "./pages/NoMatch";
import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App() {
  return (
    <Routes>
      <Route path="signup" element={<SignUpPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<ChatDashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
