import { useLoaderData, Link } from "react-router-dom";
import fallBackImage from "../assets/image-placeholder.png";
import imageProfile from "../assets/avatar-placeholder.png";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import TodayIcon from "@mui/icons-material/Today";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import { getStreams } from "../utils/api";

import "animate.css";

// This function returns an array of stream data from the API.
export function loader() {
    return getStreams();
}

const TwitchStreams = () => {
    // Stream data array
    const streamData = useLoaderData();

    // This function formats the date string into a human-readable format.
    const formatDate = (time) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(time).toLocaleDateString("en-US", options);
    };

    // This function formats the time string into a human-readable format.
    const formatTime = (time) => {
        return time.split("T")[1].replace("Z", "");
    };

    // Creates a stream data element from the stream data array.
    const streamDataElement = streamData.map((data, index) => {
        const thumbnailUrl = data.thumbnail_url;
        const imageSize = "640x360";
        const imageUrl = thumbnailUrl.replace("{width}x{height}", imageSize);

        return (
            <div className="container" key={index}>
                <section
                    className={`stream-section animate__animated animate__fadeInLeftBig delay-${index}`}
                >
                    <figure className="thumbnail">
                        <img src={imageUrl || fallBackImage} alt="" />
                        <figcaption>Twitch</figcaption>
                    </figure>
                    <section className="stream-details">
                        <div className="top">
                            <h2 className="type">
                                <LiveTvOutlinedIcon />
                                {data.type}
                            </h2>
                            <div className="view-count">
                                <RemoveRedEyeOutlinedIcon />
                                {data.viewer_count}
                            </div>
                            <div className="game-name">
                                <CategoryIcon />
                                <h4>{data.game_name}</h4>
                            </div>
                        </div>
                        <h1 className="title">{data.title}</h1>
                        <div className="started-at">
                            {data.started_at && (
                                <section>
                                    <h5 className="date">
                                        <TodayIcon />
                                        {formatDate(data.started_at)}
                                    </h5>
                                    <h5 className="time">
                                        {" - "}
                                        <AccessTimeFilledIcon />
                                        {formatTime(data.started_at)}
                                        {" UTC "}
                                    </h5>
                                </section>
                            )}
                        </div>
                        <div className="user-details">
                            <img src={imageProfile} alt="" />
                            <p className="user">{data.user_name}</p>
                        </div>
                        <Link
                            className="stream-video"
                            to={`stream/${data.user_id}`}
                        >
                            <VisibilityOffIcon />
                            Click to view
                        </Link>
                    </section>
                </section>
            </div>
        );
    });

    return (
        <>
            <div className="card-containter">{streamDataElement}</div>
        </>
    );
};

export default TwitchStreams;
