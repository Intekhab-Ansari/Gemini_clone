import React from 'react';

const RazorpayPayment = () => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();

    if (!isScriptLoaded) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_q5l2r3V2bd33Vv', // Replace with your Razorpay key
      amount: '50000', // Amount in paise = ₹500
      currency: 'INR',
      name: 'ADVERZA',
      description: 'Test Transaction',
      image: 'https://yourdomain.com/logo.png',
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        // Optionally send this ID to backend for verification
      },
      prefill: {
        name: 'Intekhab Ansari',
        email: 'Intekhab@gmil.com',
        contact: '123456789',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className='payment-div'>
      <h2>Pay salary </h2>
      <button className='payment-btn' onClick={handlePayment}>Pay now</button>
    </div>
  );
};

export default RazorpayPayment;