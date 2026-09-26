import { useParams } from "react-router-dom";
import { useState } from "react";
import aanya from "../data/aanya";
import room307 from "../data/room307";

function StoryDetails() {
  const { storyId } = useParams();

  const story = storyId === "aanya" ? aanya
      : storyId === "room-307" ? room307
      : null;

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (answerIndex) => {
  if (selectedAnswer !== null) return;
  setSelectedAnswer(answerIndex);
  if (answerIndex === story.quiz[currentQuestion].correctAnswer) {
    setScore((previousScore) => previousScore + 1);
    }
  };

const handleNextQuestion = () => {
  if (currentQuestion ===story.quiz.length - 1) {
    setQuizFinished(true);
    return;
  }
  setCurrentQuestion((previousQuestion) => previousQuestion + 1);
  setSelectedAnswer(null);
};

  if (!story) {
    return <h1>Story not found</h1>;
  }
  return (
    <div className="story-details-page">

      <header className="story-header">
        <span className="story-icon">
          {story.icon}
        </span>

        <p className="story-genre">
          {story.genre.join(" • ")}
        </p>
        <h1>{story.title}</h1>
        <p className="story-description">
          {story.shortDescription}
        </p>
      </header>

      <main className="story-content">
        {story.chapters.map((chapter) => (
          <section
            className="story-chapter"
            key={chapter.id}
          >
            <p className="chapter-label">
              CHAPTER {chapter.id}
            </p>
            <h2>{chapter.title}</h2>

            <div className="story-scenes">
              {chapter.scenes.map((scene, index) => {
                if (scene.type === "narration") {
                  return (
                    <p
                      className="story-narration"
                      key={index}
                    >
                      {scene.text}
                    </p>
                  );
                }

                if (scene.type === "dialogue") {
                  return (
                    <div className="story-dialogue" key={index}>
                      <p className="dialogue-character">
                        {scene.character}
                      </p>

                      <p className="dialogue-text">
                        “{scene.text}”
                      </p>
                    </div>
                  );
                }

                if (scene.type === "memory") {
                  return (
                    <div className="story-memory" key={index}>
                      <span className="memory-icon">◌</span>
                      <p className="memory-label">
                        MEMORY
                      </p>
                      <h3>{scene.title}</h3>
                      <p>{scene.text}</p>
                    </div>
                  );
                }

                if (scene.type === "cafe") {
                  return (
                    <div className="story-cafe" key={index}>
                      <span className="cafe-icon">☕</span>

                      <p className="cafe-time">
                        {scene.time}
                      </p>

                      <p className="cafe-text">
                        {scene.text}
                      </p>
                    </div>
                  );
                }

                if (scene.type === "clock") {
                  return (
                    <div
                      className="story-clock"
                      key={index}
                    >
                      <span>🕰️</span>
                      <strong>{scene.time}</strong>
                    </div>
                  );
                }

                if (scene.type === "phone") {
                  return (
                    <div className="story-phone">
                      <span className="phone-icon">☎️</span>

                      <p className="phone-label">INCOMING CALL</p>

                      <h3>{scene.time}</h3>

                      <p>{scene.text}</p>
                    </div>
                  );
                }

                if (scene.type === "whisper") {
                  return (
                    <div className="story-whisper">
                      <span className="whisper-icon">🗣️</span>
                      <p className="whisper-label">A VOICE</p>
                      <p className="whisper-text">
                        "{scene.text}"
                      </p>
                    </div>
                  );
                }

                if (scene.type === "oldRegister") {
                  return (
                    <div className="story-register">
                      <span className="register-icon">📖</span>
                      <p className="register-label">OLD HOTEL REGISTER</p>
                      <h3>{scene.title}</h3>
                      <p>{scene.text}</p>
                    </div>
                  );
                }

                if (scene.type === "mystery") {
                  return (
                    <div
                      className="story-mystery"
                      key={index}
                    >
                      <span className="mystery-icon">
                        🔎
                      </span>
                      <h3>{scene.title}</h3>
                      <p>{scene.text}</p>
                    </div>
                  );
                }

                if (scene.type === "letter") {
                return (
                  <div
                    className="story-letter"
                    key={index}
                  >
                    <span className="letter-icon">💌</span>
                    <p>{scene.text}</p>
                  </div>
                );
              }

              if (scene.type === "photograph") {
                return (
                  <div className="story-photograph" key={index}>
                    <div className="photo-frame">
                      <div className="photo-scene">
                        <span>🌧️</span>
                        <span>👧🏻 👦🏻 👧🏻</span>
                      </div>
                    </div>

                    <p className="photo-date">
                      {scene.date}
                    </p>
                  </div>
                );
              }
              return null;
              })}
            </div>
          </section>
        ))}

        {story.quiz && (
          <section className="story-quiz">
            {!quizStarted && !quizFinished && (
              <button
                onClick={() => setQuizStarted(true)}
              >
                Start Quiz 🎯
              </button>
        )}

        {quizStarted && !quizFinished && (
          <div>
            <p>
              Question {currentQuestion + 1} /{" "}
              {story.quiz.length}
            </p>
            <h2>
              {story.quiz[currentQuestion].question}
            </h2>

        {story.quiz[currentQuestion].options.map(
          (option, index) => {
            const correctAnswer =
              story.quiz[currentQuestion].correctAnswer;
              let answerClass = "";
              if (selectedAnswer !== null) {
              if (index === correctAnswer) {
                answerClass = "correct";
              } else if (index === selectedAnswer) {
                answerClass = "wrong";
              }
            }
            return (
              <button
                key={index}
                className={`quiz-option ${answerClass}`}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            );
          }
        )}

        {
          selectedAnswer !== null && (
            <p className="quiz-feedback">
            {selectedAnswer === story.quiz[currentQuestion].correctAnswer? "✨ Correct! You remembered that."
              : "🌙 Not quite. The correct answer is highlighted above."
              }
            </p>
          )}

        {
          selectedAnswer !== null && (
            <button onClick={handleNextQuestion}>
              Next →
            </button>
          )}
        </div>
      )}

        {quizFinished && (
          <div className="quiz-result">
                <p className="quiz-result-label">
                  STORY COMPLETE
                </p>

                <h2>
                  You made it to the end. 🌧️
                </h2>
                <p className="quiz-score">
                  {score} / {story.quiz.length}
                </p>
                <p className="quiz-result-text">
                  You remembered{" "}
                  {score === story.quiz.length
                    ? "every little detail."
                    : "some of the story."}
                </p>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default StoryDetails;