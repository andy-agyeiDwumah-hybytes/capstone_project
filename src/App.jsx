// React
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router"
import { useState, useEffect } from "react"
// Context
import { UserContext } from "../src/context/UserContext"
// Constants
import { SESSIONKEY, LOCALSTORAGEKEY } from "./constants/Constants"
// Components
import "./components/layout/Layout"
import Layout from "./components/layout/Layout"
import Error from "./components/error/Error"
import PrivateRoutes from "./components/privateRoutes/PrivateRoutes"
// Pages
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import SearchWord from "./pages/searchWord/SearchWord"
import Contact from "./pages/contact/Contact"
import UserDetails from "./pages/userDetails/UserDetails"
import AuthForm from "./pages/authForm/AuthForm"

export default function App() {
  const [user, setUser] = useState(null)

  // Check login status on page load
  useEffect(() => {
    const currentUser = JSON.parse(sessionStorage.getItem(SESSIONKEY))
    if (currentUser?.loggedIn) {
      setUser(currentUser)
    }
  }, [])

  const handleLogin = (userName, userPassword) => {
    // Get all users, if any
    const users = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)) || []
    const user = users.find(
      user => user.name === userName && user.password === userPassword
    )

    // Check if user exists
    if (!user) {
      alert("Invalid username or password.")
      return false
    }

    setUser(user)
    // Save login status to sessionStorage
    sessionStorage.setItem(
      SESSIONKEY,
      JSON.stringify({ name: userName, loggedIn: true })
    )
    return true
  }

  const handleSignUp = (userName, userEmail, userPassword) => {
    const users = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)) || []
    // Check if username already exists
    const userExists = users.some(user => user.name === userName)

    if (userExists) {
      alert("Username already exists. Please choose a different one.")
      return false
    }

    // Create new user
    const newUser = {
      name: userName,
      email: userEmail,
      password: userPassword,
    }

    // Save user to local storage
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify([...users, newUser]))
    setUser(newUser)
    // Save login status to sessionStorage
    sessionStorage.setItem(
      SESSIONKEY,
      JSON.stringify({ name: userName, loggedIn: true })
    )
    return true
  }

  const handleLogOut = userWantsToDeleteAccount => {
    // Clear login status
    sessionStorage.removeItem(SESSIONKEY)
    setUser(null)
    if (userWantsToDeleteAccount) {
      alert(`Logged out succesfully. Account deleted.`)
    } else {
      alert("Logged out succesfully.")
    }
  }

  const handleRemoveUserFromLocalStorage = userName => {
    const users = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY))
    // Remove user from users
    const updatedUsers = users.filter(user => user.name !== userName)

    // And local storage
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify([...updatedUsers]))
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={<AuthForm />}
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route element={<PrivateRoutes />}>
          <Route path="search" element={<SearchWord />} />
          <Route
            path="userdetails"
            element={<UserDetails />}
          />
        </Route>
      </Route>
    )
  )

  const authContext = {
    user,
    handleLogin,
    handleSignUp,
    handleLogOut,
    handleRemoveUserFromLocalStorage
  }

  return (
    <UserContext value={authContext}>
      <RouterProvider router={router} />
    </UserContext>
  )
}
