import andreaskeller from "../img/andreaskeller.png";

export default function Home() {
  return (
    <main className="lg:relative lg:flex justify-between items-center mt-10">
      <img
        className="mx-auto max-h-full max-w-full order-2"
        src={andreaskeller}
        alt="Andreas Keller"
      />
      <div className="flex-1 order-1 py-4 lg:pr-4 xl:pr-16 mt-8 lg:mt-0">
        <h2 className="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none lg:text-4xl">
          Hi, I'm Andreas, a web developer and entrepreneur.
        </h2>
        <p className="mt-3 mx-auto text-lg text-gray-500 sm:text-xl md:mt-5">
          At the moment I work on a{" "}
          <a
            className="bg-blue-50 hover:bg-blue-200 border-blue-400 border-b-2"
            href="https://www.melectronics.ch/de/cp/videoberatung"
            target="_blank"
            rel="noopener noreferrer"
          >
            innovation project
          </a>{" "}
          with Migros & INNOArchitects and I'm the cofounder of two startups,{" "}
          <a
            className="bg-blue-50 hover:bg-blue-200 border-blue-400 border-b-2"
            href="https://www.mirroco.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            mirroco
          </a>{" "}
          and{" "}
          <a
            className="bg-blue-50 hover:bg-blue-200 border-blue-400 border-b-2"
            href="https://cine.equipment"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cine.equipment
          </a>
          .
        </p>
        <p className="mt-3 mx-auto text-lg text-gray-500 sm:text-xl md:mt-5">
          I write about building modern websites with{" "}
          <a
            className="bg-blue-50 hover:bg-blue-200 border-blue-400 border-b-2"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          and making money on the internet through consulting and products.
        </p>
      </div>
    </main>
  );
}
