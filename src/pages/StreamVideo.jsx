import { getVideos } from "../utils/api";
import { useLoaderData, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactPlayer from "react-player";

// This function returns an array of stream data from the API.
export function loader({ params }) {
    return getVideos(params.id);
}

const StreamVideo = () => {
    const data = useLoaderData();
    console.log(data);

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
            <section className="stream-video-details">
                <div>{}</div>
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
            </section>
        </div>
    );
};

export default StreamVideo;
