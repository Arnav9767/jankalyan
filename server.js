// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());



// 🔑 Load API key from .env (never hardcode API keys)
const FAST2SMS_API_KEY = "HJi8wSaCrPVSMYLmNHvKnOFDAr17nUA2u59bmRzNnuaoAyRnQcUHGPruUFXp";

// Health Check
app.get("/", (req, res) => {
    res.send("🚀 Fast2SMS API is running...");
});

// 📩 Send SMS API
app.post("/send-sms", async (req, res) => {
    try {
        const { numbers, message } = req.body;

        // Validation
        if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
            return res.status(400).json({ error: "At least one number is required" });
        }
        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        // 📤 Send request to Fast2SMS API
        const response = await axios.post(
            "https://www.fast2sms.com/dev/bulkV2",
            {
                route: "dlt_manual",
                sender_id: "JKSSEV", // ✅ Approved sender ID
                message: message,
                language: "english",
                flash: 0,
                numbers: numbers.join(","),
                template_id: "1707175488959719941" // ✅ Hardcoded template ID
            },
            {
                headers: {
                    authorization: FAST2SMS_API_KEY,
                    "Content-Type": "application/json"
                }
            }
        );

        res.status(200).json({
            success: true,
            details: response.data
        });

    } catch (error) {
        console.error("❌ Error sending SMS:", error.response?.data || error.message);
        res.status(500).json({
            error: "Failed to send SMS",
            details: error.response?.data || error.message
        });
    }
});

app.post("/sendsmspatient", async (req, res) => {
    try {
        const { numbers, message } = req.body;

        // Validation
        if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
            return res.status(400).json({ error: "At least one number is required" });
        }
        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        // 📤 Send request to Fast2SMS API
        const response = await axios.post(
            "https://www.fast2sms.com/dev/bulkV2",
            {
                route: "dlt_manual",
                sender_id: "JKSSEV", // ✅ Approved sender ID
                message: message,
                language: "english",
                flash: 0,
                numbers: numbers.join(","),
                template_id: "1707175491105590346" // ✅ Hardcoded template ID
            },
            {
                headers: {
                    authorization: FAST2SMS_API_KEY,
                    "Content-Type": "application/json"
                }
            }
        );

        res.status(200).json({
            success: true,
            details: response.data
        });

    } catch (error) {
        console.error("❌ Error sending SMS:", error.response?.data || error.message);
        res.status(500).json({
            error: "Failed to send SMS",
            details: error.response?.data || error.message
        });
    }
});

app.post("/sendsmsdoctor", async (req, res) => {
    try {
        const { numbers, message } = req.body;

        // Validation
        if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
            return res.status(400).json({ error: "At least one number is required" });
        }
        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        // 📤 Send request to Fast2SMS API
        const response = await axios.post(
            "https://www.fast2sms.com/dev/bulkV2",
            {
                route: "dlt_manual",
                sender_id: "JKSSEV", // ✅ Approved sender ID
                message: message,
                language: "english",
                flash: 0,
                numbers: numbers.join(","),
                template_id: "1707175472472591703" // ✅ Hardcoded template ID
            },
            {
                headers: {
                    authorization: FAST2SMS_API_KEY,
                    "Content-Type": "application/json"
                }
            }
        );

        res.status(200).json({
            success: true,
            details: response.data
        });

    } catch (error) {
        console.error("❌ Error sending SMS:", error.response?.data || error.message);
        res.status(500).json({
            error: "Failed to send SMS",
            details: error.response?.data || error.message
        });
    }
});




// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
