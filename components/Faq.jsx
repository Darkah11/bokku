"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const config = {
  animate: true,
  arrowIcon: "V",
  expandIcon: "+",
  collapseIcon: "-",
};

export default function Faqs({ data, styles, link, icon }) {
  return (
    <div>
      <Accordion>
        {data &&
          data.map((item, index) => {
            return (
              <AccordionItem key={index} className=" border-b border-gray-200">
                {/* <AccordionItemState> */}
                <AccordionItemHeading className=" py-4">
                  <AccordionItemButton className=" font-bold flex items-center">
                    <p className=" mr-2 font-bold text-main-10 text-2xl">+</p>
                    <p className=" text-gray-700">{item.title}</p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                {/* </AccordionItemState> */}

                <AccordionItemPanel className=" pl-4">
                  <p className=" inline ">
                    {" "}
                    <span className=" text-main-10 font-medium">Ans. </span>
                    {item.body}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
      </Accordion>
    </div>
  );
}
