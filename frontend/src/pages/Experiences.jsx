import { useState } from "react";
import Navbar from "../components/Navbar";

function Experiences() {

  const [selectedMood, setSelectedMood] = useState("");
  const [experience, setExperience] = useState("");
  const [privacy, setPrivacy] = useState("private");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:5000/api/experiences",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mood: selectedMood,
          experience: experience,
          privacy: privacy,
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    console.log("Experience saved:", data);
    setSubmitMessage("🌙 Your experience has been saved.");
    setExperience("");
    setSelectedMood("");
  } catch (error) {
    console.error("Error saving experience:", error);
    setSubmitMessage("Something went wrong. Please try again.");
  }
};

  return (
    <div className="experiences-page">
      <Navbar />
      <main className="experiences-content">

        <p className="experiences-label">
          EXPERIENCES
        </p>

        <h1>
          How are you
          <br />
          feeling?
        </h1>

        <p className="experiences-description">
          You don't have to explain everything.
          <br />
          Just say what's on your mind.
        </p>


        <form
          className="experience-form"
          onSubmit={handleSubmit}
        >


          {/* MOODS */}

          <section className="mood-choice">

            <h2>
              Choose what feels closest.
            </h2>

            <div className="experience-moods">

              <button
                type="button"
                className={
                  selectedMood === "sad"
                    ? "experience-mood active"
                    : "experience-mood"
                }
                onClick={() => setSelectedMood("sad")}
              >
                😔
                <span>Sad</span>
              </button>


              <button
                type="button"
                className={
                  selectedMood === "calm"
                    ? "experience-mood active"
                    : "experience-mood"
                }
                onClick={() => setSelectedMood("calm")}
              >
                😌
                <span>Calm</span>
              </button>


              <button
                type="button"
                className={
                  selectedMood === "loved"
                    ? "experience-mood active"
                    : "experience-mood"
                }
                onClick={() => setSelectedMood("loved")}
              >
                ❤️
                <span>Loved</span>
              </button>


              <button
                type="button"
                className={
                  selectedMood === "anxious"
                    ? "experience-mood active"
                    : "experience-mood"
                }
                onClick={() => setSelectedMood("anxious")}
              >
                😰
                <span>Anxious</span>
              </button>


              <button
                type="button"
                className={
                  selectedMood === "lost"
                    ? "experience-mood active"
                    : "experience-mood"
                }
                onClick={() => setSelectedMood("lost")}
              >
                😶
                <span>Lost</span>
              </button>


              <button
                type="button"
                className={
                  selectedMood === "hopeful"
                    ? "experience-mood active"
                    : "experience-mood"
                }
                onClick={() => setSelectedMood("hopeful")}
              >
                ✨
                <span>Hopeful</span>
              </button>
            </div>
          </section>


          {/* TEXT AREA */}

          <section className="experience-writing">

            <label htmlFor="experience">
              What's on your mind?
            </label>

            <textarea
              id="experience"
              value={experience}
              onChange={(event) =>
                setExperience(event.target.value)
              }
              placeholder="Write whatever you want..."
              rows="7"
            />

          </section>


          {/* PRIVACY */}

          <section className="privacy-choice">

            <h2>
              Who can see this?
            </h2>


            <label className="privacy-option">

              <input
                type="radio"
                name="privacy"
                value="private"
                checked={privacy === "private"}
                onChange={(event) =>
                  setPrivacy(event.target.value)
                }
              />

              <span>
                🔒 Keep it private
              </span>

            </label>


            <label className="privacy-option">

              <input
                type="radio"
                name="privacy"
                value="anonymous"
                checked={privacy === "anonymous"}
                onChange={(event) =>
                  setPrivacy(event.target.value)
                }
              />

              <span>
                🌍 Share anonymously
              </span>

            </label>

          </section>


          {/* SUBMIT */}

          <button
            type="submit"
            className="experience-submit"
          >
            Share experience
          </button>
          {submitMessage && (
          <p className="submit-message">
          {submitMessage}
          </p>
          )}
        </form>
      </main>
    </div>
  );
}

export default Experiences;