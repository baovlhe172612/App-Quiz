// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { getAnswer } from '../../service/answerService';
// import { getQuestionByTopicId } from '../../service/question';
// import "./Result.css"
// function Result() {


//   const params = useParams();
//   const [dataResult, setDataResult] = useState([]);

//   useEffect(() => {
//     const fetchApi = async () => {
//       const dataAnswer = await getAnswer(params.id);
//       const dataQuestion = await getQuestionByTopicId(dataAnswer.topicId)
//       console.log("dataAnswer: ", dataAnswer);
//       console.log("dataAnswer.answer: ", dataAnswer.answers);
//       console.log("dataQuestion: ", dataQuestion);

//       let result = [];
//       for (let i = 0; i < dataQuestion.length; i++) {
//         result.push({
//           ...dataQuestion[i],
//           ...dataAnswer?.answers.find(item => item.questionId === dataQuestion[i].id)
//         })
//       }
//       console.log("result", result)
//       setDataResult(result)
//     }

//     fetchApi();

//   }, [])

//   console.log("dataResult: ", dataResult);

//   return (
//     <>
//       <h1>Kết quả: </h1>
//       <div className='answer__list'>
//         {dataResult.map((item, index) => (
//           <div className='answer__item' key={item.id}>

//             <div className='form-quiz__item' key={item.id}>
//               <p>
//                 Câu {index + 1}: {item.question} 
//                 {
//                 item.correctAnswer === item.answer ? (
//                   <span className='result__tag result__tag--true'>Đúng</span>
//                 ) : (
//                   <span className='result__tag result__tag--false'>Sai</span>
//                 )
//               }
//               </p>
            
//               {item.answers.map((itemAns, indexAns) => {
//                 let className = "";
//                 let checked= false;

//                 if(item.answer === indexAns){
//                   checked= true;
//                   className="result__item--selected";
//                 }
//                 if(item.correctAnswer === indexAns){
//                   className += " result__item--result"
//                 }

//                 return(
//                   <div className="form-quiz__answer" key={indexAns}>
//                   {/* {indexAns} */}
//                   <input type="radio" checked={checked}/>
//                   <label className={className}>{itemAns}</label>
//                 </div>
//                 )
              
//               }

//               )}

//             </div>
//           </div>
//         ))}
//       </div>

//     </>
//   )
// }

// export default Result


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnswer } from '../../service/answerService';
import { getQuestionByTopicId } from '../../service/question';
import "./Result.css";

function Result() {
  const params = useParams();
  const [dataResult, setDataResult] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      const dataAnswer = await getAnswer(params.id);
      const dataQuestion = await getQuestionByTopicId(dataAnswer.topicId);
      console.log("dataAnswer",dataAnswer)
      console.log("dataQuestion",dataQuestion)

      // Tính điểm
      let calculatedScore = 0;
      const result = dataQuestion.map(question => {
        const answer = dataAnswer.answers.find(ans => ans.questionId === question.id);
        if (answer && answer.answer === question.correctAnswer) {
          calculatedScore += 1;
        }
        return {
          ...question,
          answer: answer ? answer.answer : null
        };
      });

      setScore(calculatedScore);
      setDataResult(result);
    };

    fetchApi();
  }, [params.id]);

  return (
    <>
      <h2>Kết quả: {score} / {dataResult.length}</h2> {/* Hiển thị điểm số */}
      <div className='answer__list'>
        {dataResult.map((item, index) => (
          <div className='answer__item' key={item.id}>
            <div className='form-quiz__item'>
              <p>
                Câu {index + 1}: {item.question}
                {item.correctAnswer === item.answer ? (
                  <span className='result__tag result__tag--true'>Đúng</span>
                ) : (
                  <span className='result__tag result__tag--false'>Sai</span>
                )}
              </p>
              {item.answers.map((itemAns, indexAns) => {
                let className = "";
                let checked = false;

                if (item.answer === indexAns) {
                  checked = true;
                  className = "result__item--selected";
                }
                if (item.correctAnswer === indexAns) {
                  className += " result__item--result";
                }

                return (
                  <div className="form-quiz__answer" key={indexAns}>
                    <input type="radio" checked={checked} readOnly />
                    <label className={className}>{itemAns}</label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Result;
