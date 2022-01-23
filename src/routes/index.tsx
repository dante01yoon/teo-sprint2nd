import {BrowserRouter, Route, Routes } from "react-router-dom"
import { StackPage } from "../pages"
import CompanyIdPage from "../pages/company/CompanyIdPage"

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/company" element={<StackPage/>}>
          <Route path=":id" element={<CompanyIdPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

