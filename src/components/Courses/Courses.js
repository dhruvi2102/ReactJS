import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  //const user = JSON.parse(localStorage.getItem("user")); // Example: { id: 1, name: "John Doe", email: "john@example.com" }
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";
  // Sample course data (you can fetch this from an API or localStorage)
  const coursesData = [
    {
      id: 1,
      title: "Introduction to React",
      description:
        "Learn the basics of React, including components, props, and state.",
      instructor: "John Smith",
      duration: "3 hours",
      prerequisites: ["Basic JavaScript", "HTML & CSS"],
      sections: [
        "Introduction to React",
        "Components and Props",
        "State and Lifecycle",
        "Handling Events",
        "React Hooks",
        "Building a Simple Project",
      ],
      videos: [
        {
          title: "React Basics",
          url: "https://www.youtube.com/embed/N3AkSS5hXMA",
        },
        {
          title: "React Components",
          url: "https://www.youtube.com/embed/dpw9EHDh2bM",
        },
      ],
      pdfs: [
        {
          title: "React Beginner Guide",
          url: "https://www.geeksforgeeks.org/learn-reactjs/",
        },
      ],
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description:
        "Dive deep into advanced JavaScript topics, including closures, promises, and async/await.",
      instructor: "Jane Doe",
      duration: "3 hours",
      prerequisites: ["Basic JavaScript", "ES6 Fundamentals"],
      sections: [
        "Closures and Scope",
        "Prototype and Inheritance",
        "Asynchronous JavaScript",
        "JavaScript Modules",
        "Design Patterns in JavaScript",
        "Testing and Debugging",
      ],
      videos: [
        {
          title: "JavaScript Closures",
          url: "https://www.youtube.com/embed/XG32wbpjoU4",
        },
        {
          title: "Promises and Async/Await",
          url: "https://www.youtube.com/embed/W6NZfCO5SIk",
        },
      ],
      pdfs: [
        {
          title: "Advanced JavaScript Concepts",
          url: "https://www.geeksforgeeks.org/javascript/",
        },
      ],
    },
    {
      id: 3,
      title: "CSS for Beginners",
      description:
        "Master the fundamentals of CSS, including layouts, flexbox, and grid systems.",
      instructor: "Alice Brown",
      duration: "3 hours",
      prerequisites: ["Basic HTML"],
      sections: [
        "CSS Basics and Selectors",
        "Box Model and Positioning",
        "Flexbox and Grid",
        "CSS Animations",
        "Responsive Design",
        "Building a CSS Project",
      ],
      videos: [
        { title: "CSS Grid", url: "https://www.youtube.com/embed/jV8B24rSN5o" },
        {
          title: "Flexbox Basics",
          url: "https://www.youtube.com/embed/K74l26pE4YA",
        },
      ],
      pdfs: [
        {
          title: "CSS Basics Guide",
          url: "https://www.w3schools.com/css/default.asp",
        },
        {
          title: "Mastering Flexbox",
          url: "https://example.com/flexbox-guide.pdf",
        },
      ],
    },
    {
      id: 4,
      title: "Data Structures and Algorithms",
      description:
        "Understand the key data structures and algorithms for programming and problem-solving.",
      instructor: "Robert Green",
      duration: "10 hours",
      prerequisites: ["Basic Programming Knowledge"],
      sections: [
        "Arrays and Linked Lists",
        "Stacks and Queues",
        "Sorting and Searching Algorithms",
        "Trees and Graphs",
        "Dynamic Programming",
        "Algorithm Complexity Analysis",
      ],
      videos: [
        [
          {
            title: "Sorting Algorithms",
            url: "https://www.youtube.com/embed/TzeBrDU-JaY",
          },
          {
            title: "Graph Algorithms",
            url: "https://www.youtube.com/embed/tWVWeAqZ0WU",
          },
        ],
      ],
      pdfs: [
        {
          title: "Data Structures Guide",
          url: "https://www.geeksforgeeks.org/dsa-tutorial-learn-data-structures-and-algorithms/",
        },
      ],
    },
    {
      id: 5,
      title: "Python for Data Science",
      description:
        "Learn how to use Python for data analysis and visualization, including NumPy, Pandas, and Matplotlib.",
      instructor: "David Harris",
      duration: "8 hours",
      prerequisites: ["Basic Python Knowledge"],
      sections: [
        "Introduction to Python for Data Science",
        "Data Manipulation with Pandas",
        "Data Visualization with Matplotlib and Seaborn",
        "Exploratory Data Analysis",
        "Machine Learning Basics",
        "Building a Data Science Project",
      ],
      videos: [
        {
          title: "Pandas for Data Science",
          url: "https://www.youtube.com/embed/ZyhVh-qRZPA",
        },
        {
          title: "Matplotlib for Visualization",
          url: "https://www.youtube.com/embed/m64Upph9EwI",
        },
      ],
      pdfs: [
        {
          title: "Python for Data Science",
          url: "https://www.geeksforgeeks.org/data-science-with-python-tutorial/?ref=shm",
        },
      ],
    },
    {
      id: 6,
      title: "Machine Learning 101",
      description:
        "Explore the fundamentals of machine learning, including supervised and unsupervised learning algorithms.",
      instructor: "Sophia Carter",
      duration: "12 hours",
      prerequisites: ["Basic Python", "Statistics and Probability"],
      sections: [
        "Introduction to Machine Learning",
        "Supervised Learning Algorithms",
        "Unsupervised Learning Techniques",
        "Neural Networks and Deep Learning",
        "Model Evaluation and Optimization",
        "Building a Machine Learning Project",
      ],
      videos: [
        {
          title: "Introduction to Machine Learning",
          url: "https://www.youtube.com/embed/1",
        },
        {
          title: "Supervised Learning Explained",
          url: "https://www.youtube.com/embed/2",
        },
      ],
      pdfs: [
        {
          title: "Machine Learning",
          url: "https://www.geeksforgeeks.org/machine-learning/?ref=lbp",
        },
      ],
    },
    {
      id: 7,
      title: "Full Stack Web Development",
      description:
        "Learn both front-end and back-end technologies to build full-stack web applications using React, Node.js, and MongoDB.",
      instructor: "Michael Johnson",
      duration: "16 hours",
      prerequisites: ["HTML, CSS, JavaScript"],
      sections: [
        "Front-End Development with React",
        "Back-End Development with Node.js",
        "Database Management with MongoDB",
        "Authentication and Authorization",
        "Deploying Web Applications",
        "Building a Full-Stack Project",
      ],
      videos: [
        {
          title: "Intro to Full Stack Development",
          url: "https://www.youtube.com/embed/3",
        },
        {
          title: "Building a MERN Stack App",
          url: "https://www.youtube.com/embed/4",
        },
      ],
      pdfs: [
        {
          title: "Full Stack Web Development",
          url: "https://www.geeksforgeeks.org/100-days-of-web-development/?ref=dhm",
        },
      ],
    },
    {
      id: 8,
      title: "Web Development Bootcamp",
      description:
        "Complete web development course teaching HTML, CSS, JavaScript, and more with hands-on projects.",
      instructor: "Sarah Lee",
      duration: "20  hours",
      prerequisites: ["None"],
      sections: [
        "HTML and CSS Fundamentals",
        "JavaScript Basics and DOM Manipulation",
        "Responsive Web Design",
        "Backend Basics with Node.js",
        "Database Integration",
        "Building and Deploying Web Applications",
      ],
      videos: [
        { title: "HTML & CSS Basics", url: "https://www.youtube.com/embed/5" },
        {
          title: "JavaScript Crash Course",
          url: "https://www.youtube.com/embed/6",
        },
      ],
      pdfs: [
        {
          title: "Web Development Bootcamp",
          url: "https://www.geeksforgeeks.org/100-days-of-web-development/?ref=dhm",
        },
      ],
    },
    {
      id: 9,
      title: "UI/UX Design Principles",
      description:
        "Learn the fundamentals of user interface and user experience design, with practical examples and best practices.",
      instructor: "Emily Wilson",
      duration: "6 hours",
      prerequisites: ["None"],
      sections: [
        "Introduction to UI/UX Design",
        "User Research and Personas",
        "Wireframing and Prototyping",
        "Visual Design and Branding",
        "Usability Testing",
        "Designing for Accessibility",
      ],
      videos: [
        { title: "What is UI/UX?", url: "https://www.youtube.com/embed/7" },
        {
          title: "How to Create Wireframes",
          url: "https://www.youtube.com/embed/8",
        },
      ],
      pdfs: [
        {
          title: "UI/UX Design Principles",
          url: "https://www.geeksforgeeks.org/front-end-development/?ref=dhm",
        },
      ],
    },
    {
      id: 10,
      title: "React Native for Mobile App Development",
      description:
        "Learn to build cross-platform mobile apps with React Native, including navigation, state management, and more.",
      instructor: "Daniel Scott",
      duration: "10 hours",
      prerequisites: ["Basic JavaScript", "React Basics"],
      sections: [
        "Introduction to React Native",
        "Setting Up the Development Environment",
        "Building UI Components",
        "State Management with Redux",
        "Navigation and Routing",
        "Publishing a React Native App",
      ],
      videos: [
        {
          title: "React Native Setup Guide",
          url: "https://www.youtube.com/embed/9",
        },
        {
          title: "Building Your First React Native App",
          url: "https://www.youtube.com/embed/10",
        },
      ],
      pdfs: [
        {
          title: "React Native for Mobile App Development",
          url: "https://reactnative.dev/docs/getting-started",
        },
      ],
    },
    {
      id: 11,
      title: "Blockchain Development",
      description:
        "Understand blockchain technology and learn how to develop decentralized applications (dApps) and smart contracts.",
      instructor: "Victoria Adams",
      duration: "6 hours",
      prerequisites: [
        "Basic programming knowledge",
        "Understanding of web development",
      ],
      sections: [
        "Introduction to Blockchain",
        "Cryptography and Hashing",
        "Smart Contracts with Solidity",
        "Ethereum and Decentralized Applications",
        "Hyperledger and Private Blockchains",
        "Final Project: Building a dApp",
      ],
      videos: [
        {
          title: "What is Blockchain?",
          url: "https://www.youtube.com/embed/11",
        },
        {
          title: "Getting Started with Solidity",
          url: "https://www.youtube.com/embed/12",
        },
      ],
      pdfs: [
        {
          title: "Blockchain Development",
          url: "https://roadmap.sh/blockchain",
        },
      ],
    },
    {
      id: 12,
      title: "Cloud Computing with AWS",
      description:
        "Learn how to use Amazon Web Services (AWS) to deploy, manage, and scale cloud-based applications.",
      instructor: "Kevin Moore",
      duration: "8 hours",
      prerequisites: [
        "Basic understanding of servers and networking",
        "Some experience with Linux",
      ],
      sections: [
        "Introduction to Cloud Computing",
        "AWS Core Services",
        "Storage and Databases in AWS",
        "Networking and Security",
        "AWS Lambda and Serverless Architecture",
        "Deploying and Managing Applications in AWS",
      ],
      videos: [
        { title: "AWS Basics", url: "https://www.youtube.com/embed/13" },
        {
          title: "Deploying Apps on AWS",
          url: "https://www.youtube.com/embed/14",
        },
      ],
      pdfs: [
        {
          title: "Cloud Computing with AWS",
          url: "https://aws.amazon.com/what-is-cloud-computing/",
        },
      ],
    },
    {
      id: 13,
      title: "Digital Marketing Fundamentals",
      description:
        "Learn the essentials of digital marketing, including SEO, SEM, social media marketing, and content strategy.",
      instructor: "Laura Taylor",
      duration: "5 hours",
      prerequisites: [
        "Basic knowledge of the internet",
        "Interest in marketing",
      ],
      sections: [
        "Introduction to Digital Marketing",
        "Search Engine Optimization (SEO)",
        "Content Marketing and Blogging",
        "Social Media Marketing",
        "Paid Advertising and Google Ads",
        "Analytics and Performance Measurement",
      ],
      videos: [
        {
          title: "What is Digital Marketing?",
          url: "https://www.youtube.com/embed/15",
        },
        {
          title: "SEO Basics for Beginners",
          url: "https://www.youtube.com/embed/16",
        },
      ],
      pdfs: [
        {
          title: "Digital Marketing Fundamentals",
          url: "https://studylib.net/doc/27207159/-.notes---the-complete-digital-marketing-course--google-d..",
        },
      ],
    },
    {
      id: 14,
      title: "Angular for Beginners",
      description:
        "Get started with Angular, a popular JavaScript framework for building dynamic and responsive web applications.",
      instructor: "James White",
      duration: "6 hours",
      prerequisites: ["Basic knowledge of HTML, CSS, and JavaScript"],
      sections: [
        "Introduction to Angular",
        "Components and Data Binding",
        "Directives and Pipes",
        "Services and Dependency Injection",
        "Routing and Navigation",
        "Building a Full Angular Application",
      ],
      videos: [
        {
          title: "Introduction to Angular",
          url: "https://www.youtube.com/embed/17",
        },
        {
          title: "Angular Components and Data Binding",
          url: "https://www.youtube.com/embed/18",
        },
      ],
      pdfs: [
        {
          title: "Angular for Beginners",
          url: "https://www.w3schools.com/angular/default.asp",
        },
      ],
    },
    {
      id: 15,
      title: "Git and GitHub for Version Control",
      description:
        "Master version control with Git and learn how to use GitHub for collaboration and code management.",
      instructor: "Mason King",
      duration: "4 hours",
      prerequisites: [
        "Basic knowledge of command line",
        "Understanding of software development workflow",
      ],
      sections: [
        "Introduction to Version Control",
        "Git Basics: Repositories, Commits, and Branching",
        "Merging and Resolving Conflicts",
        "Working with GitHub",
        "Collaborating on Open Source Projects",
        "Best Practices for Git Workflow",
      ],
      videos: [
        {
          title: "Git Basics Explained",
          url: "https://www.youtube.com/embed/19",
        },
        {
          title: "How to Use GitHub for Collaboration",
          url: "https://www.youtube.com/embed/20",
        },
      ],
      pdfs: [
        {
          title: "Git and GitHub for Version Control",
          url: "https://www.w3schools.com/git/default.asp",
        },
      ],
    },
    {
      id: 16,
      title: "Cybersecurity Fundamentals",
      description:
        "Learn the basics of cybersecurity, including ethical hacking, encryption, and securing web applications.",
      instructor: "Olivia Martinez",
      duration: "7 hours",
      prerequisites: ["Basic knowledge of networking and operating systems"],
      sections: [
        "Introduction to Cybersecurity",
        "Network Security Basics",
        "Common Cyber Threats and Attacks",
        "Ethical Hacking and Penetration Testing",
        "Encryption and Cryptography",
        "Cybersecurity Best Practices and Risk Management",
      ],
      videos: [
        {
          title: "Cybersecurity Basics",
          url: "https://www.youtube.com/embed/21",
        },
        {
          title: "How Ethical Hacking Works",
          url: "https://www.youtube.com/embed/22",
        },
      ],
      pdfs: [
        {
          title: "Cybersecurity Fundamentals",
          url: "https://www.w3schools.com/cybersecurity/index.php",
        },
      ],
    },
    {
      id: 17,
      title: "Introduction to Cloud Security",
      description:
        "Understand cloud security best practices and learn how to protect cloud infrastructures and applications.",
      instructor: "Liam Anderson",
      duration: "6 hours",
      prerequisites: [
        "Basic understanding of cloud computing",
        "Some knowledge of cybersecurity",
      ],
      sections: [
        "Cloud Security Fundamentals",
        "Identity and Access Management",
        "Data Protection and Compliance",
        "Network Security in the Cloud",
        "Incident Response and Threat Detection",
        "Security Best Practices for Cloud Applications",
      ],
      videos: [
        {
          title: "Introduction to Cloud Security",
          url: "https://www.youtube.com/embed/23",
        },
        {
          title: "Cloud Security Best Practices",
          url: "https://www.youtube.com/embed/24",
        },
      ],
      pdfs: [
        {
          title: "Introduction to Cloud Security",
          url: "https://www.geeksforgeeks.org/cloud-computing-security/",
        },
      ],
    },
    {
      id: 18,
      title: "Game Development with Unity",
      description:
        "Learn how to create 2D and 3D games using the Unity engine, including game physics, animation, and more.",
      instructor: "Benjamin Walker",
      duration: "8 hours",
      prerequisites: [
        "Basic programming skills",
        "Some familiarity with game development concepts",
      ],
      sections: [
        "Introduction to Unity and Game Engines",
        "Scripting with C#",
        "Physics and Game Mechanics",
        "Animation and UI Design",
        "Building and Exporting Games",
        "Final Project: Creating a Full Game",
      ],
      videos: [
        {
          title: "Getting Started with Unity",
          url: "https://www.youtube.com/embed/25",
        },
        {
          title: "How to Script in C# for Unity",
          url: "https://www.youtube.com/embed/26",
        },
      ],
      pdfs: [
        {
          title: "Game Development with Unity",
          url: "https://learn.unity.com/",
        },
      ],
    },
  ];

  // State for holding courses (you can fetch from an API)
  const [courses, setCourses] = useState(coursesData);
  const [enrolledCourses, setEnrolledCourses] = useState(
    JSON.parse(localStorage.getItem("enrolledCourses")) || []
  );

  useEffect(() => {
    if (searchQuery) {
      const filteredCourses = coursesData.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery) ||
          course.description.toLowerCase().includes(searchQuery) ||
          course.instructor.toLowerCase().includes(searchQuery)
      );
      setCourses(filteredCourses);
    } else {
      setCourses(coursesData);
    }
  }, [searchQuery]);

  const handleEnroll = (course) => {
    if (!localStorage.getItem("isAuthenticated")) {
      navigate("/signin");
    } else {
      const isAlreadyEnrolled = enrolledCourses.some(
        (enrolledCourse) => enrolledCourse.id === course.id
      );

      if (isAlreadyEnrolled) {
        alert("You are already enrolled in this course.");
      } else {
        navigate("/payment", { state: { course } });

        const updatedEnrolledCourses = [...enrolledCourses, course];
        setEnrolledCourses(updatedEnrolledCourses);
        localStorage.setItem(
          "enrolledCourses",
          JSON.stringify(updatedEnrolledCourses)
        );

        alert(`Successfully enrolled in course: ${course.title}`);
      }
    }
  };

  return (
    <Box sx={{ padding: 3, mt: 8 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        {searchQuery
          ? `Search results for "${searchQuery}"`
          : "Available Courses"}
      </Typography>

      <Grid container spacing={3}>
        {courses.length > 0 ? (
          courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    Instructor: {course.instructor}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {course.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEnroll(course)}
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6">No courses found.</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Courses;
