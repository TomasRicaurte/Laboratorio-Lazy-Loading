import React, { Suspense, lazy } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

export function App() {
  const HomePage = React.lazy(() => import("./pages/HomePage"));

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            index
            element={
              <Suspense fallback="loading...">
                <HomePage />
              </Suspense>
            }
          />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
