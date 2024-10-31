import Image from "next/image";
import Link from "next/link";
import React from "react";
import mart from "@/public/mart.jpg";
import mart2 from "@/public/mart2.jpg";

export default function Landlord() {
  return (
    <div className=" relative bg-white text-black px-5 lg:px-20">
      <section>
        <div className="pt-16 lg:flex justify-between items-start gap-10">
          <div className=" flex-1">
            <h2 className=" aest ">
              Be a Part of Bokku Mart Journey, become one of our lessors
            </h2>
            <p className=" mt-2">
              ​Bokku Mart is exploring new locations to continue our dynamic
              expansion and we are searching for the best locations or
              properties available. Our store locations are carefully selected
              because we want to be conveniently established where the customers
              are living.​
            </p>
          </div>
          <div className=" mt-5 lg:mt-0 w-[500px] xl:w-[600px]">
            <Image
              src={mart}
              alt="bokku store image"
              className=" w-full block"
            />
          </div>
        </div>
        <div className=" pt-16 lg:flex justify-between items-start gap-10">
          <div className=" flex-[40%]">
            <h2 className=" aest">Location Criteria</h2>
            <ul className=" list-item ml-7 mt-5">
              <li>
                Commercial building with a floor space of between 300sqm and
                500sqm​
              </li>
              <li>Bare land of minimum 600sqm and maximum of 1000sqm</li>
              <li>
                Within or close to the trade area, center of community and
                neighborhood​
              </li>
              <li>A wide façade and parking space will be a plus​</li>
            </ul>
            <div className=" w-full border border-main-10 px-2 py-5 text-center lg:text-left mt-5">
              <p>
                For any available properties that meet the above criteria, send
                the &quot;Details required for property&quot; to{" "}
                <span className=" font-bold underline">
                  expansion@atreos.com
                </span>
              </p>
            </div>
          </div>
          <div className=" bg-gray-100 px-5 pb-5 mt-8 flex-[60%] lg:mt-0">
            <h2 className=" aest">Become a Bokku Seller</h2>
            <ol className=" list-inside ml-4 flex flex-col gap-2 mt-3">
              <li>Complete Address</li>
              <li>Size of Building or Land</li>
              <li>Owner Contact Details</li>
              <li>
                Available Documentary Requirements:
                <ul className=" list-inside ml-4 list-disc">
                  <li>Survey Plan</li>
                  <li>Title Document​</li>
                  <li>Land Use Charge</li>
                  <li>Tax Clearance​</li>
                </ul>
              </li>
              <li>Google Coordinates or Dropped Pin</li>
              <li>Actual picture of the property</li>
            </ol>
          </div>
        </div>
        <div className=" pb-24">
          <div className=" bg-gray-100 px-5 pb-5 mt-8 lg:mt-16 flex-[60%]">
            <h2 className=" aest">Build Our Stores</h2>
            <p className=" my-10">
              ‍You are a contractor with experience in building commercial
              space, fit-outs or ground up? Our rapid expansion needs partners
              like you! Send your details and credentials to{" "}
              <span className=" font-bold underline">expansion@atreos.com</span>
            </p>
          </div>
          <div className="mt-5 bg-gray-100 w-full relative flex justify-end">
            <Image src={mart2} alt="bokku store" className=" w-[95%] relative top-10 max-h-[430px] object-cover"/>
          </div>
        </div>
      </section>
    </div>
  );
}
