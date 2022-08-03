import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <div className="container my-5">
        <p>Holt's Code &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
export default Footer;
