import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./componentslog/login";
import SignUp from "./componentslog/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./componentslog/profile";
import { auth } from "./componentslog/firebase";
import ApiContext from "./Componentsd/context/context";
import Home from "./Componentsd/home/Home";
import InfoQuiz from "./Componentsd/infoQuiz/InfoQuiz";
import BoxQuiz from "./Componentsd/boxQuiz/BoxQuiz";
import ResultQuiz from "./Componentsd/resultQuiz/ResultQuiz";
import bioImage from './5.png';
import bioImage2 from './4.png';
import bioImage3 from './77.png';
import bioImage4 from './3.png';
import bioImage5 from './7.png';
import bioImage6 from './9.png';
import bioImage7 from './8.png';
import bioImage8 from './11.png';
import ReactDOM from 'react-dom';
import App from './App';
import Trending from './pages/Trending';
import Train from './pages/train';
import Traincart from './pages/Traincart';
import Batter1b from './pages/Batter1b';
import Trendstr from './pages/Trendstr';

import Game from './componentsg/Game';
import Blog from './pages/blog';
import Blogone from './pages/Blogone';
import Blogtwo from './pages/Blogtwo';
import Memitwo from './helper/Memitwo';
import Test from './pages/Test';
import Strateg from './pages/Strateg';

import Profiletrend from './pages/Profiletrend';
import Animation from './pages/Animation';


const Appd = () => {
  const [questions, setQuestions] = useState([
    {
      numb: 1,
      question: "Какой паттерн образуется при наличии двух последовательных вершин с примерно одинаковыми ценовыми уровнями и промежуточным спадом?",
      answer: "Двойная вершина",
      options: [
        "Треугольник",
        "Голова и плечи",
        "Двойная вершина",
      ],
      image: bioImage, 
    },
    {
      numb: 2,
      question: "Как называется паттерн, который образуется при наличии двух последовательных впадин с примерно одинаковыми ценовыми уровнями и промежуточным подъемом?",
      answer: "Двойное дно",
      options: [
        "Двойное дно",
        "Голова и плечи",
        "Треугольник",
      ],
      image: bioImage2, 

    },
    {
      numb: 3,
      question: "Какой паттерн считается продолжением существующего тренда?",
      answer: "Флаг",
      options: [
        "Двойная вершина",
         "Флаг",
          "Клин",
         
          ],
      image: bioImage3, 

    },
    {
      numb: 4,
      question: "Какой паттерн обычно предвещает разворот текущего тренда?",
      answer: "Голова и плечи",
      options: [
        "Треугольник",
       "Флаг",
       "Голова и плечи",
      ],
      image: bioImage4, 
      
    },
    {
      numb: 5,
      question: "Какой из следующих паттернов может быть как продолжением тренда, так и его разворотом? ",
      answer: "Клин",
      options: [
        "Голова и плечи",
         "Двойное дно",
          "Клин",
          ],
      image: bioImage5, 

    },

    {
      numb: 6,
      question: "Какой паттерн часто используется для определения точки входа в рынок после коррекции? ",
      answer: "Флаг",
      options: [
        "Флаг",
         "Двойная вершина",
          "Треугольник",
          ],
      image: bioImage6, 
          
    },

    {
      numb: 7,
      question: "Какой паттерн образуется при сужении диапазона колебаний цены между двумя сходящимися трендовыми линиями?",
      answer: "Треугольник",
      options: [
      "Треугольник", 
      "Флаг",
      "Клин",
    ],
    image: bioImage7, 

    },
    {
      numb: 8,
      question: "При каком паттерне объемы торгов обычно снижаются перед вторым пиком? ",
      answer: "Голова и плечи",
      options: [
        "Двойная вершина",
        "Голова и плечи",
        "Двойное дно",
      ],
    image: bioImage8, 

    },
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const [UserScore, setUserScore] = useState(0);
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <ApiContext.Provider
      value={{
        questions: questions,
        setQuestions: setQuestions,
        isRunning: isRunning,
        setIsRunning: setIsRunning,
        UserScore: UserScore,
        setUserScore: setUserScore
      }}
    >
      <Router>
        <div >
          {/* <div className="formi">
            <div className="formi"> */}
              <Routes>
                {/* <Route path="/" element={<Trending />} /> */}
                <Route path="/test" element={<Test />} />
                <Route path="/strateg" element={<Strateg />} />

                <Route path="/infoQuiz" element={<InfoQuiz />} />
                <Route path="/boxQuiz" element={<BoxQuiz />} />
                <Route path="/resultQuiz" element={<ResultQuiz />} />
                <Route path="/trending" element={<App />} />
                <Route path="/Appd" element={<Appd />} />
                <Route path="/Game" element={<Game />} />
                <Route
                  path="/"
                  element={user ? <Navigate to="/Profiletrend" /> : <Login />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/App" element={<App />} />
                <Route path="/Train" element={<Train />} />
                <Route path="/Traincart" element={<Traincart />} />
                <Route path="/Batter1b" element={<Batter1b />} />
                <Route path="/Trendstr" element={<Trendstr />} />

                <Route path="/Blog" element={<Blog />} />
                <Route path="/Blogone" element={<Blogone />} />
                <Route path="/Blogtwo" element={<Blogtwo />} />
                <Route path="/Memitwo" element={<Memitwo />} />
                <Route path="/Profiletrend" element={<Profiletrend />} />
                <Route path="/Animation" element={<Animation />} />

              </Routes>
              <ToastContainer />
            </div>
          {/* </div>
        </div> */}
      </Router>
    </ApiContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Appd />);

export default Appd;