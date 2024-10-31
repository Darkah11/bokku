import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WorkWithUs() {
  return (
    <div className=" bg-main-10">
      <section>
        <Image
          src={"/bokku-work.jpg"}
          width={700}
          height={500}
          alt="work with us at bokku"
          className=" w-full hidden lg:block"
        />
        <Image
          src={"/bokku-work-mobile.jpg"}
          width={300}
          height={700}
          alt="work with us at bokku"
          className=" w-full block lg:hidden"
        />
      </section>
      <section className=" py-10">
        <div className=" text-center">
          <h2 className=" font-bold text-4xl mb-8">Want To Work With Us?</h2>
          <Link href={'https://form.jotform.com/223522027289556'}>
            <button className=" bg-primary-10 text-main-10 py-2 px-6 rounded-md">
              Apply Here
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
