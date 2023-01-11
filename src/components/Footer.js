import "./Footer.scss";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="container my-5">
        <div className="d-flex flex-column align-items-center">
          <FaReact className="home-icon" />
          Built with React
        </div>
        <p>Holt's Code &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
export default Footer;
