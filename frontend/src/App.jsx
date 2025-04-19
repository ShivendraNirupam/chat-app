import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Settings from "./pages/Settings.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

import { useThemeStore } from "./store/useThemeStore.js"

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";
import { Loader, NavigationOff } from "lucide-react"

import { Toaster } from "react-hot-toast";

const App = () => {

  const {authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  console.log(onlineUsers)
  const { theme } = useThemeStore();
  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  console.log({ authUser });

  if(isCheckingAuth && !authUser) {
    return (
      <div className="h-screen flex flex-col justify-center items-center space-y-2">
      <Loader className="size-6 animate-spin text-gray-500" />
      <p className="text-sm text-gray-600">Loading your experience...</p>
      </div>
    );
  }


  return (
    <div data-theme = {theme} className="overflow-y">
      
      <Navbar />

      <Routes>
        <Route path ="/" element={authUser ? <HomePage /> : <Navigate to="/login" /> }/>
        <Route path ="/signup" element={!authUser ? <SignupPage /> : < Navigate to="/" />}/>
        <Route path ="/login" element={!authUser ? <LoginPage /> : < Navigate to="/" />}/>
        <Route path ="/settings" element={<Settings />}/>
        <Route path ="/profile" element={authUser ? <ProfilePage/> : <Navigate to="/login" />}/>
      </Routes>

    <Toaster />
    </div>
  )   
}
export default App