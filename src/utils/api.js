export async function getStreams() {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const oauthToken = import.meta.env.VITE_OAUTH_TOKEN;

    const apiUrl = `https://api.twitch.tv/helix/streams?first=20`;

    const response = await fetch(apiUrl, {
        headers: {
            "Client-ID": clientId,
            Authorization: `Bearer ${oauthToken}`,
        },
    });

    if (!response.ok) {
        throw new Error(
            `Failed to fetch streams: ${response.status} ${response.statusText}`
        );
    }

    const data = await response.json();
    return data.data;
}

export async function getVideos(id) {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const oauthToken = import.meta.env.VITE_OAUTH_TOKEN;
    const apiUrl = `https://api.twitch.tv/helix/videos?user_id=${id}`;

    const response = await fetch(apiUrl, {
        headers: {
            "Client-ID": clientId,
            Authorization: `Bearer ${oauthToken}`,
        },
    });

    if (!response.ok) {
        throw new Error(
            `Failed to fetch videos: ${response.status} ${response.statusText}`
        );
    }

    const data = await response.json();
    // Return the first video.
    return data.data[0];
}
