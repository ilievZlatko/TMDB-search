## TMDB-search:

TMDB-search is an app that is using The movieDB api for searching trough list of movies by title or description.
Simply type the title of the movie you are searching in the input field in the header
and wait a couple of milliseconds for your results.

## Running the App:

### `npm install`
It will install all the dependencies you need.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### !!!NOTE that if you run tests on Linux you might face an error saying that jest is trying to watch too many files.

### solution: 
Type the following command in your terminal
###`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

## Dependencies
- moment.js - for working with dates and times (https://momentjs.com)
- lodash.js - providing really great collection of methods for working with Arrays and Objects. (https://lodash.com/)
