import { DiJavascript } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { PiFileHtmlFill } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import Link from "next/link";

export default function StudyingCodingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-black to-gray-400 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Studying Coding</h1>
            <p className="text-lg">Improve your coding skills with us!</p>
          </div>
          <div>
            <Link
              href="/contactus"
              className="text-2xl text-white bg-black p-2 rounded-md font-bold hover:text-blue-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md shadow-gray-400 p-6 border border-gray-200 h-60">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              HTML Basics
            </h2>
            <p className="text-gray-700 mb-4">
              Learn the fundamentals of HTML.
            </p>
            <div className="flex justify-center items-center">
              <PiFileHtmlFill className="text-6xl text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border  shadow-gray-400  border-gray-200 ">
            <h2 className="text-xl font-semibold mb-2 text-green-600">
              CSS Styling
            </h2>
            <p className="text-gray-700 mb-4">Master the art of CSS styling.</p>
            <div className="flex justify-center items-center">
              <FaCss3 className="text-6xl text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border  shadow-gray-400  border-gray-200">
            <h2 className="text-xl font-semibold mb-2 text-yellow-600">
              JavaScript Fundamentals
            </h2>
            <p className="text-gray-700 mb-4">
              Learn the basics of JavaScript.
            </p>
            <div className="flex justify-center items-center">
              <DiJavascript className="text-6xl text-yellow-600" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border  shadow-gray-400  border-gray-200 h-60">
            <h2 className="text-xl font-semibold mb-2 text-red-600">Python</h2>
            <p className="text-gray-700 mb-4">Learn the basics of Python.</p>
            <div className="flex justify-center items-center">
              <FaPython className="text-6xl text-red-600" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border  shadow-gray-400  border-gray-200">
            <h2 className="text-xl font-semibold mb-2 text-brown-600">
              Tailwind CSS.
            </h2>
            <p className="text-gray-700 mb-4">Master the Tailwind CSS.</p>
            <div className="flex justify-center items-center">
              <SiTailwindcss className="text-6xl text-brown-600" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border  border-gray-200">
            <h2 className="text-xl font-semibold mb-2 text-pink-600">SQL</h2>
            <p className="text-gray-700 mb-4">
              Learn the queries and master it.
            </p>
            <div className="flex justify-center items-center">
              <GrMysql className="text-6xl text-pink-600" />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gradient-to-r from-black to-gray-400 text-white py-4 text-center">
        <p>&copy; 2024 Studying Coding. All rights reserved.</p>
      </footer>
    </div>
  );
}
