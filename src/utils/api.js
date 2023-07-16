export async function getStreams() {
    const clientId = "kyr08hdj7h81pioe0yb8yj44lb5pdz";
    const oauth_token = "2mcv6m82mc3biv287x62hf6993u5jy";
    const apiUrl = `https://api.twitch.tv/helix/streams?first=100`;

    const response = await fetch(apiUrl, {
        headers: {
            "Client-ID": clientId,
            Authorization: `Bearer ${oauth_token}`,
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


