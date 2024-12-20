// React
import { useContext } from "react"
import { Navigate, Outlet } from "react-router"
// Context
import { UserContext } from "../../context/UserContext"

export default function PrivateRoutes() {
  const { user } = useContext(UserContext)
  // Show protected routes if user is logged in.
  // Else, navigate back to log in form
  return user ? <Outlet /> : <Navigate to="login" />
}
