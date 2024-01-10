import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section class="text-gray-600 body-font bg-red-200">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">JSON TO REACT FORMS</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Just enter the json UI schema to the editor and let the editor do the rest of the magic. The platform will give you the UI of the form depending upon the JSON schema you entered.
              Remember to enter a valid JSON data.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Schema</h2>
              <p class="leading-relaxed text-base mb-4">Make sure youe entere the correct schema.</p>
            </div>
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Samples</h2>
              <p class="leading-relaxed text-base mb-4">If you want to have sample json data which is valid in the platform please click on the following: </p>
              <NavLink class="text-indigo-500 inline-flex items-center" to="/sample">
                <div className="text-green-500"> GET SAMPLE JSON</div>
                <div>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </NavLink>
            </div>
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Features</h2>
              <p class="leading-relaxed text-base mb-4 ">Enter the JSON data to the left and to the right side get the required form.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
