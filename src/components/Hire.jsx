export default function Hire() {
  return (
    <>
      <section className="showcase">
        <div className="overlay flex flex-col items-center justify-center">
          <div className="form-wrapper flex flex-col w-9/12 gap-5 justify-around border border-solid border-orange-500 p-5 rounded lg:flex-row lg:w-7/12">
            <div className="hire-me transition-all bg-orange-500/75 p-10 rounded md:px-4 lg:flex-1">
              <h2 className="hire-me text-white text-center text-5xl font-semibold mb-5 lg:mt-10 xl:text-5xl">
                Hire Me
              </h2>
              <p className="replies text-white w-100 m-auto text-center text-md font-semibold mb-5 w-56 xl:text-2xl">
                Replies within 24 hours
              </p>
            </div>

            <form
              method="post"
              className="flex flex-col justify-center align-middle gap-3 w-100 mt-3 "
            >
              <input
                type="text"
                placeholder="Enter your username"
                required
                className="py-2 px-4 rounded border border-solid border-orange-500 text-orange-500 placeholder-orange-500  bg-white/10 hover:border-yellow-100"
              />
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="py-2 px-4 rounded border border-solid border-orange-500  text-orange-500 placeholder-orange-500 bg-white/10 hover:border-yellow-100"
              />
              <textarea
                cols="30"
                rows="5"
                placeholder="Enter message"
                required
                className="py-2 px-4 rounded border border-solid border-orange-500 text-orange-500 placeholder-orange-500  bg-white/10 hover:border-yellow-100"
              ></textarea>
              <button className="transition-all bg-white/10 rounded py-2 px-4 text-orange-500 border border-solid border-orange-500 cursor-pointer hover:bg-orange-500/75 hover:text-white hover:border-none">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
