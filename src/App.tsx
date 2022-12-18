import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import LogoutForm from "./components/LogoutForm";
import Navbar from "./components/Navbar";
import MailForm from "./components/MailForm";

function App() {
  const token = localStorage.getItem("access_token");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={!token ? <LoginForm /> : <Dashboard />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mail" element={<MailForm />} />
        <Route path="/logout" element={<LogoutForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
