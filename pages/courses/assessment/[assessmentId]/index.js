import React, {useState} from "react";
import {useRouter} from "next/router";
import userContext from "../../../../containers/userContext";
import requests from "../../../../utils/requests";
import {nanoid} from "nanoid";

const TestExam = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {user, setUser} = React.useContext(userContext);
    console.log('user', user);

    React.useEffect(() => {
        if (router.query.assessmentId) {
            requests.get(`/test/${router.query.assessmentId}`)
                .then(res => {
                    setQuestions(res.data?.questions);
                }).catch(err => console.error(err))
        }
    }, [router.query.assessmentId]);

    const reset = () => {
        setUserAnswers({});
        setActiveQuestion(0);
        setScore(null);
    };

    const handleRegisterUser = () => {
        setIsLoading(true);
        const data = {
            ...user,
            result: `${score}/${questions.length}`,
            course_id: router.query.assessmentId,
        };

        requests.post('/new/comers', data).then(
            (res) => {
                setIsLoading(false);
                router.push('/');
            }
        ).catch(err => {
            setIsLoading(false);
            console.error(err)
        });
    };

    const handleAnswerOption = (answer) => {
        const newAnswers = {...userAnswers};
        newAnswers[activeQuestion] = answer;
        setUserAnswers(newAnswers);
    };

    const handlePrevious = () => {
        const prevQues = activeQuestion - 1;
        prevQues >= 0 && setActiveQuestion(prevQues);
    };

    const handleNext = () => {
        if (activeQuestion + 1 < questions.length) {
            setActiveQuestion(activeQuestion + 1);
        }
    };

    const handleSubmitButton = () => {
        const totalScore = questions.reduce((acc, question, i) => {
            const answer = userAnswers[i];
            const correctAnswer = question.answer.toLowerCase();
            if (answer === correctAnswer) {
                return acc + 1;
            }
            return acc;

        }, 0);
        setScore(totalScore);
    };

    if (questions.length === 0) {
        return <div className="bg-black">Loading...</div>;
    }

    return (
        <div className="bg-white">
            {score === 0 || score > 0 ? (
                <>
                    {
                        isLoading ? (
                            <div
                                className={"flex justify-center items-center h-screen"}
                            >
                            <svg role="status"
                                 className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"></path>
                            </svg>
                            </div>
                        ) : (
                            <div className="py-8">
                                <h1 className="text-3xl font-semibold text-center text-green-300 my-4">
                                    You scored {score} out of {questions.length}
                                </h1>
                                <br/>
                                <p className="text-xl text-center text-green-300">
                                    <button
                                        className="bg-green-400 py-2 px-6 font-bold text-white rounded"
                                        onClick={handleRegisterUser}
                                    >
                                        Apply
                                    </button>
                                    {" "}
                                    to the course with this score.
                                </p>
                                <br/>
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
                        )
                    }
                </>
            ) : (
                <div className="container  py-12">
                    <Options activeQuestion={activeQuestion} questions={questions} callbackfn={(answer, index) => {
                        const id = nanoid();
                        return (
                            <div
                                key={index}
                                className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-gray-200 rounded-xl "
                                onClick={(e) => handleAnswerOption(answer)}
                            >
                                <input
                                    type="radio"
                                    name={answer}
                                    value={answer}
                                    id={id}
                                    checked={answer === userAnswers[activeQuestion]}
                                    onChange={(e) => handleAnswerOption(answer)}
                                    className="w-6 h-6 bg-black"
                                />
                                <label htmlFor={id}
                                       className="ml-6 text-gray-600">{questions[activeQuestion][answer]}</label>
                            </div>
                        )
                    }}/>
                    <div className="flex justify-between w-full mt-4 text-white">
                        <button
                            onClick={handlePrevious}
                            className="w-[49%] py-3 bg-indigo-600 rounded-lg"
                        >
                            Previous
                        </button>
                        <button
                            onClick={
                                activeQuestion + 1 === questions.length
                                    ? handleSubmitButton
                                    : handleNext
                            }
                            className="w-[49%] py-3 bg-indigo-600 rounded-lg"
                        >
                            {activeQuestion + 1 === questions.length ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestExam;

export const getServerSideProps = async ({locale}) => {
    return {
        props: {
            messages: (await import(`../../../../messages/${locale}.json`)).default,
        },
    };
};

function Options(props) {
    return <>
        <div className="flex  flex-col items-start w-full">
            <h4 className="mt-6 text-xl text-black">
                Question {props.activeQuestion + 1} of {props.questions.length}
            </h4>
            <div className="mt-4 text-2xl text-gray-800">
                {props.questions[props.activeQuestion]?.question}
            </div>
        </div>
        <div className="flex  flex-col w-full">
            {Object.keys(props.questions[props.activeQuestion]).filter(opt => ['a', 'b', 'c', 'd'].includes(opt))?.map(props.callbackfn)}
        </div>
    </>;
}
