require('dotenv').config(); // Memuat variabel dari .env

const API_URL = `https://script.google.com/macros/s/${process.env.DEPLOYMENT_ID}/exec`;

document.getElementById("form-ulasan").addEventListener("submit", async function (event) {
    event.preventDefault();

    let formData = new FormData(this);
    let nama = formData.get("nama");
    let fakultas = formData.get("fakultas");
    let ulasan = formData.get("ulasan");
    let file = document.getElementById("gambar").files[0];

    let base64File = "";
    if (file) {
        let reader = new FileReader();
        base64File = await new Promise((resolve) => {
            reader.onloadend = () => resolve(reader.result.split(",")[1]);
            reader.readAsDataURL(file);
        });
    }

    let data = {
        nama: nama,
        fakultas: fakultas,
        ulasan: ulasan,
        gambar: base64File
    };

    try {
        let response = await fetch(API_URL, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        let result = await response.json();
        console.log("✅ Berhasil:", result);
        alert("Ulasan berhasil dikirim!");

    } catch (error) {
        console.error("❌ Gagal mengirim ulasan:", error);
        alert("Gagal mengirim ulasan. Coba lagi nanti.");
    }
});
