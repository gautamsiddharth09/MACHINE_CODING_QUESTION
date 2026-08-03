import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CreateQuiz() {
  const [question, setQuestion] = useState({
    question: "",
    answer: "",
    option: ["", "", "", ""],
  });

  const  [preview, setPreviw] = useState(false)

  const [quiz, setQuiz] = useState(()=>{
    const saveQuiz = localStorage.getItem("quizQuestion")
    return saveQuiz ? JSON.parse(saveQuiz) : []
  });

  const handleOptionChange = (index, value) => {
    const newOption = [...question.option];
    newOption[index] = value;
    setQuestion({ ...question, option: newOption });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(question.question === "" && question.answer === ""){
      alert("fill all detail")
      return;
    }
    setQuiz([question, ...quiz]);
    alert("added question")

    setQuestion({
    question: "",
    answer: "",
    option: ["", "", "", ""]
    })


  };

useEffect(()=>{
  localStorage.setItem("quizQuestion", JSON.stringify(quiz))
},[quiz])

  return (
    <>
      <div className="container">
        <h1>Create Quiz</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              {" "}
              <label>Question</label>
            </div>
            <input
              type="text"
              value={question.question}
              onChange={(e) =>
                setQuestion({ ...question, question: e.target.value })
              }
            />
          </div>

          <div>
            <div>Option</div>
            {question.option.map((el, i) => (
              <div key={i}>
                <input
                  type="text"
                  placeholder={`Option ${i + 1}`}
                  value={el}
                  onChange={(e) => handleOptionChange(i, e.target.value)}
                />
                <input
                  type="radio"
                  name="answer"
                  checked={question.answer === i}
                  onChange={() =>
                    setQuestion({
                      ...question,
                      answer: i,
                    })
                  }
                />{" "}
                correct answer
              </div>
            ))}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="quiz-contianer">
        <h1 onClick={()=>setPreviw((prev)=>!prev)}>Quiz Preview</h1>
         {preview && (
          
        <div className="quiz">
          {quiz.map((q, i) => (
            <div className="quiz-map" key={i}  >
              <h4>
                {i + 1} {q.question}{" "}
              </h4>
              <ul>
                {q.option.map((o, index) => (
                  <li key={index}>{o}</li>
                ))}
              </ul>

              <p> Correct Answer: {q.answer + 1} </p>
            </div>

            
          ))}
        </div>
         )}
      </div>
    </>
  );
}

export default CreateQuiz;
