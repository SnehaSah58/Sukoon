import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <Navbar />

      <main className="home-content">

        <p className="home-label">WELCOME TO SUKOON</p>

        <h1>
          Take a breath.
          <br />
          You're here.
        </h1>

        <p className="home-description">
          A quiet little space for music, stories,
          <br />
          and thoughts you don't always say out loud.
        </p>

        <br> 
        </br>

        <section className="space-cards">

          <Link to="/listen" className="space-card">
            <span className="space-icon">🎧</span>

            <h2>Listen</h2>

            <p>
              Music for whatever you're feeling.
            </p>
          </Link>

          <br />

          <Link to="/experiences" className="space-card">
            <span className="space-icon">💭</span>

            <h2>Experiences</h2>

            <p>
              Sometimes it helps to know you're not alone.
            </p>
          </Link>

          <Link to="/stories" className="space-card">
            <span className="space-icon">📖</span>

            <br/>

            <h2>Stories</h2>

            <p>
              Little worlds, one story at a time.
            </p>
          </Link>

        </section>

      </main>

    </div>
  );
}

export default Home;