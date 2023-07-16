import './App.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Creators from './pages/Creators';
// import NotFound from "./pages/Notfound";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route element={<Layout />}>
          <Route
              path="/"
              element={<Creators />}
          />
          <Route
              path="video/:id"
          />
          {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
