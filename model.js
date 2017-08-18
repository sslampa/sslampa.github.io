var skills = {
  'JavaScript <i class="devicon-javascript-plain colored"></i>': {
    "content": ["Node", "React", "ES6", "jQuery", "AJAX", "Webpack"]
  },
  'Ruby <i class="devicon-ruby-plain colored"></i>': {
    "content": ["Ruby on Rails", "Sinatra", "RSpec", "Capybara", "Filterrific", "Kaminari", "Gmaps4Rails"]
  },
  'Go <i class="devicon-go-plain colored"></i>': {
    "content": ["net/http", "net/http/httptest", "testing", "encoding/json", "database/sql"]
  },
  'Python <i class="devicon-python-plain colored"></i>': {
    "content": ["pandas", "matplotlib", "Seaborn", "Jupyter", "requests"]
  },
  'HTML <i class="devicon-html5-plain colored"></i>, CSS <i class="devicon-css3-plain colored"></i>': {
    "content": ["Bootstrap", "HAML", "Sass"]
  },
  'SQL <i class="devicon-postgresql-plain colored"></i> <i class="devicon-mysql-plain colored"></i>': {
    "content": ["PostgreSQL", "MySQL"]
  },
  'Environments <i class="devicon-windows8-original colored"></i> <i class="devicon-linux-plain colored"></i> <i class="devicon-apple-original colored"></i>': {
    "content": ["Windows", "Linux (Ubuntu/Fedora)", "Mac OS X"]
  }

};

var projects = {
  "RailsBridge San Diego Website": {
    "link": "http://www.railsbridgesd.org",
    "github": "https://github.com/railsbridgesd/railsbridgesd",
    "content": [
      "Sinatra-based single-page website that provides users with all the information needed to join RailsBridge, a free two-day workshop where women and underrepresented groups can learn how to build a web app with Ruby on Rails",
      "Set up AJAX requests for contact forms used in mailing list and e-mails sent to organizers",
      "Styled responsive website page using Bootstrap and SASS",
      "Added e-mail and form validation on the client side",
      "Communicated through Slack and logged issues on GitHub"
    ]
  },
  "VolunteerUP": {
    "link": "https://volunteerup.herokuapp.com/",
    "github":  "https://github.com/stephaniejue/VolunteerUP",
    "content": [
      "Generated a recommendation algorithm that recommends the top 3 events a user could join",
      "Constructed schema to create a many-to-many relationship for users, events, and orgs using multiple junction tables",
      "Populated database seed for test and development environments to increase efficiency in testing",
      "Tested the data models and UI using RSpec/Capybara and adhered to TDD/BDD processes",
      "Linked filterrific, kaminari, and gmaps4rails gems to show synchronized data in the filtered table and map"
    ]
  },
  "React-Rails": {
    "link": "https://anferne.herokuapp.com/",
    "github": "https://github.com/suzmas/react-rails",
    "content": [
      "Implemented a filter system using JavaScript/ES6 from data passed through changed props/states",
      "Created a Leaflet map that spawns markers based on filtered events/places shown in panels",
      "Designed UI using react-bootstrap and flexbox"
    ]
  },
  "Battleship": {
    "link": "battleship/index.html",
    "github": "https://github.com/sslampa/battleship",
    "content": [
      "Single-player Battleship game",
      "Generated game layout using HTML and CSS with flexbox",
      "jQuery used for game interaction and JavaScript for game mechanics"
    ]
  },
  "To-Do List": {
    "link": "to-do-list/index.html",
    "github": "https://github.com/sslampa/to-do-list",
    "content": [
      "Created a To-Do List App over a single weekend that adds, removes, and updates items",
      "Uses JavaScript to create a mock model",
      "Uses jQuery to create the controller that creates, updates, and deletes items"
    ]
  },
  "Twitch.tv": {
    "github": "https://github.com/sslampa/twitch-repo",
    "content": [
      "Gather and analyze data from Twitch.tv",
      "Retrieved data with Twitch.tv API and Python requests library to periodically add data to MySQL database",
      "Reported findings using the Python libraries, Seaborn and matplotlib, for visualization and Jupyter",
      "Explored and analyzed data using pandas library to better understand streaming habits developed by individuals and team streamers"
    ]
  }
};

var experience = {
  "Xander": {
    "content": [
      "Deliberated with team over UI design to find most efficient layout for a user to accept/reject a sample",
      "Implemented the modular design using uni.js, jQuery, and Bootstrap to make reusable components",
      "Interfaced with the COO to ensure all requirements were being met"
    ]
  },
  "UC Davis - Physics Department": {
    "content": [
      "Aided in cleaning and analyzing data derived from the Sloan Digital Sky Survey",
      "Extensive use of Interactive Data Language (IDL) to visualize and model data",
      "Lead collaboration with head researcher to ensure conclusions contained minimal errors to prevent future problems"
    ]
  }
};

var volunteer = {
  "RailsBridge": {
    "content": [
      "Helped create website using Sinatra, HAML, and SCSS",
      "Served as an organizer and TA for the RailsBridge class"
    ]
  },
  "UC Davis - Mathematics and Science Teaching": {
    "content": [
      "Collaborated with lead teaching assistant to encourage group discussion in the kinematics and mechanics of Physics subject material and general science",
      "Interfaced with professors and elementary teachers, consulting on how to better communicate Physics subject material to college peers and elementary demographic"
    ]
  }
}
