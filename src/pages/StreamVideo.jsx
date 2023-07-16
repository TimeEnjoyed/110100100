import { getVideos } from "../utils/api";
import { useLoaderData, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import fallBackImage from "../assets/image-placeholder.png";
import ReactPlayer from "react-player";

export function loader({ params }) {
    return getVideos(params.id);
}

const StreamVideo = () => {
    const data = useLoaderData();
    console.log(data);

    const formatDate = (time) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(time).toLocaleDateString("en-US", options);
    };

    const formatTime = (time) => {
        return time.split("T")[1].replace("Z", "");
    };
    return (
        <div className="stream-video-container">
            <Button
                variant="outlined"
                className="animate__animated animate__fadeInLeft"
            >
                <Link
                    to=".."
                    className="back-button animate__animated animate__fadeInLeft"
                >
                    <ArrowBackIcon />
                    <span>Back to all Streams</span>
                </Link>
            </Button>
            <div className="stream-video-details">
                <div className="title">{data.title}</div>
                <div className="video">
                    <ReactPlayer
                        className="react-player"
                        url={data.url}
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>

                <div className="description">{data.description}</div>
            </div>
        </div>
    );
};

export default StreamVideo;
