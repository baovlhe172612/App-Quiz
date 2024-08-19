import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getTopicById } from '../../service/topicService';
import { getQuestionByTopicId } from '../../service/question';
import './Quiz.css'; // Import the CSS file
import { getCookies } from '../../helpers/cookie';
import { createAnswer } from '../../service/quizService';

function Quiz() {
  const params = useParams();
  console.log("params", params);

  const [dataTopic, setDataTopic] = useState();
  const [listQuestion, setListQuestion] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
;
  const navigate = useNavigate();
  // Lấy ra topic theo id
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getTopicById(params.id);
      console.log("response in topic", response);
      setDataTopic(response);
    }
    fetchApi();
  }, [params.id]);


  // lấy ra question dựa theo id của topic
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getQuestionByTopicId(params.id);
      console.log("response in questions", response);
      setListQuestion(response);
    }
    fetchApi();
  }, [params.id]);


  //Lấy ra questionsId kèm theo đáp án là chỉ số
  const handleAnswerChange = (questionId, answerIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };
  console.log("selectedAnswers",selectedAnswers)

  // const handleSubmit = async () => {
  //   let score = 0;
  //   listQuestion.forEach((question) => {
  //     if (selectedAnswers[question.id] === question.correctAnswer) {
  //       score += 1;
  //     }
  //   });
  //   setScore(score);
  //   console.log("score",score)
  //   let options = {
  //     userId: parseInt(getCookies("id")),
  //     topicId: parseInt(params.id),
  //     answers:selectedAnswers  
  //   }
  
  //   const dataAnswer = await createAnswer(options)
  //   if(dataAnswer){
  //     navigate(`/result/${dataAnswer.id}`)
      
  //   }
  //   console.log("options",options)
  //   console.log("dataAnswer",dataAnswer)
  // };

  const handleSubmit = async () => {
    let score = 0;
    const answersArray = Object.keys(selectedAnswers).map(questionId => ({
      questionId: parseInt(questionId),
      answer: selectedAnswers[questionId]
    }));
    
    listQuestion.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        score += 1;
      }
    });
    setScore(score);
    
    const options = {
      userId: parseInt(getCookies("id")),
      topicId: parseInt(params.id),
      answers: answersArray
    };
  
    const dataAnswer = await createAnswer(options);
    if (dataAnswer) {
      navigate(`/result/${dataAnswer.id}`);
    }
  };
  
  // Dữ liệu gửi lên backend nè

 
  console.log("dataTopic", dataTopic);
  console.log("listQuestion", listQuestion);
  console.log("selectedAnswers", selectedAnswers);

 

  return (
    <div className="quiz-container">
      <h1>Bài quiz chủ đề: {dataTopic && dataTopic.name}</h1>
      <ul className="question-list">
        {listQuestion.map((item, index) => (
          <li key={item.id} className="question-item">
            <p className="question-text">Câu {index + 1}: {item.question}</p>
            <div className="answer-options">
              {item.answers.map((answer, idx) => (
                <div key={idx} className="answer-option">
                  <label>
                    <input
                      type="radio"
                      // Đặt tên khác nhau để chỉ tích được 1
                      name={`question-${item.id}`}
                      value={idx}
                      checked={selectedAnswers[item.id] === idx}
                      onChange={() => handleAnswerChange(item.id, idx)}
                    />
                    {answer}
                  </label>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} className="submit-button">Submit</button>
      {score !== null && (
        <div className="score-result">
          <h2>Your Score: {score} / {listQuestion.length}</h2>
        </div>
      )}
    </div>
  );
}

export default Quiz;
