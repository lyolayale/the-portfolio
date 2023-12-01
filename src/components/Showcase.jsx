import { Link } from "react-router-dom";

export default function Showcase() {
  return (
    <>
      <section className="showcase">
        <div className="overlay flex flex-col items-center justify-center text-white px-5">
          <h1 className="text-5xl font-semibold text-right mb-5 lg:text-center lg:text-7xl lg:px-32">
            I Create Fullstack{" "}
            <span className="text-orange-500">Web Applications</span> and{" "}
            <span className="text-orange-500">Websites</span>
          </h1>

          <div className="ml-auto flex justify-center align-middle gap-2 lg:m-0">
            <Link
              to="/hire"
              className="bg-orange-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-orange-300"
            >
              Get Started
            </Link>
            <Link
              to="/projects"
              className="bg-white text-orange-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-orange-300 hover:text-white"
            >
              Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
