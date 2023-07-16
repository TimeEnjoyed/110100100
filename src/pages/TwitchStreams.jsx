import "./TwitchStreams.css";
import image from "../assets/image-placeholder.png";

function TwitchStreams() {
    return (
        <div className="container">
            <section className="stream-section">
                <figure className="thumbnail">
                    <img src={image} alt="" />
                    <figcaption>Twitch</figcaption>
                </figure>
                <section className="stream-details">
                    <div className="top">
                        <h2 className="type">Live</h2>
                        <div className="view-count">View on Google Maps</div>
                    </div>
                    <h1 className="title">Mount Fuji</h1>
                    <div className="started-at">2023-june</div>
                    <p className="user">User</p>
                </section>
            </section>
        </div>
    );
}

export default TwitchStreams;
