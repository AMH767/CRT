import { useContext } from "react";
import ApiContext from "../context/context";
import "./resultQuiz.css"
import { Link } from "react-router-dom"

const ResultQuiz = () => {
    const context = useContext(ApiContext)
    return (

        <>
            <section className="container_resultQuiz">
                {
                    context.UserScore <= 2 ?
                        <h3>
                            У тебя <span >{context.UserScore}</span> продолжай обучение и у тебя все получиться <br /> для этого 
                            повышай уровень знаний с помощью <br/> телеграмм бота <a href= "https://t.me/DignalTEXN_bot" >К ботам</a>.
                        </h3>
                        : ""
                }

                {
                    context.UserScore < 6 && context.UserScore > 2 ?
                        <h3>
                            Правильных ответов <span >{context.UserScore}</span> из
                            <span > {context.questions.length}</span>
                        </h3>

                        : ""
                }

                {
                    context.UserScore >= 6 ?
                        <h3>
                            У тебя <span>{context.UserScore}</span> Продолжай обучение с помощью ботов и повышай уровень знаний <a href= "https://t.me/DignalTEXN_bot" >К ботам</a>.
                        </h3>
                        : ""
                }
                <div className="buttons">
                    <Link onClick={() => context.setUserScore(0)} to={"/"} className="button quit">Назад</Link>
                    <Link onClick={() => context.setIsRunning(true) || context.setUserScore(0)} to={"/boxQuiz"} className="button restart">Еще раз</Link>
                </div>
            </section>
        </>

    );
}

export default ResultQuiz;