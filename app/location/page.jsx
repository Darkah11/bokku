import StoreRocketWidget from "./StoreRocketWidget";
import Script from "next/script";
import React from "react";

export default function Location() {  
  return (
    <div 
		id="storerocket-embed"
		style={{ width: '100%', minHeight: "420px" }} 
		data-storerocket-env="p" 
		data-storerocket-id="Yw8lrx64vo"
	>
		<StoreRocketWidget />
	</div>
  );
  
  
}
