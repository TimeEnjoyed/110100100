import { Outlet, Link } from "react-router-dom";
// import image from "../assets/image-placeholder.png";

const Layout = () => {
    return (
        <div className="app-container">
            <header>
                <Link to=".">TwitchTube</Link>
            </header>
            {/* <section className="container-text">
                <div>Discover Popular Creators on Twitch.</div>
                <img src={image} alt="" />
            </section> */}
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
