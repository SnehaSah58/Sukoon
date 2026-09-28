import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import aanya from "../data/aanya";
import room307 from "../data/room307";
import meera from "../data/meera";
import weddingChaos from "../data/weddingChaos";
import beforeWeSleep from "../data/beforeWeSleep";

function StoryDetails() {
  const { storyId } = useParams();

  const story = storyId === "aanya" ? aanya
      : storyId === "room-307" ? room307
      : storyId === "meera" ? meera
      : storyId === "weddingChaos" ? weddingChaos
      : storyId === "beforeWeSleep" ? beforeWeSleep
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

                if(scene.type === "food")  {
                  return(
                    <div className="story-food">
                      <span className="food-icon">{scene.icon}</span>

                      <p className="food-label">{scene.label}</p>
                      <h3>{scene.title}</h3>
                      <p className="food-text">{scene.text}</p>
                    </div>
                  );
                }

                if (scene.type === "gift") {
                  return (
                    <div className="story-gift">
                      <span className="gift-icon">{scene.icon}</span>

                      <p className="gift-label">{scene.label}</p>

                      <h3>{scene.title}</h3>

                      <p className="gift-text">{scene.text}</p>
                    </div>
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

                if (scene.type === "cctv") {
                  return (
                    <div className="story-cctv">
                      <span className="cctv-icon">📹</span>

                      <p className="cctv-label">CCTV FOOTAGE</p>

                      <h3>{scene.time}</h3>

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

                if (scene.type === "shadow") {
                  return (
                    <div className="story-shadow">
                      <div className="shadow-light"></div>
                      <div className="shadow-figure">
                        <div className="shadow-head"></div>
                        <div className="shadow-body"></div>
                      </div>
                      <div className="shadow-content">
                        <p className="shadow-label">{scene.label}</p>
                        <h3>{scene.title}</h3>
                        <p className="shadow-text">{scene.text}</p>
                      </div>
                    </div>
                  );
                }

                if (scene.type === "letter") {
                return (
                  <div
                    className="story-letter"
                    key={index} >
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

              if (scene.type === "summerMemory") {
                return (
                  <div className="story-summer-memory">
                    <div className="summer-memory-overlay"></div>
                    <div className="summer-memory-content">
                      <p className="summer-memory-label">{scene.label}</p>
                      <h3>{scene.title}</h3>
                      <p className="summer-memory-text">
                        {scene.text}
                      </p>
                    </div>
                  </div>
                );
              }

              if (scene.type === "chatMessage") {
                return (
                  <div className="story-chat-message">
                    <div className="chat-message-header">
                      <span className="chat-message-character">
                        {scene.character}
                      </span>
                    </div>
                    <div className="chat-message-bubble">
                      {scene.text}
                    </div>
                  </div>
                );
              }

              if (scene.type === "voiceCall") {
                return (
                  <div className="story-voice-call">
                    <div className="voice-call-icon">📞</div>
                    <p className="voice-call-label">VOICE CALL</p>
                    <h3>{scene.character}</h3>
                    {scene.time && (
                      <p className="voice-call-time">{scene.time}</p>
                    )}
                    <p className="voice-call-text">{scene.text}</p>
                  </div>
                );
              }

              if (scene.type === "videoCall") {
                return (
                  <div className="story-video-call">
                    <div className="video-call-screen">
                      <div className="video-call-person">
                        <div className="video-call-avatar">👤</div>
                        <span>{scene.character}</span>
                      </div>

                      <div className="video-call-status">
                        <span className="video-call-dot"></span>
                        Connected
                      </div>
                    </div>
                    <div className="video-call-info">
                      <p className="video-call-label">VIDEO CALL</p>
                      {scene.time && (
                        <p className="video-call-time">{scene.time}</p>
                      )}
                      <p className="video-call-text">{scene.text}</p>
                    </div>
                  </div>
                );
              }

              if (scene.type === "thinking") {
              return (
                <div className="story-thinking">
                  <div className="thinking-mark"> 💭 “</div>
                  <p className="thinking-label">{scene.label}</p>
                  <p className="thinking-text">
                    {scene.text}
                  </p>
                  <div className="thinking-mark thinking-end">”</div>
                </div>
              );
            }

            if (scene.type === "meeting") {
              return (
                <div className="story-meeting">
                  <div className="meeting-glow"></div>
                  <div className="meeting-content">
                    <p className="meeting-label">{scene.label}</p>
                    <div className="meeting-icon">{scene.icon}</div>
                    <h3>{scene.title}</h3>
                    <p className="meeting-text">{scene.text}</p>
                  </div>
                </div>
              );
            }

            if (scene.type === "romanticMoment") {
              return (
                <div className="story-romantic">
                  <div className="romantic-glow"></div>
                  <div className="romantic-content">
                    <div className="romantic-icon">{scene.icon}</div>
                    <p className="romantic-label">{scene.label}</p>
                    <h3>{scene.title}</h3>
                    <p className="romantic-text">{scene.text}</p>
                  </div>
                </div>
              );
            }

            if (scene.type === "temple") {
              return (
                <div className="story-temple">
                  <div className="temple-glow"></div>

                  <div className="temple-content">
                    <div className="temple-icon">{scene.icon}</div>

                    <p className="temple-label">{scene.label}</p>

                    <h3>{scene.title}</h3>

                    <p className="temple-text">
                      {scene.text}
                    </p>

                    <div className="temple-bell">🔔</div>
                  </div>
                </div>
              );
            }


            if (scene.type === "photoMoment") {
              return (
                <div className="story-photo-moment">
                  <div className="photo-frame">
                    <div className="photo-icon">{scene.icon}</div>

                    <p className="photo-label">{scene.label}</p>

                    <h3>{scene.title}</h3>

                    <p className="photo-text">
                      {scene.text}
                    </p>
                  </div>
                </div>
              );
            }

            if (scene.type === "restaurant") {
              return (
                <div className="story-restaurant">
                  <div className="restaurant-glow"></div>

                  <div className="restaurant-content">
                    <div className="restaurant-icon">{scene.icon}</div>

                    <p className="restaurant-label">{scene.label}</p>

                    <h3>{scene.title}</h3>

                    <p className="restaurant-text">
                      {scene.text}
                    </p>

                    <div className="restaurant-lights">
                      <span>•</span>
                      <span>•</span>
                      <span>•</span>
                    </div>
                  </div>
                </div>
              );
            }

            if (scene.type === "proposal") {
              return (
                <div className="story-proposal">
                  <div className="proposal-glow"></div>
                  <div className="proposal-content">
                    <div className="proposal-icon">{scene.icon}</div>
                    <p className="proposal-label">{scene.label}</p>
                    <h3>{scene.title}</h3>
                    <p className="proposal-text">
                      {scene.text}
                    </p>
                    <div className="proposal-ring">💍</div>
                  </div>
                </div>
              );
            }

            if (scene.type === "voiceNote") {
              return (
                <div className="story-voice-note">
                  <div className="voice-note-icon">🎙️</div>

                  <p className="voice-note-label">{scene.label}</p>

                  <div className="voice-note-player">
                    <span className="voice-note-play">▶</span>

                    <div className="voice-note-line">
                      <span></span>
                    </div>

                    <span className="voice-note-time">
                      {scene.duration}
                    </span>
                  </div>

                  <p className="voice-note-text">
                    {scene.text}
                  </p>

                  <span className="voice-note-sender">
                    — {scene.sender}
                  </span>
                </div>
              );
            }

            if (scene.type === "promise") {
              return (
                <div className="story-promise">
                  <div className="promise-glow"></div>
                  <div className="promise-content">
                    <div className="promise-icon">{scene.icon}</div>
                    <p className="promise-label">{scene.label}</p>
                    <h3>{scene.title}</h3>
                    <p className="promise-text">
                      {scene.text}
                    </p>
                  </div>
                </div>
              );
            }

            if (scene.type === "jealousy") {
              return (
                <div className="story-jealousy">
                  <div className="jealousy-glow"></div>
                  <div className="jealousy-content">
                    <div className="jealousy-icon">{scene.icon}</div>
                    <p className="jealousy-label">{scene.label}</p>
                    <h3>{scene.title}</h3>
                    <p className="jealousy-text">
                      {scene.text}
                    </p>
                  </div>
                </div>
              );
            }

            if (scene.type === "photoEvidence") {
              return (
                <div className="story-photo-evidence">
                  <div className="evidence-frame">
                    <div className="evidence-icon">{scene.icon}</div>

                    <p className="evidence-label">{scene.label}</p>

                    <h3>{scene.title}</h3>

                    <div className="evidence-photo">
                      📷
                    </div>

                    <p className="evidence-text">
                      {scene.text}
                    </p>
                  </div>
                </div>
              );
            }

            if (scene.type === "happyEnding") {
              return (
                <div className="story-happy-ending">
                  <div className="happy-ending-glow"></div>

                  <div className="happy-ending-content">
                    <div className="happy-ending-icon">{scene.icon}</div>

                    <p className="happy-ending-label">{scene.label}</p>

                    <h3>{scene.title}</h3>

                    <p className="happy-ending-text">
                      {scene.text}
                    </p>

                    <div className="happy-ending-hug">
                      🫂
                    </div>

                    <div className="happy-ending-hearts">
                      <span>♥</span>
                      <span>♥</span>
                      <span>♥</span>
                    </div>
                  </div>
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
            const correctAnswer =  story.quiz[currentQuestion].correctAnswer;
              let answerClass = "";
              if (selectedAnswer !== null) {
              if (index === correctAnswer) {
                answerClass = "correct";
              } 
              else if (index === selectedAnswer) {
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
                <div className="story-complete-actions">
                  <Link to="/stories" className="story-complete-button primary">
                    Read Another Story
                  </Link>

                  <Link to="/stories" className="story-complete-button secondary">
                    ← Back to Stories
                  </Link>
                </div>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default StoryDetails;