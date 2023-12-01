import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex justify-between align-middle p-3 absolute w-full m-auto text-white">
        <div className="logo">
          <Link
            className="text-orange-400 text-3xl lg:text-5xl transition-all hover:text-orange-700/50"
            to="/"
          >
            EMcKee
          </Link>
        </div>

        <nav>
          <ul className="flex justify-normal align-middle pt-3 gap-3">
            <li>
              <Link
                to="/"
                className="transition-all bg-gradient-to-tr from-slate-200 to-orange-500 rounded-full p-2 px-4 hover:to-orange-950 hover:text-stone-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="transition-all bg-gradient-to-tr from-slate-200 to-orange-500 rounded-full p-2 px-4 hover:to-orange-950 hover:text-stone-200"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/hire"
                className="transition-all bg-gradient-to-tr from-slate-200 to-orange-500 rounded-full p-2 px-4 hover:to-orange-950 hover:text-stone-200"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
