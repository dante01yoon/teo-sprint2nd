import {BrowserRouter, Route, Routes } from "react-router-dom"
import { StackPage } from "../pages"

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/company" element={<StackPage/>}>
          {/* <Route index element={}/> */}
          <Route path=":id"/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

