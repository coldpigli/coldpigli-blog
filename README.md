# How to run this in your machine locally ?

Clone/Download this project locally and follow the below steps.


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The site uses data from a json file which is run via a Json server to mock API responses.
Use the following commands to run a Json Server locally 

### `npm install -g json-server`
### `json-server --watch data/db.json --port 8000`

The mock json file is kept within the data folder in my project.
Please change path/port accordingly.

The project currently allows only three authors to add a new blogpost. This was done just to get a hands-on experience with selection lists.



