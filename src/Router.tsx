import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./Home";
import { ErrorPage } from "./ErrorPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />}/>
      </Route>
    </Routes>
  )
}