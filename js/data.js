var data = {
  "about": {
    "intro": "Hello! I am Ankush Jain, a machine learning engineer and a full-stack developer. My experience has prepared me to apply my skills for solving real-world problems. And my on-going study in the master's program at <a href=\"https://engineering.nyu.edu/academics/programs/computer-science-ms\" class=\"text-primary\">New York University</a> has further equipped me with all the essential tools for my niche.<br><br>Previously, I have worked as a Software Engineer at <a href=\"https://www.infosys.com/services/validation-solutions/service-offerings/machine-learning-qa.html\" class=\"text-primary\">Infosys</a>. I worked on a variety of machine learning solutions for Software Quality Assurance & Testing. Presently, I am working part-time with <a href=\" https://vyorius.com/\" class=\"text-primary\">Vyorius</a> to deploy their product-line on AWS.<br><br>Here are my key skills in Machine Learning and Full-Stack development.",
    "ml": "\
        <li>Python (NumPy, Pandas, Scikit-Learn etc.) / R</li>\
        <li>PyTorch / Keras</li>\
        <li>Spark / Hadoop</li>\
        <li>Natural Language Processing</li>\
        <li>Predictive Modelling</li>\
        <li>Unsupervised Learning </li>\
        <li>Deep Learning</li>\
    ",
    "fs": "\
        <li>Python / C / C++ / Java</li>\
        <li>HTML / CSS / JS</li>\
        <li>SQL / MongoDB / DynamoDB</li>\
        <li>Node.js / Flask / FastAPI</li>\
        <li>React / JQuery / AngularJS</li>\
        <li>Amazon Web Services (EC2, Lambda, Cognito, Kinesis etc.)</li>\
        <li>Elasticsearch</li>\
    "
  },
  "experience": [
    {
      "name": "New York University - Tandon School of Engineering",
      "role": "Graduate Research Assistant",
      "type": "Part Time",
      "duration": "Dec 2020 - Present",
      "description": "\
        <li>Building data pipelines to process, visualize, and model the vast amounts of data produced by the various study programs taught at NYU Tandon Bridge</li>\
        <li>Modelling knowledge graphs to map the various topics taught in the program and identify connectivity amongst them</li>\
      "
    },
    {
      "name": "Vyorius LLP",
      "role": "Product Lead",
      "type": "Part-time",
      "duration": "Mar 2020 - Present",
      "description": "\
      <li>Deployed the Vyorius Control Center (minimum viable product) for the drone operators (end users) on AWS</li>\
      <li>Converting the monolithic architecture of the product to microservices oriented architecture on AWS (utilizing EC2, S3, DynamoDB, Lambda, SNS, SQS, Code Pipeline etc.)</li>\
      <li>Building a minimal CICD pipeline with Travis CI for continuous integration on GitHub and Code Deploy for continuous deployment on AWS</li>\
      <li>Leading the software development and AI development teams for building various features and integrating them into dashboards for the Vyorius MVP</li>\
    "
    },
    {
      "name": "New York University - Center for Data Science",
      "role": "Graduate Research Assistant",
      "type": "Part-time",
      "duration": "Jan 2020 - Jun 2020",
      "description": "\
      <li>Developed an open-source Python library called FairPrep to design and evaluate machine learning models for social fairness and enable the users to model human demographics data without any bias (based on race, gender, orientation etc.)</li>\
      <li>Contributed towards the development of the FairPrep open-source package for Python.</li>\
    "
    },
    {
      "name": "Infosys Limited",
      "role": "System Engineer",
      "type": "Full-time",
      "duration": "Oct 2017 - May 2019",
      "description": "\
      <li>Deployed ML solutions to full-stack application (MEAN) and designed D3.JS visualizations for SQA processes such as test-suite optimization, defect analysis, and requirement-testcase traceability</li>\
      <li>Achieved up to 30% test suite optimization (reduction) by identifying the redundant or similar test cases and it resulted in an average of 10-15% effort savings per build cycle/sprint in regression testing for the clients</li>\
      <li>Analyzed the test suite optimization model (uses hierarchical clustering) for presenting it as an explainable AI solution to the clients</li>\
      <li>Augmented the traceability functionality by improving the simple bag-of-words based lexical similarity model to a semantic similarity model and improved the minimum mapping accuracy from 10% to 35% in an unsupervised learning model</li>\
      <li>Platform being used by leading Infosys projects in Financial Services and Energy domain</li>\
    "
    },
  ],
  "featured_projects": [
    {
      "name": "Securodrive",
      "description": "Securodrive is a driving assistant platform built on Amazon Web Services (AWS). It is built to avoid road accidents due to sleepy drivers. This app assists the drivers by applying AI to the live video stream of the driver and generates alerts when the driver appears to be yawning excessively or is in a drowsy state.<br><br>AWS Lambda, API Gateway and Kinesis were used to implement the web app and video streaming, Cognito and Rekognition for user auth, Sagemaker to train and deploy the model, and Elasticsearch & Kibana for real-time data analytics.",
      "github_url": "https://github.com/ankushjain2001/SecuroDrive",
      "image_url": "./img/projects/securodrive.jpg",
      "demo_url": "https://youtu.be/vUbxQOmeNQc",
      "tech": [
        "AWS",
        "JavaScript",
        "Elasticsearch",
        "Kibana",
        "Deep Learning"
      ]
    },
    {
      "name": "Multi-hop Question & Answering",
      "description": "Research based project to train a question and answering model for multi-hop questions. Multi-hop QA requires logical inference or aggregation of information from various parts of the long information text (like referring multiple wikis to answer a question) in order to perform QA. A transformer based longformer model was trained on the HotpotQA dataset.",
      "github_url": "https://github.com/ankushjain2001/Multi-Hop-Question-Answering",
      "image_url": "./img/projects/mhqa.png",
      "demo_url": "",
      "tech": [
        "Python",
        "Tensorflow",
        "Deep Learning",
        "NLP",
        "Transformer Model (Longformer)",
        
      ]
    },
    {
      "name": "Ascend",
      "description": "Developed an end-to-end natural text search engine for business teams to mine information from mailbox data of all the project team members and improve their productivity. A BERT model for Question and Answering was also trained and deployed. This project was built in solo capacity within a month.",
      "github_url": "",
      "image_url": "./img/projects/ascend.png",
      "demo_url": "https://www.youtube.com/watch?v=NocONFKs7Y0",
      "tech": [
        "Python",
        "PyTorch",
        "Deep Learning",
        "NLP",
        "BERT",
        "React.js",
        "FastAPI",
        "MongoDB"
      ]
    },
    {
      "name": "NYC Open Data Profiling",
      "description": "Built a high-performance Spark pipeline to ingest 1159 New York City open big data sets in order to emulate real-world data volumes, handle data noise, and perform semantic profiling of the data columns.<br><br>The generic profiling was performed with Spark RDDs and Dataframes. Semantic profiling was performed with Named Entity Recognition, Soundex, Regex, Ontologies, and Clustering.",
      "github_url": "https://github.com/ankushjain2001/NYC-Open-Data-Profiling",
      "image_url": "./img/projects/nycdp.png",
      "demo_url": "",
      "tech": [
        "Spark",
        "Big Data Hadoop",
        "Python",
        "Data Science",
        "Data Visualization"
      ]
    }
  ],
  "other_projects": [
    {
      "name": "Vyorius Command Center",
      "description": "Developed the Vyorius Command Center, a platform for operating and managing unmanned robots. Deploying the various Vyorius products on Amazon Web Services by utilizing the various AWS microservices. Vyorius is an early-stage startup.",
      "github_url": "",
      "image_url": "",
      "demo_url": "http://vyorius-home.s3-website.eu-central-1.amazonaws.com/sign-in",
      "tech": [
        "Node.js",
        "React",
        "AWS"
      ]
    },
    {
      "name": "Infosys AI-Led Quality Assurance Platform",
      "description": "Developed an AI-enabled SQA and testing product. Deployed ML solutions to full-stack application (MEAN) and designed D3.JS visualizations for SQA processes such as testsuite optimization, defect analysis, and requirement-testcase traceability.",
      "github_url": "",
      "image_url": "",
      "demo_url": "https://www.infosys.com/services/validation-solutions/service-offerings/machine-learning-qa.html",
      "tech": [
        "Node.js",
        "AngularJS",
        "MongoDB",
        "D3.JS",
        "Machine Learning",
        "Python"
      ]
    },
    {
      "name": "Infosys DevOps Testing Solution",
      "description": "Built a DevOps software quality dashboard to leverage the data from test cycles and report project health in a simplified way.",
      "github_url": "",
      "image_url": "",
      "demo_url": "https://www.infosys.com/services/validation-solutions/service-offerings/continuous-testing.html",
      "tech": [
        "Node.js",
        "AngularJS",
        "SQL",
        "Elasticsearch",
        "Kibana",
        "Python"
      ]
    },
    {
      "name": "Voice Enabled Photo Search",
      "description": "A Photo Search Gallery that utilizes AI for speech-to-text transcription and object detection for tagging objects within the images.",
      "github_url": "https://github.com/ankushjain2001/Voice-Enabled-Photo-Search",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "AWS CloudFormation",
        "AWS CodePipeline",
        "AWS VPC",
        "AWS S3",
        "Javascript"
      ]
    },
    {
      "name": "Smart Door Authenticator",
      "description": "A Smart Door Authentication system built on Amazon Web Services (AWS). It performs face recognition on a live streaming video of the doorway and issues an alert to the house owner (via SMS and Email) when a new or old visitor arrives.",
      "github_url": "https://github.com/ankushjain2001/Smart-Door-Authenticator",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "AWS Kinesis",
        "AWS Rekognition",
        "AWS Lambda",
        "DynamoDB",
        "Javascript"
      ]
    },
    {
      "name": "Dining Concierge Chatbot",
      "description": "A Dining Concierge chatbot built on Amazon Web Services (AWS). It sends restaurant suggestions for given a set of preferences via SMS.",
      "github_url": "https://github.com/ankushjain2001/Dining-Concierge",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "AWS Lex",
        "AWS Lambda",
        "AWS S3",
        "DynamoDB",
        "JavaScript"
      ]
    },
    {
      "name": "FairPrep",
      "description": "FairPrep is a design and evaluation framework for fairness-enhancing interventions that treats data as a first-class citizen.",
      "github_url": "https://github.com/DataResponsibly/FairPrep",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "Python",
        "TravisCI",
        "Machine Learning",
        "AI Fairness"
      ]
    },
    {
      "name": "Image Captioning with Autoencoders",
      "description": "A low-resource unsupervised image captioning solution by using autoencoder for image feature extraction and NLP for determining the best caption from the pre captioned similar images.",
      "github_url": "https://github.com/ankushjain2001/Image-Captioning-with-Autoencoders",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "Python",
        "Keras",
        "Deep Learning",
        "Autoencoders"
      ]
    },
    {
      "name": "Nutritional Labels for Word Embeddings",
      "description": "A benchmark of the different word embedding techniques on fairness and bias in AI models.",
      "github_url": "https://github.com/ankushjain2001/Nutritional-Labels-For-Word-Embeddings",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "Python",
        "Machine Learning",
        "AI Fairness"
      ]
    },
    {
      "name": "LIME Explainable Binary Classification",
      "description": "An explainable and interpretable binary classification project to clean data, vectorize data, K-Fold cross validate and apply classification models. The model is made explainable by using LIME Explainers.",
      "github_url": "https://github.com/ankushjain2001/LIME-Explainable-Binary-Classification",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "Python",
        "Explainable AI",
        "LIME"
      ]
    },
    {
      "name": "FastAPI React MongoDB Boilerplate",
      "description": "A minimal boilerplate / template project to get you started with a Python FastAPI backend, React frontend, MongoDB, and JWT user authentication (via FastAPIUsers).",
      "github_url": "https://github.com/ankushjain2001/fastapi-react-mongodb",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "JavaScript",
        "Python",
        "React",
        "FastAPI",
        "MongoDB"
      ]
    },
    {
      "name": "Stack Overflow 2018 Survey - EDA",
      "description": "An exploratory data analysis of the Stack Overflow 2018 Survey data set with informative data visualizations.",
      "github_url": "https://github.com/ankushjain2001/Stack-Overflow-2018-Developer-Survey-EDA",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "R",
        "Data Science",
        "Data Visualization"
      ]
    },
    {
      "name": "Canny Edge Detector Algorithm",
      "description": "An implementation of canny edge detector algorithm from scratch to perfom edge detection in images.",
      "github_url": "https://github.com/ankushjain2001/canny-edge-detector",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "Python",
        "NumPy"
      ]
    },
    {
      "name": "NYC Parking Violations Big Data Analysis",
      "description": "An analysis of NYC parking violation datasets using PySpark, SparkSQL and MapReduce with Hadoop Streaming",
      "github_url": "https://github.com/ankushjain2001/NYC-Parking-Violations-BigData-Analysis",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "Spark",
        "Hadoop",
        "Python",
        "Big Data"
      ]
    },
    {
      "name": "K-Means Clustering Algorithm",
      "description": "An implementation of K-Means clustering algorithm along with the K-Means++ seeding technique from scratch using NumPy.",
      "github_url": "https://github.com/ankushjain2001/k-means-clustering-algorithm",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "Python",
        "NumPy"
      ]
    },
    {
      "name": "Traffic Congestion Management",
      "description": "Built a time-series forecasting model for predicting the traffic congestion condition at the road intersections with ARIMA model.",
      "github_url": "https://github.com/ankushjain2001/Traffic-Congestion-Management",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "R",
        "Data Science",
        "Timeseries Forecasting"
      ]
    },
    {
      "name": "Traffic Congestion Management - EDA",
      "description": "An analysis of the road traffic data-sets used in the Traffic Congestion project. Studied the timeseries decomposition, Dickey-Fuller stationarity and ACF-PACF plots for data transformation and hyperparameter tuning.",
      "github_url": "https://github.com/ankushjain2001/Traffic-Congestion-EDA",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "Python",
        "Data Science",
        "Data Visualization"
      ]
    },
    {
      "name": "Link Repository",
      "description": "An application to store bookmarks, share them on social media platforms and gather a brief description of the webpage by web crawling.",
      "github_url": "https://github.com/ankushjain2001/Link-Repository",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "HTML/CSS",
        "JavaScript",
        "Bootstrap",
        "PHP"
      ]
    },
  ]
};
