import React from "react";
import { Link } from "react-router-dom";
const NotFound = ({ Heading, SubHeading, Desc }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 font-extrabold tracking-tight text-teal-600 text-7xl lg:text-9xl dark:text-teal-500">
            {Heading}
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            {SubHeading}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
            {Desc}
          </p>
          <Link
            to={"/"}
            className="inline-flex text-white bg-teal-600 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;