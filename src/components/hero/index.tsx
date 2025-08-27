export default function Hero() {
  return (
    <section className="">
      <div className="flex justify-center">
        <div className=" text-xl  font-serif  shadow-md shadow-stone-600  mt-12 px-4 py-2 rounded-lg ">
          Front-End & Wed3 Developer
        </div>
      </div>

      <div className="flex flex-col items-center text-center mt-5 font-serif">
        <div className="text-4xl lg:text-5xl md:text-4xl">
          <span>Creating a </span>
          <span className="text-orange-400">digital</span>
        </div>
        <div className="text-4xl lg:text-5xl md:text-4xl text-orange-300">
          tomorrow
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-xl mt-3 font-serif ml-6 text-center flex flex-wrap justify-center">
          <span>Delivering exceptional quality with&nbsp;</span>
          <span className="text-orange-400">Next.js&nbsp;</span>
          <span>and&nbsp;</span>
          <span className="text-orange-300">Solidity</span>
        </div>
      </div>
    </section>
  );
}
