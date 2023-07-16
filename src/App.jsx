import "./App.css";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Creators, { loader as streamLoader } from "./pages/Creators";
// import TwitchStreams from './pages/TwitchStreams';
import NotFound from "./pages/Notfound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<Creators />} loader={streamLoader} />
            <Route path="stream/:id" />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
