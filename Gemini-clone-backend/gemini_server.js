// const express = require('express');
// const cors = require('cors');
// const { GoogleGenAI } = require('@google/genai');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const ai = new GoogleGenAI({
//   apiKey: "AIzaSyDtDEkItBRu-UaImM1XjWMmbLSJSLV85FE", // keep this secret!
// });

// app.post('/api/gemini', async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     const model = ai.getGenerativeModel({ model: "gemini-2.5-pro" });
//     const result = await model.generateContent([prompt]);
//     const response = result.response;
//     res.json({ text: response.text() });
//   } catch (error) {
//     console.error("Gemini API error:", error); // Add this line
//     res.status(500).json({ error: error.message });
//   }
// });

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());jjdj
app.use(express.json());

const genAI = new GoogleGenerativeAI("AIzaSyANgT4CoPfTUq5yvTPpMAS44zygJo0nol8");

app.post('/api/gemini', async (req, res) => {
  try {
    const { prompt } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" }); // use proper model name
 const result = await model.generateContent([prompt]);
const response = result.response;
res.json({ text: response.text() }); // <-- this must match frontend expectation
  } catch (error) {
    console.error("Gemini API error:", error,error.response?.data);
    res.status(500).json({ error: error.message });
  }
  
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

