var skills = {
  'Ruby <i class="devicon-ruby-plain colored"></i>': {
    "content": ["Ruby on Rails", "Sinatra", "RSpec", "Capybara", "Filterrific", "Kaminari", "Gmaps4Rails"]
  },
  'Python <i class="devicon-python-plain colored"></i>': {
    "content": ["pandas", "matplotlib", "Seaborn", "Jupyter", "requests"]
  },
  'HTML <i class="devicon-html5-plain colored"></i>, CSS <i class="devicon-css3-plain colored"></i>, JavaScript <i class="devicon-javascript-plain colored"></i>': {
    "content": ["jQuery", "AJAX", "Bootstrap", "HAML", "Sass"]
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
      "Created AJAX calls that added users to mailing list and e-mails sent to organizers",
      "Added e-mail and form validation on the client side",
      "Styled navbar using Bootstrap and Sass"
    ]
  },
  "VolunteerUP": {
    "link": "https://volunteerup.herokuapp.com/",
    "github":  "https://github.com/stephaniejue/VolunteerUP",
    "content": [
      "Rails-based multi-page website that matches volunteer candidates with organizations in need of assistance",
      "Linked Filterrific, Kaminari, and Gmaps4Rails gems to sync the information in the filtered table and map",
      "Setup the schema to create a many-to-many relationship for users, events, and organizations using junction tables",
      "Designed a recommendation algorithm to recommend the top 3 events a user could join",
      "Tested the data models and UI using RSpec and Capybara to ensure any change to the code did not affect other areas"
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
      "To-Do List App that adds, removes, and updates items",
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
