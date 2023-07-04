import { Routes, Route, useLocation } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./Home";
import { ErrorPage } from "./ErrorPage";
import { SingleProject } from "./Projects/SingleProject";
import { useEffect } from "react";

export function Router() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<SingleProject />} />
      </Route>
    </Routes>
  );
}
