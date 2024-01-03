import * as React from 'react';
import Script from 'next/script';

function BuyButtonComponent() {
  return (
    <>
      <Script src="https://js.stripe.com/v3/buy-button.js" />
      <div>
        <stripe-buy-button
          buy-button-id="buy_btn_1OTzTdENbTyjEnkDTrbfKpOg"
          publishable-key="pk_test_51OTbPuENbTyjEnkDKFbWeMICNVbYWd4onzDlqGzm7b4UZiv94u0worptqZ6HLa86lxv2pSJUNuZB5JvYG99MZWQh00GP4aXHIv"
        />
      </div>
    </>
  );
} 

export default BuyButtonComponent;
