import "./Layout.css";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="app-root">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            MyApp
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/health" className="nav-link">
              Health
            </Link>
            <Link to="/cv" className="cv-button">
              CV
            </Link>
          </div>
        </div>
      </nav>

      <main className="app-content">{children}</main>

      <footer className="app-footer">
        <span>© {new Date().getFullYear()} MyApp</span>
      </footer>
    </div>
  );
}
