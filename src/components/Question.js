import "../styles/Question.css";
import { QuestionsIntro } from "../data/English";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {AddStat} from '../helpers/HandleStats';

const Question = () => {
  const [audio, setAudio] = useState(new Audio(QuestionsIntro[0].audio));
  const playAudio = () => audio.play();
  const [answerUser, setAnswerUser] = useState();
  const [correct, setCorrect] = useState(0);
  const navigate = useNavigate();

  const checkAnswer = (answer) => {
    const answerSounds = {
      correct:
        "https://docs.google.com/uc?export=download&id=1g9TwgJgL7UUXE7FjAhC1D3ypbTLUaApa",
      incorrect:
        "https://docs.google.com/uc?export=download&id=1fhXzXUB5MWUsDyplFT66JlK2-mWj_SuP",
    };
    if (question.correctAnswer === answer) {
      let sound = new Audio(answerSounds.correct);
      sound.play();
      // setAudio(new Audio(answerSounds.correct));
      playAudio()
      Swal.fire({
        title: "Respuesta Correcta!",
        icon: "success",
        confirmButtonColor: "#79ea02",
        confirmButtonText: "Siguiente",
      }).then((result) => {
        if (result.isConfirmed) {
          nextQuestion();
          Add('addCorrect');
        };
      });
    } else {
      let sound = new Audio(answerSounds.incorrect);
      sound.play();
      Swal.fire({
        title: "Respuesta Incorrecta!",
        text: `La respuesta correcta era: "${question.correctAnswer}".`,
        icon: "error",
        confirmButtonColor: "#dc3545",
        confirmButtonText: "Siguiente",
      }).then((result) => {
        if (result.isConfirmed) {
          nextQuestion();
          Add('addIncorrect');
        };
      });
    }
  };

  const setQuestionState = (id) => {
    let question = {};
    QuestionsIntro.forEach((e) => {
      if (e.id === id) {
        question = e;
      }
    });
    setQuestion(question);
  };

  const getQuestion = (id) => {
    let question = {};
    QuestionsIntro.forEach((e) => {
      if (e.id === id) {
        question = e;
      }
    });
    return question;
  };

  const Add = (type) => {
    let user = JSON.parse(localStorage.getItem('user'));
    if(type==='addCorrect'){
      user.correctAnswers = user.correctAnswers + 1;
    } else if (type==='addIncorrect'){
      user.incorrectAnswers = user.incorrectAnswers + 1;
    }
    localStorage.setItem('user', JSON.stringify(user))
  };

  const nextQuestion = () => {
    let idQuestion = localStorage.getItem("id-question");
    let nextQuestionId = JSON.parse(idQuestion) + 1;
    if (nextQuestionId > 6) {
        localStorage.removeItem('id-question')
        let user = JSON.parse(localStorage.getItem('user'));
        user.languageStats.English = 1;
        AddStat(user.id, user);
        localStorage.setItem('user', JSON.stringify(user));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nivel Completado!',
          showConfirmButton: false,
          timer: 1500
        })  
        navigate(-1)
    } else {
      localStorage.setItem("id-question", nextQuestionId);
      let audioUrl = getQuestion(nextQuestionId).audio;
      setAudio(new Audio(audioUrl));
      setQuestionState(JSON.parse(localStorage.getItem("id-question")));
    }
  };

  const [question, setQuestion] = useState({});
  useEffect(() => {
    localStorage.setItem("id-question", 1);
    console.log(JSON.parse(localStorage.getItem('user')))
    setQuestionState(1);
  }, []);
  return (
    <div className="globalDIV">
      <div className="questionDIV">
        {question.type === "listen" ? (
          <>
            <h1 className="questionInfo">Escucha y aprende</h1>
            <div className="play">
              <img
                className="playIMG"
                onClick={playAudio}
                alt="playIcon"
                src="https://img.icons8.com/ios-glyphs/115/79ea02/play-button-circled--v1.png"
              />
              <audio id="audio">
                <source src={question.audio} />
              </audio>
              <p className="questionWord">{question.word}</p>
              <div>
                <img src={question.img} alt="questionIMG" />
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="questionInfo">Escucha y elige</h1>
            <div className="listenDIV">
              <img
                className="playIMG_listen"
                onClick={playAudio}
                alt="playIcon"
                src="https://img.icons8.com/ios-glyphs/115/79ea02/play-button-circled--v1.png"
              />
              <audio id="audio">
                <source src={question.audio} />
              </audio>
              <form className="optionsDIV">
                <div className="form-check option">
                  <input
                    name="answer"
                    className="form-check-input"
                    type="radio"
                    onChange={() => {
                      setAnswerUser(question.answers.answer1);
                    }}
                    id="option-1"
                  />
                  <label className="form-check-label " for="option-1">
                    {question.type === "choose" ? question.answers.answer1 : ""}
                  </label>
                </div>
                <div className="form-check option">
                  <input
                    name="answer"
                    className="form-check-input"
                    type="radio"
                    onChange={() => {
                      setAnswerUser(question.answers.answer2);
                    }}
                    id="option-2"
                  />
                  <label className="form-check-label " for="option-2">
                    {question.type === "choose" ? question.answers.answer2 : ""}
                  </label>
                </div>
                <div className="form-check option">
                  <input
                    name="answer"
                    className="form-check-input"
                    type="radio"
                    onChange={() => {
                      setAnswerUser(question.answers.answer3);
                    }}
                    id="option-3"
                  />
                  <label className="form-check-label " for="option-3">
                    {question.type === "choose" ? question.answers.answer3 : ""}
                  </label>
                </div>
              </form>
            </div>
          </>
        )}
        <div className="butonDIV">
          {question.type === "listen" ? (
            <button className="buttonNext" onClick={nextQuestion}>
              Siguiente
            </button>
          ) : (
            <button
              className="buttonNext"
              onClick={() => checkAnswer(answerUser)}
            >
              Comprobar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
