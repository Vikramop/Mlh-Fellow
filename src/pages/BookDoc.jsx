import React from "react";
import { Link } from "react-router-dom";
import Products from "../Data/Doc.json";
import "./BookDoc.css";

const BookDoc = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
            myHos
          </h1>
        </Link>
        <div className="text-orange-600 text-3xl font-bold my-4">
          Book your Appointment
        </div>
      </div>
      <div className="h-70 grid grid-cols-2 gap-4 content-start">
        {Products &&
          Products.map((products) => (
            <div
              class="max-w-sm rounded overflow-hidden shadow-lg"
              key={products.id}
            >
              <img src={products.img} class="w-50%" alt="Dr" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{products.name}</div>
                <div>
                  <strong>{products.spl}</strong>
                </div>

                <p class="text-cyan-500 text-base">{products.desc}</p>
              </div>
              <div class="px-6 pt-2 pb-2">
                <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Book ur appointment
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookDoc;
