import Image from "next/image";
import React from "react";
import sign from "@/public/sign.jpg";
import mart2 from "@/public/mart2.jpg";
import supply from "@/public/supply.jpg";

export default function page() {
  return (
    <div className=" relative bg-white text-black px-5 lg:px-20">
      <section className=" py-10">
        <h2 className=" aest">
          We are grocery supermarket chain founded in Nigeria on Sept. 30th,
          2022.
        </h2>
        <div className=" pt-16 lg:flex justify-between items-start gap-10">
          <div className=" flex-[40%]">
            <h2 className=" aest">The Bokku Mart Philosophy</h2>
            <div className=" mt-4">
              <h3 className=" text-main-10 font-semibold text-lg">
                We carefully select each of our products
              </h3>
              <ul className=" list-item ml-7 mt-2">
                <li>
                  We focus on basic food, household and personal care products
                  which are necessary for your every day life. We pick for you
                  the best quality and the best choices.
                </li>
              </ul>
            </div>
            <div className=" mt-4">
              <h3 className=" text-main-10 font-semibold text-lg">
                We offer the lowest possible price every day
              </h3>
              <ul className=" list-item ml-7 mt-2">
                <li>
                  Our stores are simple and not larger than needed. We do not
                  rent stores in expensive locations. We are not displaying
                  individual items on our shelves but sell out of boxes and from
                  pallets. We avoid anything which is not necessary and which
                  would potentially increase the sales price of our products.
                  And by the way: Instead of promotions we offer you the lowest
                  possible sales price every day!
                </li>
              </ul>
            </div>
            <div className=" mt-4">
              <h3 className=" text-main-10 font-semibold text-lg">
                Our Guarantee
              </h3>
              <ul className=" list-item ml-7 mt-2">
                <li>
                  We provide you with an unconditional return guarantee: If you
                  are not satisfied with any of our products, simply return it
                  to any of our stores for a full refund. No questions asked, no
                  receipt or explanation are needed for a refund.
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex w-full lg:w-[400px] xl:w-[600px] bg-gray-100 p-2 mt-6 lg:mt-0">
            <Image src={sign} alt="bokku store" className=" w-[50%]"/>
            <div>
              <Image src={mart2}  alt="bokku store" />
              <Image src={supply} alt="bokku store"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
