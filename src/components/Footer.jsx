import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="footer logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            deserunt aspernatur eos libero, non sint, officia ab expedita
            deleniti quod qui tempora facere! Praesentium, modi perferendis?
            Laborum tenetur distinctio ut.
          </p>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+91 9876543210</li>
                <li>contact@aircart.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center text-gray-500 text-xs py-5">
          &copy; 2026 AirCart. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
