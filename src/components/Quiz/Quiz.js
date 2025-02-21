import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
  MenuItem,
  Select,
} from "@mui/material";
//import "./Quiz.css";
const quizQuestions = {
  python: [
    {
      id: 1,
      question: "What is the primary use of Python?",
      options: [
        "Web Development",
        "Data Science",
        "Machine Learning",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
    {
      id: 2,
      question: "Which data type is mutable in Python?",
      options: ["Tuple", "List", "String", "Integer"],
      correctAnswer: "List",
    },
    {
      id: 3,
      question: "What does the `len()` function return in Python?",
      options: [
        "Memory size of variable",
        "Number of elements in a sequence",
        "Hash value of object",
        "None",
      ],
      correctAnswer: "Number of elements in a sequence",
    },
    {
      id: 4,
      question: "Which of the following is NOT a Python framework?",
      options: ["Django", "Flask", "React", "FastAPI"],
      correctAnswer: "React",
    },
    {
      id: 5,
      question: "What keyword is used to define a function in Python?",
      options: ["func", "def", "function", "lambda"],
      correctAnswer: "def",
    },
  ],

  react: [
    {
      id: 1,
      question: "What is React primarily used for?",
      options: [
        "Backend Development",
        "Mobile Apps",
        "Building UI Components",
        "Database Management",
      ],
      correctAnswer: "Building UI Components",
    },
    {
      id: 2,
      question: "Which hook is used to handle side effects in React?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctAnswer: "useEffect",
    },
    {
      id: 3,
      question: "What is JSX in React?",
      options: [
        "A syntax extension of JavaScript",
        "A new programming language",
        "A state management tool",
        "None of the above",
      ],
      correctAnswer: "A syntax extension of JavaScript",
    },
    {
      id: 4,
      question: "Which of the following is NOT a React hook?",
      options: ["useState", "useMemo", "useFetch", "useEffect"],
      correctAnswer: "useFetch",
    },
    {
      id: 5,
      question: "Which statement is used for conditional rendering in React?",
      options: [
        "if-else",
        "switch-case",
        "ternary operator",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
  ],

  java: [
    {
      id: 1,
      question: "Which keyword is used to define a class in Java?",
      options: ["function", "class", "def", "new"],
      correctAnswer: "class",
    },
    {
      id: 2,
      question: "Which of these is not a Java primitive data type?",
      options: ["int", "boolean", "float", "string"],
      correctAnswer: "string",
    },
    {
      id: 3,
      question: "What is the purpose of the 'super' keyword in Java?",
      options: [
        "Call the parent class constructor",
        "Access private methods",
        "Create an object",
        "None of the above",
      ],
      correctAnswer: "Call the parent class constructor",
    },
    {
      id: 4,
      question:
        "Which Java feature allows method names to be the same but have different parameters?",
      options: [
        "Method Overloading",
        "Method Overriding",
        "Encapsulation",
        "Polymorphism",
      ],
      correctAnswer: "Method Overloading",
    },
    {
      id: 5,
      question: "What does JVM stand for?",
      options: [
        "Java Virtual Machine",
        "Java Visual Model",
        "Java Verified Module",
        "Java Variable Management",
      ],
      correctAnswer: "Java Virtual Machine",
    },
  ],

  databases: [
    {
      id: 1,
      question: "Which SQL statement is used to retrieve data?",
      options: ["GET", "SELECT", "FETCH", "RETRIEVE"],
      correctAnswer: "SELECT",
    },
    {
      id: 2,
      question: "What type of database is MongoDB?",
      options: ["Relational", "NoSQL", "Hierarchical", "Key-Value Store"],
      correctAnswer: "NoSQL",
    },
    {
      id: 3,
      question: "What does ACID stand for in database systems?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Access, Control, Integrity, Durability",
        "All Conditions Integrated Data",
        "None of the above",
      ],
      correctAnswer: "Atomicity, Consistency, Isolation, Durability",
    },
    {
      id: 4,
      question:
        "Which command is used to remove all records from a table but keep the structure?",
      options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
      correctAnswer: "TRUNCATE",
    },
    {
      id: 5,
      question:
        "Which SQL JOIN returns all records when there is a match in either table?",
      options: ["INNER JOIN", "OUTER JOIN", "LEFT JOIN", "CROSS JOIN"],
      correctAnswer: "OUTER JOIN",
    },
  ],

  networking: [
    {
      id: 1,
      question: "What does IP stand for?",
      options: [
        "Internet Process",
        "Internet Protocol",
        "Internal Program",
        "Integrated Processing",
      ],
      correctAnswer: "Internet Protocol",
    },
    {
      id: 2,
      question: "Which layer of the OSI model is responsible for routing?",
      options: [
        "Physical Layer",
        "Transport Layer",
        "Network Layer",
        "Session Layer",
      ],
      correctAnswer: "Network Layer",
    },
    {
      id: 3,
      question: "What is the default port number for HTTP?",
      options: ["21", "80", "443", "8080"],
      correctAnswer: "80",
    },
    {
      id: 4,
      question: "What is the full form of DNS?",
      options: [
        "Domain Name System",
        "Data Network Service",
        "Digital Name Structure",
        "Domain Naming Source",
      ],
      correctAnswer: "Domain Name System",
    },
    {
      id: 5,
      question:
        "Which protocol is used to securely transfer files over a network?",
      options: ["FTP", "HTTP", "SSH", "SFTP"],
      correctAnswer: "SFTP",
    },
  ],
};

const Quiz = () => {
  const [selectedCategory, setSelectedCategory] = useState("python");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const bgStyle = {
    backgroundImage:
      "url('https://thumbs.dreamstime.com/b/question-marks-scattered-white-background-quiz-doubt-poll-survey-faq-interrogation-query-background-multicolored-template-195946111.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };
  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    let totalScore = 0;
    quizQuestions[selectedCategory].forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
    setSubmitted(true);
  };

  return (
    <div style={bgStyle}>
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "black", mt: 10 }}
        >
          Quiz
        </Typography>

        {/* Dropdown to select quiz category */}
        <FormControl fullWidth>
          <Select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setAnswers({});
              setSubmitted(false);
              setScore(0);
            }}
          >
            {Object.keys(quizQuestions).map((category) => (
              <MenuItem key={category} value={category}>
                {category.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Display Questions */}
        {quizQuestions[selectedCategory].map((q) => (
          <Card key={q.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{q.question}</Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  value={answers[q.id] || ""}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                >
                  {q.options.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={option}
                      control={<Radio />}
                      label={option}
                      disabled={submitted}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
        ))}

        {/* Submit button */}
        {!submitted ? (
          <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
            Submit Quiz
          </Button>
        ) : (
          <Typography variant="h5" sx={{ mt: 2 }}>
            Your Score: {score} / {quizQuestions[selectedCategory].length}
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default Quiz;
