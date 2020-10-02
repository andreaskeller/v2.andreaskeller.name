export default function Contact() {
  return (
    <div className="relative max-w-xl mx-auto mt-10">
      <div className="">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Contact me
        </h2>
        <p className="mt-8 text-lg leading-6 text-gray-500">
          Do you have a question or are you interested in working together? Please email me at{" "}
          <a
            className="bg-blue-50 hover:bg-blue-200 border-blue-400 border-b-2"
            href="mailto:andreas@andreaskeller.name"
          >
            andreas@andreaskeller.name
          </a>{" "}
          and introduce yourself.
        </p>

        <p className="mt-8 text-lg leading-6 text-gray-500">Looking forward to hearing from you!</p>
      </div>
    </div>
  );
}
