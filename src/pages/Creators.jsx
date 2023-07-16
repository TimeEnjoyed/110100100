import { useLoaderData, Link } from "react-router-dom";
import image from "../assets/image-placeholder.png";
import imageProfile from "../assets/avatar-placeholder.png";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import TodayIcon from "@mui/icons-material/Today";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";

import { getStreams } from "../utils/api";

export function loader() {
    return getStreams();
}

const Creators = () => {
    const streamData = useLoaderData();

    const formatDate = (time) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = new Date(time).toLocaleDateString(
            "en-US",
            options
        );
        return formattedDate;
    };

    const formatTime = (time) => {
        const formattedTime = time.split("T")[1].replace("Z", "");
        return formattedTime;
    };

    const streamDataElement = streamData.map((data, index) => (
        <div className="container" key={index}>
            <section className="stream-section">
                <figure className="thumbnail">
                    <img src={image} alt="" />
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
                    </div>
                    <h1 className="title">{data.title}</h1>
                    <div className="game-name">
                        <h2>Activity:</h2>
                        <h4>{data.game_name}</h4>
                    </div>
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
                    <Link className="stream-video" to={`stream/${index}`}>
                        <VisibilityOffIcon />
                        Click to view full story
                    </Link>
                </section>
            </section>
        </div>
    ));

    return (
        <>
            <div className="card-containter">{streamDataElement}</div>
        </>
    );
};

export default Creators;
