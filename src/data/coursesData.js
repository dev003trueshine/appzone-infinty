const coursesData = [
  {
    id: 'flutter',
    category: 'Flutter',
    title: 'Flutter & iOS / Android App Development',
    description: 'Master Clean Architecture, State Management (BLoC/GetX), and REST API Integration for production apps.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    badge: 'Mobile App',
    duration: '10 Weeks Live',
    about: `Bring your app ideas to life with Flutter & Dart. In this hands-on course you'll learn how to design, build, and deploy cross-platform apps that look and feel native on Android and iOS. Through step-by-step lessons and real-world projects you'll master UI design, navigation, data handling, API integration, and deployment. By the end you'll deliver production-ready, responsive apps and a capstone project for your portfolio.`,
    highlights: [
      'Real-world projects and code reviews',
      'Hands-on practical sessions',
      'Flexible batch timings',
      'Small batches (2-3 students)',
      'Course completion certificate'
    ],
    syllabus: [
  {
    title: 'Getting Started & Environment Setup',
    items: [
      'Understanding cross-platform app development with Flutter',
      'Installing the Flutter SDK and Dart framework on your machine',
      'Setting up your development tools (VS Code / Android Studio)',
      'Running system health checks using flutter doctor',
      'Building and launching your very first "Hello World" app',
      'Exploring the project structure (pubspec.yaml, lib/, and asset folders)'
    ]
  },
  {
    title: 'Dart Programming Essentials',
    items: [
      'Core programming building blocks: variables, numbers, strings, and booleans',
      'Making decisions: logic with if/else conditions and switch cases',
      'Repeating actions: working with for and while loops',
      'Organizing data: Lists, Maps, and Sets',
      'Writing reusable code with functions and arrow syntax',
      'Safeguarding your app against crashes using Dart Null Safety',
      'Object-Oriented Programming (OOP) fundamentals (Classes, Objects, Constructors)',
      'Inheritance, abstract classes, and mixins',
      'Handling background tasks cleanly using async, await, and Futures',
      'Handling app errors gracefully with try/catch blocks'
    ]
  },
  {
    title: 'Flutter Basics & Layout Engineering',
    items: [
      'Understanding the "Everything is a Widget" philosophy',
      'The difference between static (Stateless) and interactive (Stateful) widgets',
      'Boosting productivity: Hot Reload vs. Hot Restart',
      'Building screen skeletons with MaterialApp and Scaffold',
      'Structuring screen layouts: Row, Column, Stack, Container, and Padding',
      'Displaying core UI elements: Text, Images, Icons, and Buttons',
      'Creating scrollable screens using SingleChildScrollView, ListView, and GridView',
      'Refactoring code into clean, reusable custom widgets'
    ]
  },
  {
    title: 'Screen Navigation & User Input',
    items: [
      'Moving between screens using Navigator (push, pop, and pushReplacement)',
      'Passing data from one screen to another',
      'Setting up top AppBars, side Drawers, and Bottom Navigation Bars',
      'Capturing user input with text fields and interactive buttons',
      'Validating input forms (e.g., login, registration, and email checks)',
      'Making static widgets interactive using GestureDetector and InkWell',
      'Customizing app branding: colors, global light/dark themes, and custom fonts',
      'Designing responsive layouts for different screen sizes with MediaQuery'
    ]
  },
  {
    title: 'Managing App State',
    items: [
      'What is "State" and why does your app need to track it?',
      'Managing quick, local screen updates using setState()',
      'Introduction to app-wide state management using Provider',
      'Scaling up: Managing state, routes, and dependencies using GetX',
      'Comparing state solutions to choose the best approach for your project'
    ]
  },
  {
    title: 'Working with APIs & Local Storage',
    items: [
      'Connecting your app to the internet: making HTTP REST API calls',
      'Converting raw internet JSON responses into Dart data models',
      'Saving simple user preferences locally using shared_preferences',
      'Introduction to offline relational database storage using SQLite',
      'Handling network drops, loading indicators, and API retry mechanisms'
    ]
  },
  {
    title: 'Animations, Performance & Debugging',
    items: [
      'Adding life to your UI with basic built-in animations',
      'Finding and installing community packages from pub.dev',
      'Performance optimization best practices (proper const usage and keys)',
      'Debugging app issues using IDE tools and Flutter DevTools'
    ]
  },
  {
    title: 'Publishing Your App',
    items: [
      'Understanding the difference between Debug and Production builds',
      'Testing your app on physical Android and iOS devices',
      'Generating signed release packages (APK & AAB for Android, IPA for iOS)',
      'Step-by-step walkthrough of submitting to the Google Play Store and Apple App Store',
      'Managing app versions and release updates'
    ]
  },
  {
    title: 'Practical Capstone Project',
    items: [
      'Planning, architecting, and building a complete real-world mobile app',
      'Structuring clean code architecture (separating UI, business logic, and services)',
      'Managing your code history using Git & GitHub',
      'Final app review, testing, and deployment prep'
    ]
  }
]
  },
  {
    id: 'python',
    category: 'Python',
    title: 'Python Backend & API Engineering',
    description: 'Learn Core Python, FastAPI, Django, Object-Oriented Programming, and Scalable Database Architecture.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    badge: 'Backend & AI',
    duration: '10 Weeks Live',
    about: `Kickstart your programming journey with Python. This beginner-to-intermediate course helps you learn Python from scratch and progress to building practical applications. You will master core Python, OOP, data handling with NumPy/Pandas, API interaction, and backend frameworks like FastAPI and Django. The course includes hands-on assignments and a capstone project.`,
    highlights: [
      'Real-world examples and mini-projects',
      'Hands-on practical sessions',
      'Small batch mentorship and career guidance'
    ],
    syllabus: [
  {
    title: 'Essential Foundations & Environment Setup',
    items: [
      'Welcome, course overview, and developer tool check',
      'Understanding Python’s role in modern tech, Web, and AI',
      'Installing VS Code, Anaconda, Jupyter Notebooks, and Google Colab',
      'Configuring Python virtual environments for isolated projects',
      'Writing and executing your first Python scripts',
      'Working with variables, data types, and smooth type conversions',
      'Using arithmetic, comparison, and logical operators',
      'Controlling code flow: Making decisions with if/else and loops',
      'Writing reusable functions (parameters, return values, and lambda functions)',
      'Safeguarding apps against crashes using try-except error handling',
      'Writing clean code following PEP 8 guidelines and commenting standards'
    ]
  },
  {
    title: 'Data Structures & Smart Memory Management',
    items: [
      'Mastering collection types: Lists, Tuples, Sets, and Dictionaries',
      'Navigating data: Indexing, slicing, and understanding mutability',
      'Accelerating data operations with List & Dictionary Comprehensions',
      'Creating memory-efficient Data Generators for large datasets',
      'Filtering, sorting, and merging complex nested collections',
      'Understanding shallow vs. deep object copying'
    ]
  },
  {
    title: 'Object-Oriented Programming (OOP) & Clean Code',
    items: [
      'Advanced function concepts: Closures, recursion, and Decorators',
      'Introduction to OOP: Understanding Classes and Objects',
      'Building blueprints: Constructors (__init__) and instance attributes',
      'Core OOP pillars: Inheritance, Encapsulation, and Polymorphism',
      'Customizing object behavior using Magic/Dunder methods (__str__, __repr__)',
      'Practical class design workshop: Building Employee & Bank Account models'
    ]
  },
  {
    title: 'File Systems, OS & Text Processing',
    items: [
      'Reading and writing files safely using context managers (with open)',
      'Managing files, folders, and system paths with os and pathlib modules',
      'Processing structured file formats: Working with CSV and JSON data',
      'Pattern matching and data cleaning using Regular Expressions (Regex)',
      'Parsing structured log files and managing JSON app configurations'
    ]
  },
  {
    title: 'Data Acquisition: Web Scraping & APIs',
    items: [
      'Understanding web requests and consuming public REST APIs (Requests library)',
      'Parsing HTML and scraping web content using BeautifulSoup',
      'Extracting and normalizing API JSON responses into readable data',
      'Saving live web/API data into CSV files and database feeds',
      'Automating repetitive web data collection tasks'
    ]
  },
  {
    title: 'High-Performance Computing with NumPy',
    items: [
      'Introduction to Numerical Python: NumPy Arrays vs. Standard Lists',
      'Creating arrays: array, arange, linspace, zeros, and ones',
      'Fast math operations: Array broadcasting, vectorization, and statistics',
      'Reshaping, indexing, and slicing multi-dimensional arrays',
      'Generating random numbers and simulating datasets'
    ]
  },
  {
    title: 'Data Wrangling & Analysis with Pandas',
    items: [
      'Exploring Pandas Data Structures: Series and DataFrames',
      'Loading data seamlessly from CSV, Excel, and JSON files',
      'Cleaning messy data: Handling missing values and duplicate records',
      'Transforming datasets: Renaming, dropping, and creating columns',
      'Group-by operations, aggregations, merging, and dataset concatenation',
      'Hands-on workshop: Cleaning and preparing real-world business datasets'
    ]
  },
  {
    title: 'Data Visualization & Storytelling',
    items: [
      'Building foundational plots with Matplotlib (Line, Bar, Scatter, Pie)',
      'Designing attractive statistical charts with Seaborn (Heatmaps, Boxplots)',
      'Customizing graphics: Titles, color palettes, legends, and layouts',
      'Creating multi-chart dashboards using subplots',
      'Exporting high-resolution charts for business presentations'
    ]
  },
  {
    title: 'Mini Project Workshop',
    items: [
      'End-to-end project workflow: From raw data to actionable insights',
      'Data extraction using live REST APIs or web scraping',
      'Data cleaning, filtering, and statistical analysis with Pandas & NumPy',
      'Designing interactive visual summaries with Matplotlib & Seaborn',
      'Packaging code and presenting a final data summary report'
    ]
  }
]
  },
  {
    id: 'html-css',
    category: 'HTML & CSS',
    title: 'Responsive UI/UX & Web Design Fundamentals',
    description: 'Master semantic HTML5, modern CSS3 (Flexbox/Grid), SCSS, and responsive design systems from scratch.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    badge: 'Design & Web',
    duration: '4 Weeks Live',
    about: `Learn to build beautiful, accessible and responsive websites from scratch. This course covers semantic HTML, modern CSS layout techniques (Flexbox & Grid), SCSS, responsive design systems, and basic accessibility and performance optimizations. You'll build real UIs and a portfolio-ready project.`,
    highlights: [
      'Hands-on UI projects',
      'SCSS and component-driven styles',
      'Accessibility and responsive best practices'
    ],
    syllabus: [
  {
    title: 'Module 1: Web Development Basics & HTML5 Foundations',
    items: [
      'Understanding web architecture: Browsers, HTTP, and developer tools',
      'Setting up your coding environment (VS Code, JSFiddle, and live servers)',
      'Building proper HTML page structure (DOCTYPE, html, head, and body)',
      'Working with metadata, document titles, and character sets',
      'Formatting text: Headings, paragraphs, preformatted text, and entities',
      'Organizing content: Divs, spans, and HTML5 semantic tags (header, nav, section, footer)',
      'Adding hyperlinks: Anchors, target attributes, and bookmark navigation',
      'Embedding media: Working with images, SVG graphics, and iframes',
      'Structuring tabular data using HTML tables'
    ]
  },
  {
    title: 'Module 2: HTML5 Forms & User Input',
    items: [
      'Creating interactive forms and understanding form submission methods',
      'Working with standard form controls: Text inputs, textareas, and buttons',
      'Exploring HTML5 special inputs: Email, numbers, dates, times, and colors',
      'Enhancing form usability: Fieldsets, legends, labels, and placeholders',
      'Hands-on Lab: Building a validated contact and sign-up form'
    ]
  },
  {
    title: 'Module 3: CSS Fundamentals & Layouts',
    items: [
      'Introduction to CSS: Inline, internal style tags, and external stylesheets',
      'Targeting elements using CSS selectors: Element tags, classes, and IDs',
      'Mastering color systems: Hex, RGB, HSL, and background properties',
      'Typography & Styling: Custom Google Fonts, text alignment, and font families',
      'Understanding the CSS Box Model: Margin, border, padding, and content sizing',
      'Controlling element display (block, inline, inline-block) and visibility',
      'Positioning elements: Static, relative, absolute, fixed, and sticky',
      'Building layout systems with CSS Floats, Flexbox, and CSS Grid',
      'Intro to modern CSS frameworks (Bootstrap & Tailwind CSS)'
    ]
  },
  {
    title: 'Module 4: Advanced CSS & Interactive Styling',
    items: [
      'Styling navigation menus, lists, tables, and hyperlinks',
      'Adding dynamic effects using CSS Pseudo-Classes (:hover, :focus, :active)',
      'Managing layout overflows, max-width, and element alignment',
      'Designing mobile-first, responsive web pages with Media Queries',
      'Hands-on Lab: Creating styled image grids and dynamic UI popups'
    ]
  },
  {
    title: 'Module 5: Core JavaScript Essentials',
    items: [
      'Introduction to JavaScript, the console, and client-side scripting',
      'Variables and data types: Declaring with var, let, and const (ES6+)',
      'Performing computations with operators and assignment expressions',
      'Writing reusable code blocks with Functions, arguments, and return values',
      'Making logical decisions with if/else conditions and switch statements',
      'Automating tasks with loops: for, while, and do-while',
      'Working with native String methods and formatting'
    ]
  },
  {
    title: 'Module 6: Data Structures & The DOM API',
    items: [
      'Organizing data with JavaScript Objects, properties, and prototypes',
      'Working with JavaScript Arrays and key Array Methods (map, filter, forEach)',
      'Understanding the Document Object Model (DOM) tree structure',
      'Selecting page elements dynamically (querySelector & querySelectorAll)',
      'Manipulating HTML content, attributes, styles, and classes on the fly',
      'Handling interactive DOM events: Mouse clicks, keypresses, and form inputs',
      'Dynamically creating, appending, and removing DOM elements'
    ]
  },
  {
    title: 'Module 7: Asynchronous JavaScript, JSON & APIs',
    items: [
      'Understanding JavaScript Objects vs JSON format',
      'Converting data using JSON.parse() and JSON.stringify()',
      'Storing data in the browser with Local Storage and Session Storage',
      'Fetching live data from external REST APIs using the Fetch API',
      'Handling network asynchronous operations, promises, and error handling',
      'Introduction to DOM utility libraries (e.g., jQuery basics & AJAX calls)'
    ]
  },
  {
    title: 'Module 8: HTML5 Canvas, Modals & Capstone Project',
    items: [
      'Introduction to HTML5 Canvas: Drawing shapes, lines, and basic animations',
      'Building interactive UI components: Modal popups and lazy image loaders',
      'Roleplay Project: Web Developer at ABC Consultant Placement Firm',
      'Designing and developing a single-page client portfolio website',
      'Integrating HTML structure, CSS layout styling, and JavaScript form validation',
      'Debugging scripts using Browser Developer Tools',
      'Deploying and packaging your static web application live online'
    ]
  }
]
  },
  {
    id: 'qa-testing',
    category: 'QA & Testing',
    title: 'Software Testing & QA Engineering',
    description: 'Manual & Automated Testing, API Testing with Postman, Test Case Writing, and Bug Tracking.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    badge: 'Quality Assurance',
    duration: '6 Weeks Live',
    about: `Become a proficient QA engineer by learning manual and automated testing techniques. This course covers test design, API testing, automated UI testing with popular tools, and test management workflows used in real teams. You will practice writing test cases, creating automated suites, and reporting bugs effectively.`,
    highlights: [
      'Hands-on test case writing and execution',
      'API testing with Postman and automation basics',
      'Introduction to CI for automated tests'
    ],
    syllabus: [
  {
    title: 'Module 1: Introduction to Software Testing',
    items: [
      'What is Software Testing and why is Quality Assurance (QA) important?',
      'Understanding the Software Development Life Cycle (SDLC)',
      'Understanding the Software Testing Life Cycle (STLC)',
      'Differences between Verification and Validation',
      'Types of testing: Functional vs. Non-Functional testing',
      'Understanding Black Box, White Box, and Grey Box testing basics'
    ]
  },
  {
    title: 'Module 2: Software Testing Methodologies',
    items: [
      'Overview of Waterfall model vs. Agile Scrum methodology',
      'Roles and responsibilities of a Manual QA Tester in a team',
      'Understanding Sprint planning, daily standups, and retrospective meetings',
      'Static testing vs. Dynamic testing techniques'
    ]
  },
  {
    title: 'Module 3: Test Requirements & Test Planning',
    items: [
      'Analyzing Business Requirement Documents (BRD) and User Stories',
      'Creating Test Plans: Scope, strategy, and testing schedules',
      'Identifying Test Scenarios from user requirements',
      'Understanding Requirement Traceability Matrix (RTM)'
    ]
  },
  {
    title: 'Module 4: Test Case Design & Techniques',
    items: [
      'How to write clear, effective, and detailed Test Cases',
      'Test Case Design Techniques:',
      '  • Boundary Value Analysis (BVA)',
      '  • Equivalence Partitioning (EP)',
      '  • Decision Table Testing',
      '  • State Transition Testing',
      'Writing test checklists and executing test suites manually'
    ]
  },
  {
    title: 'Module 5: Defect Management & Bug Tracking',
    items: [
      'Understanding the Defect Life Cycle (Bug Life Cycle)',
      'How to log and report bugs with clear reproduction steps',
      'Defining Bug Priority vs. Bug Severity',
      'Hands-on bug tracking using tools like Jira or Trello',
      'Re-testing bug fixes and performing Regression Testing'
    ]
  },
  {
    title: 'Module 6: Manual Testing Types in Practice',
    items: [
      'Smoke Testing vs. Sanity Testing',
      'Regression Testing and Re-testing',
      'Exploratory Testing and Ad-hoc Testing techniques',
      'User Acceptance Testing (UAT) basics',
      'Cross-Browser and Cross-Device testing for web and mobile apps'
    ]
  },
  {
    title: 'Module 7: Beginner API Testing with Postman',
    items: [
      'Understanding Client-Server architecture and HTTP protocols',
      'Introduction to REST APIs: GET, POST, PUT, and DELETE methods',
      'Understanding HTTP status codes (200 OK, 400 Bad Request, 404 Not Found, 500 Error)',
      'Testing API endpoints manually using Postman',
      'Validating API requests, headers, and JSON responses'
    ]
  },
  {
    title: 'Module 8: Practical Hands-On Project',
    items: [
      'Reviewing real-world web/mobile app requirements',
      'Drafting a complete Test Plan and writing test cases',
      'Executing test cases and reporting defects in Jira',
      'Preparing a final Test Execution & Bug Summary Report'
    ]
  }
]
  }
];

export default coursesData;
