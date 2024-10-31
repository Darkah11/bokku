import React from "react";
import supply from "@/public/supply.jpg";
import Image from "next/image";
import Link from "next/link";
import Faq from "@/components/Faq";

export default function Suppliers() {
    const data = ([
        {
          title: 'How do i become a bokku supplier',
          body: `Write us an email at Atreospurchasing@atreos.com and you will receive our New Supplier Application Form.`,
        },
        {
          title: 'What is a basic range item?',
          body: "A basic range item is an item that we sell everyday in our stores.",
        },
        {
          title: 'What is a Private Label?',
          body: "Private Label refers to our own brand name on our products. Bokku private label product quality meets or exceeds comparable brands. ",
        },
        {
          title: 'What is a Display Ready Cases (DRC)?',
          body: "Ideally your products come in Display Ready Cases or DRC. A Display Ready Cases refers to the outer case that should be ready to merchandise within our Bokku stores with no repacking necessary.",
        },
        {
          title: 'Who is responsible for the label/case artwork fee? Can we use our own design agency?',
          body: "Suppliers work closely with our central purchasing team overseeing private labels",
        },
        {
          title: 'Can I schedule a meeting with Purchasing?',
          body: "Once your email has been reviewed, the Purchasing team will contact you to discuss next steps.",
        },
        {
          title: 'Can I send samples?',
          body: "Please do not submit samples unless requested by the Purchasing team. ",
        },
        {
          title: 'Is it important for a supplier to visit an Bokku store?',
          body: "Yes, a store visit is very important so that you can view our assortment, display cases and artwork.",
        },
        {
          title: 'Will I need to have my products tested by a 3rd-party testing facility?',
          body: "Yes, if you are chosen to become an Bokku supplier, we will request you to send your products to a recommended FDA-recognized 3rd-party testing facility. Bokku also does internal product testing for all products.",
        },
        {
          title: 'What documents will I be asked to submit if chosen to become a supplier?',
          body: "All private label food production facilities must have a License To Operate (LTO) from NAFDAC. The Purchasing team will request for a copy of your Certificate of Registration (CAC); Business Permit; SEC or any equivalent documentation such but not limited to Business Registration; Sales Invoice; Collection Receipt, third party audit certificate for all food manufacturing facilities.",
        },
        {
          title: 'Can I submit a deck outlining company and product information along with the Supplemental Submission Form?',
          body: "Yes, it is encouraged that a new supplier submits visuals to showcase your company and product portfolio.",
        },
      ])
      const itemClasses = {
        base: "pt-4 relative outline-none",
        title: "text-xl text-left pl-7 font-semibold",
        indicator: "text-3xl text-main-10 absolute left-0 font-bold",
        content: "pb-8 pl-8"
      };
  return (
    <div className=" relative bg-white text-black px-5 lg:px-20">
      <section >
        <div className="pt-16 lg:flex justify-between items-start gap-10">
          <div className=" flex-1">
            <h2 className=" aest ">Dear Suppliers and Manufacturers</h2>
            <p className=" mt-2">
              Because we offer a limited assortment, we can offer you
              significant volume. Our “Everyday Low Price” philosophy translates
              into huge volume. You can be our only supplier for a product. This
              makes your operation extremely efficient and helps both of us to
              keep cost low and offer excellent prices to customers. We are
              looking for both, commercial brands and private label
              manufacturers. ‍
            </p>
          </div>
          <div className=" mt-5 lg:mt-0 w-[500px] xl:w-[600px]">
            <Image
              src={supply}
              alt="bokku store image"
              className=" w-full block"
            />
          </div>
        </div>
        <div className=" pt-16 lg:flex justify-between items-start gap-10">
          <div className=" flex-[40%]">
            <div>
              <h2 className=" aest">Our Expectations</h2>
              <p className=" mt-2">
                We work based on professional and simple business relationships
                driving strong growth and good profitability.
              </p>
            </div>
            <div className=" mt-3">
              <p>
                We don’t require suppliers to pay or manage any extras, such as:
              </p>
              <ul className=" list-item ml-7">
                <li>Unwarranted deductions</li>
                <li>Coupons or promotions</li>
                <li>Marketing, food shows or listing fees</li>
                <li>In-store displays or rack-jobbing​</li>
              </ul>
            </div>
            <div className=" mt-3">
              <p>We offer to our supplier:</p>
              <ul className=" list-item ml-7">
                <li>On time payment always</li>
                <li>Efficient deliveries to a central warehouse</li>
                <li>Consistent growth based on sales volume and expansion</li>
              </ul>
            </div>
          </div>
          <div className=" bg-gray-100 px-5 pb-5 mt-8 flex-[60%] lg:mt-0">
            <h2 className=" aest">Become a Bokku Seller</h2>
            <p className=" my-10">
              ‍Please take the first step toward a profitable, long-term
              partnership with Bokku. Begin by visiting a Bokku store and
              reviewing our Frequently Asked Questions, see below.
            </p>
            <Link href={""}>‍Contact us at &quot;atreospurchasing@atreos.com&quot;</Link>
          </div>
        </div>
        <div className=" bg-gray-100 px-5 py-10 mt-10">
            <h2 className=" aest">Frequently Asked Questions</h2>
        <Faq data={data} style={itemClasses}/>
        </div>
      </section>
    </div>
  );
}
