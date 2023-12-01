import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="grid grid-cols-1 gap-3 text-center bg-orange-500/50 h-32">
        <div className="flex justify-evenly align-baseline gap-3 pt-5">
          <FaGithub className="transition-all cursor-pointer text-5xl hover:text-orange-500" />
          <FaLinkedin className="transition-all cursor-pointer text-5xl hover:text-orange-500" />
          <FaEnvelope className="transition-all cursor-pointer text-5xl hover:text-orange-500" />
        </div>
        <small className="text-white">
          &copy;<span className="footer-span text-orange-500">EMcKee</span> |{" "}
          {new Date().getFullYear()}
        </small>
      </footer>
    </>
  );
}
