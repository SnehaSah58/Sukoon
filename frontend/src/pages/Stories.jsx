import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import aanya from "../data/aanya";

function Stories() {
  const stories = [aanya];
  return (
    <div className="stories-page">
      <Navbar />

      <main className="stories-content">

        <p className="stories-label">STORIES</p>

        <h1>
          Little worlds,
          <br />
          one story at a time.
        </h1>

        <p className="stories-description">
          Step into stories filled with memories,
          <br />
          mysteries, love, and little surprises.
        </p>

        <section className="story-grid">

          {stories.map((story) => (
            <Link
              to={`/stories/${story.id}`}
              className="story-card"
              key={story.id}
            >
              <div className="story-card-icon">
                {story.icon}
              </div>

              <div className="story-card-content">

                <p className="story-card-genre">
                  {story.genre.join(" • ")}
                </p>

                <h2>{story.title}</h2>

                <p>{story.shortDescription}</p>

                <span className="story-card-link">
                  Enter story →
                </span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Stories;