require('dotenv').config();
console.log("🔍 DEPLOYMENT_ID:", process.env.DEPLOYMENT_ID); // Debugging

require('dotenv').config();
const fetch = require('node-fetch');

const GOOGLE_SHEETS_API = `https://script.google.com/macros/s/${process.env.DEPLOYMENT_ID}/exec`;
console.log("🔗 URL yang digunakan:", GOOGLE_SHEETS_API); // Tambahkan ini untuk debugging

const data = {
    nama: "John Doe",
    fakultas: "Fakultas Teknik",
    ulasan: "Dosen sangat baik dalam mengajar.",
};

async function kirimUlasan() {
    try {
        const response = await fetch(GOOGLE_SHEETS_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("✅ Response dari Google Sheets:", result);
    } catch (error) {
        console.error("❌ Gagal mengirim ulasan:", error);
    }
}

kirimUlasan();
