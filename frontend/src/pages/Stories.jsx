import Navbar from "../components/Navbar";

function Stories() {
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
          Stories about people, moments,
          <br />
          and the little things that stay with us.
        </p>

        <section className="story-grid">

          <div className="story-card">
            <div className="story-icon">🌧️</div>

            <h2>Aanya</h2>

            <p>
              A girl who finds comfort in rainy evenings
              and quiet windows.
            </p>

            <span>Read story →</span>
          </div>

          <div className="story-card">
            <div className="story-icon">☕</div>

            <h2>Kabir</h2>

            <p>
              Every evening at 6, the same chai,
              the same corner, a different thought.
            </p>

            <span>Read story →</span>
          </div>

          <div className="story-card">
            <div className="story-icon">💌</div>

            <h2>Meera</h2>

            <p>
              Letters she writes but never sends,
              carrying pieces of yesterday.
            </p>

            <span>Read story →</span>
          </div>

          <div className="story-card">
            <div className="story-icon">🎸</div>

            <h2>Aarav</h2>

            <p>
              A guitar, a quiet room, and songs
              that say what words cannot.
            </p>

            <span>Read story →</span>
          </div>

        </section>
      </main>
    </div>
  );
}

export default Stories;