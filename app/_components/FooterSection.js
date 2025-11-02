import React from "react";

const FooterSection = () => (
  <div className="heading_section bg-primary-700 text-gray-300">
    <div className="footer w-5/6 mx-auto text-center">
      <div className="sub flex-1 p-8">
        <div className="text-3xl mb-3 uppercase">Contact Us</div>
        <div className="info">
          <div className="name">Pizza Parlour</div>
          <div className="name text-sm">
            Street 4996 Brown Bear Drive <br />
            City Mira Loma, State CA, Full California <br />
            Zip Code 91752 <br />
            Phone Number 951-634-4557 <br />
            Mobile Number 951-903-8940
          </div>
        </div>
      </div>
      <div className="sub flex p-5 w-5/6 mx-auto border-t">
        <div className="cursor-pointer hover:underline items mx-auto">
          Our Partners
        </div>
        <div className="cursor-pointer hover:underline items mx-auto">
          Policy
        </div>
        <div className="cursor-pointer hover:underline items mx-auto">
          Facilities
        </div>
        <div className="cursor-pointer hover:underline items mx-auto">
          Developer
        </div>
      </div>
    </div>
  </div>
);

export default FooterSection;
