import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import routes from "tempo-routes";
import MainLayout from "./components/layout/MainLayout";

// Lazy load components
const Home = lazy(() => import("./components/home"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Subscription = lazy(
  () => import("./components/subscription/Subscription"),
);
const Search = lazy(() => import("./components/search/Search"));
const Profile = lazy(() => import("./components/profile/Profile"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/login" element={<Home />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="search" element={<Search />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
