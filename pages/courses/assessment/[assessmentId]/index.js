import React, { useState } from "react";
import { useRouter } from "next/router";
import userContext from "../../../../containers/userContext";
import requests from "../../../../utils/requests";

const TestExam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const router = useRouter();

  const { user, setUser } = React.useContext(userContext);

  React.useEffect(() => {
    if (router.query.assessmentId) {
      fetch(
        `https://cp.stanfordschool.uz/api/test/${router.query.assessmentId}`
      )
        .then((res) => res.json())
        .then((data) => {
          setQuestions(data);
        })
        .catch((err) => console.log(err));
    }
  }, [router.query.assessmentId]);

  const reset = () => {
    setCurrentQuestion(0);
    setSelectedOptions([]);
    setScore(0);
    setShowScore(false);
  };

  const handleRegisterUser = () => {
    const data = {
      ...user,
      result: `${score}/${questions.length}`,
      course_id: router.query.assessmentId,
    };

    fetch(`https://cp.stanfordschool.uz/api/new/comers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if(data){
          router.push('/');
        }
      })
      .catch((err) => console.log(err));
  };

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
  };

  if (questions.length === 0) {
    return <div className="bg-black">Loading...</div>;
  }

  return (
    <div className="bg-white">
      {showScore ? (
        <div className="py-8">
          <h1 className="text-3xl font-semibold text-center text-green-300 my-4">
            You scored {score} out of {questions.length}
          </h1>
          <br />
          <p className="text-xl text-center text-green-300">
            <button
              className="bg-green-400 py-2 px-6 font-bold text-white rounded"
              onClick={handleRegisterUser}
            >
              Apply
            </button>{" "}
            to the course with this score.
          </p>
          <br />
          <div className="flex justify-center">
            <span className="text-gray-200  py-2 mx-4">OR</span>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={reset}
            >
              Retake
            </button>
          </div>
        </div>
      ) : (
        <div className="container  py-12">
          <div className="flex  flex-col items-start w-full">
            <h4 className="mt-6 text-xl text-black">
              Question {currentQuestion + 1} of {questions.length}
            </h4>
            <div className="mt-4 text-2xl text-gray-800">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="flex  flex-col w-full">
            {questions[currentQuestion].answerOptions.map((answer, index) => (
              <div
                key={index}
                className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-gray-200 rounded-xl "
                onClick={(e) => handleAnswerOption(answer.answer)}
              >
                <input
                  type="radio"
                  name={answer.answer}
                  value={answer.answer}
                  checked={
                    answer.answer ===
                    selectedOptions[currentQuestion]?.answerByUser
                  }
                  onChange={(e) => handleAnswerOption(answer.answer)}
                  className="w-6 h-6 bg-black"
                />
                <p className="ml-6 text-gray-600">{answer.answer}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full mt-4 text-white">
            <button
              onClick={handlePrevious}
              className="w-[49%] py-3 bg-indigo-600 rounded-lg"
            >
              Previous
            </button>
            <button
              onClick={
                currentQuestion + 1 === questions.length
                  ? handleSubmitButton
                  : handleNext
              }
              className="w-[49%] py-3 bg-indigo-600 rounded-lg"
            >
              {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestExam;

export async function getStaticPaths() {
  const res = await requests.get("/api/test");
  const paths = res.data.map((test) => ({
    params: {
      assessmentId: test.id.toString(),
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../../../messages/${locale}.json`)).default,
    },
  };
};
