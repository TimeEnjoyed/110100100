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
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            {/* This route loads the TwitchStreams component. */}
            <Route path="/" element={<TwitchStreams />} loader={streamLoader} />
            {/* This route loads the StreamVideo component. */}
            <Route
                path="stream/:id"
                loader={StreamVideoLoader}
                element={<StreamVideo />}
            />
            {/* This route is a catch-all route that loads the NotFound component. */}
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
