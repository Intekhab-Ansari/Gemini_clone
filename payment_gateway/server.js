// server.js
const Razorpay = require('razorpay');

const instance = new Razorpay({
    key_id: 'rzp_test_YourPublicKeyID',
    key_secret: 'rzp_test_YourSecretKeyHere'
});

app.post('/create-order', async (req, res) => {
    const options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    try {
        const order = await instance.orders.create(options);
        res.json(order); // Send order ID to frontend
    } catch (err) {
        res.status(500).send(err);
    }
});
