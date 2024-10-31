import StoreLocator from "@/components/StoreLocator";
import Script from "next/script";
import React from "react";

export default function Location() {
  // function () {
  //     let a =document.createElement('script');
  //     a.type='text/javascript';
  //     a.async=!0;
  //     a.src='https://cdn.storerocket.io/js/widget-mb.js';
  //     var b=document.getElementsByTagName('script')[0];
  //     b.parentNode.insertBefore(a,b);
  //     };
 
  return (
    <>
      {/* Hello world */}
      {/* <div
        id="storerocket-widget"
        style={{ width: "100%" }}
        data-storerocket-env="p"
        data-storerocket-id="Yw8lrx64vo"
      >
        <p style={{ textAlign: "center", fontSize: 13, padding: 10 }}>
          Store locator is loading from StoreRocket
          <a
            target="_blank"
            href="https://storerocket.io"
            style={{ fontSize: 13 }}
          >
            Store Locator App
          </a>
          ..
        </p>
      </div> */}
      {/* <div className="store-locator-widget"></div>
      <Script src="//cdn.storerocket.io/widget.js"/> */}
      <StoreLocator />
     
    </>
  );
}
