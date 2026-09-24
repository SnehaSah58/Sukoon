import { useParams } from "react-router-dom";
import stories from "../data/stories";

function StoryDetails() {
  const { storyId } = useParams();

  const story = stories.find(
    (item) => item.id === storyId
  );

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

                return null;
              })}

            </div>
          </section>
        ))}

      </main>
    </div>
  );
}

export default StoryDetails;