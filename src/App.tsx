import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter/AppRoute"

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}