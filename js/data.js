var data = {
  "about": {
    "intro": "Hello! I am Ankush Jain. I am a machine learning engineer and a full-stack developer. My experience has taught me to apply my skills to real-world problems. And my on-going study in the master's program at <a href=\"https://engineering.nyu.edu/academics/programs/computer-science-ms\" class=\"text-primary\">New York University</a> has further equipped me with all the essential tools for my niche.<br><br>Previously, I have worked as a Software Engineer at <a href=\"https://www.infosys.com/services/validation-solutions/service-offerings/machine-learning-qa.html\" class=\"text-primary\">Infosys</a>. I worked on a variety of machine learning solutions for Software Quality Assurance & Testing. Presently, I am working part-time with <a href=\" https://vyorius.com/\" class=\"text-primary\">Vyorius</a> to deploy their product-line on AWS.<br><br>Here are my key skills in Machine Learning and Full-Stack development.",
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
      "description": "Securodrive is a driving assistant platform built on Amazon Web Services (AWS). It is built to avoid road accidents due to sleepy drivers. This app assists the drivers by applying AI techniques to the live video stream of the driver and generates alerts when the driver appears to be yawning excessively or going in a drowsy state.<br><br>AWS Lambda and API Gateway were used to implement the web app and video streaming, Cognito and Rekognition were used for user auth, Sagemaker was used to train and deploy the model, and Elasticsearch & Kibana were used for real-time data analytics.",
      "github_url": "https://github.com/ankushjain2001/SecuroDrive",
      "image_url": "./img/projects/securodrive.jpg",
      "demo_url": "https://youtu.be/vUbxQOmeNQc",
      "tech": [
        "AWS",
        "Elasticsearch",
        "Kibana",
        "Deep Learning",
        "jQuery"
      ]
    },
    {
      "name": "Multi-hop Question & Answering",
      "description": "Research based project to train a question and answering model for multi-hop questions. Multi-hop QA requires logical inference or aggregation of information from various parts of the information text (like referring multiple wikis to answer a question) in order to perform QA. A transformer based longformer model was trained on the HotpotQA dataset.",
      "github_url": "https://github.com/ankushjain2001/Multi-Hop-Question-Answering",
      "image_url": "./img/projects/mhqa.png",
      "demo_url": "",
      "tech": [
        "Deep Learning",
        "NLP",
        "Tensorflow",
        "Transformer/Longformer Model",
        "Jupyter",
        "Python"
      ]
    },
    {
      "name": "Ascend",
      "description": "Developed an end-to-end natural text search engine for business teams (primarily the new recruits) to mine business information from mailbox data such as documents, meetings etc. of all the project team members and improve their productivity. A BERT model for Question and Answering was also trained and deployed. This project was built in solo capacity in a month.",
      "github_url": "",
      "image_url": "./img/projects/ascend.png",
      "demo_url": "https://www.youtube.com/watch?v=NocONFKs7Y0",
      "tech": [
        "Deep Learning",
        "NLP",
        "Python",
        "Keras",
        "BERT",
        "React.js",
        "FastAPI",
        "MongoDB"
      ]
    },
    {
      "name": "NYC Open Data Profiling",
      "description": "Built a high-performance Spark pipeline to ingest 1159 New York City open big data sets in order to emulate real-world data volumes, handle data noise, and perform semantic profiling of the data columns.<br><br>The generic profiling was performed with Spark RDDs and Dataframes. Semantic profiling was performed with Named Entity Recognition, Soundex, Regex, Ontologies and Clustering.",
      "github_url": "https://github.com/ankushjain2001/NYC-Open-Data-Profiling",
      "image_url": "./img/projects/nycdp.png",
      "demo_url": "",
      "tech": [
        "Spark",
        "Big Data Hadoop",
        "Python",
        "Data Analysis",
        "Data Visualization"
      ]
    }
  ],
  "other_projects": [
    {
      "name": "",
      "description": "",
      "github_url": "",
      "image_url": "",
      "demo_url": "",
      "tech": [
        "",
        "",
        "",
        ""
      ]
    }
  ]
};
