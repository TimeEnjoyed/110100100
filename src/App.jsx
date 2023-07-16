import "./App.css";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import TwitchStreams, { loader as streamLoader } from "./pages/TwitchStreams";
import StreamVideo, { loader as StreamVideoLoader } from "./pages/StreamVideo";
import NotFound from "./pages/Notfound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<TwitchStreams />} loader={streamLoader} />
            <Route
                path="stream/:id"
                loader={StreamVideoLoader}
                element={<StreamVideo />}
            />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
