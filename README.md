# TwitchTube

TwitchTube is a web application that allows users to discover and watch Twitch streams. It provides a user-friendly interface to explore streams related to gaming, technology, programming, and more.

## Tech Stack

TwitchTube is built using the following technologies:

- Front-end:
  - React.js: JavaScript library for building user interfaces.
  - React Router: Library for handling routing within the React application.
  - Material-UI: UI component library for creating visually appealing interfaces.
  - CSS: Styling and layout of the application.

- Back-end:
  - Twitch API: API provided by Twitch for accessing stream data.

## Installation

To run TwitchTube locally on your machine, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/TwitchTube.git
   ```

2. Navigate to the project directory:

   ```shell
   cd TwitchTube
   ```

3. Install dependencies using your preferred package manager. Here, we'll use npm:

   ```shell
   npm install
   ```

4. Obtain Twitch API Credentials:

- Visit the [Twitch Developer Dashboard](https://dev.twitch.tv/console) and sign in with your Twitch account.
- Create a new application to obtain your Twitch API client ID and OAuth token. Provide a name for your application and set the appropriate OAuth redirect URLs.
- Once your application is created, you can find your Twitch API client ID on the application's details page.
- To obtain the OAuth token, navigate to the "Applications" section in the Twitch Developer Dashboard and click on your application. Then, go to the "Manage" tab and click "New Secret" to generate a new token.

5. Rename the .env.example file to .env and update the environment variables with your Twitch API credentials:

   ```shell
   cp .env.example .env
   ```

Open the .env file and replace the placeholders with your actual Twitch API client ID and OAuth token.

6. Start the development server:

   ```shell
   npm start
   ```

The application will be available at <http://localhost:3000> in your browser.

## Usage

- Watch a stream: Click on the "Click to view" button to watch a specific stream.
- Back to all streams: Use the "Back to all Streams" button to return to the list of all streams.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.
