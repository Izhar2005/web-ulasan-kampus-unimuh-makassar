# web-ulasan-kampus-unimuh-makassar
Berikut adalah rangkuman proyek kamu beserta **README.md** untuk diunggah ke GitHub. 

---

### **📌 Rangkuman Proyek**
**Nama Proyek**: Sistem Ulasan Mahasiswa UNISMUH Makassar  
**Deskripsi**:  
Website ini memungkinkan mahasiswa untuk memberikan ulasan tentang fasilitas dan kinerja dosen di UNISMUH Makassar. Ulasan akan dikirim ke email kampus dan disimpan di Google Sheets menggunakan Google Apps Script.  

**Fitur Utama**:  
✅ Input nama, fakultas, dan ulasan  
✅ Upload gambar sebagai bukti  
✅ Data dikirim ke Google Sheets  
✅ Menggunakan Google Apps Script sebagai backend  
✅ Mengatasi CORS agar frontend bisa mengakses backend  

---

### **📂 Struktur Proyek**
```
📦 review-website
 ┣ 📂 public
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 review.html
 ┃ ┗ 📜 style.css
 ┣ 📂 src
 ┃ ┗ 📜 frontend.js
 ┣ 📂 backend
 ┃ ┗ 📜 google-script.gs
 ┣ 📜 .env
 ┣ 📜 README.md
 ┗ 📜 package.json
```

---

### **📜 README.md**
Berikut adalah isi README untuk GitHub:  

```markdown
# 📌 Sistem Ulasan Mahasiswa UNISMUH Makassar

Sistem ini memungkinkan mahasiswa untuk memberikan ulasan terhadap fasilitas dan kinerja dosen di UNISMUH Makassar.  
Ulasan akan dikirim langsung ke email kampus dan disimpan di Google Sheets menggunakan Google Apps Script.

## 🚀 Fitur Utama
✅ Input nama, fakultas, dan ulasan  
✅ Upload gambar sebagai bukti  
✅ Data dikirim ke Google Sheets  
✅ Backend menggunakan Google Apps Script  
✅ Mengatasi CORS agar frontend bisa mengakses backend  

## 📂 Struktur Proyek
```
📦 review-website
 ┣ 📂 public
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 review.html
 ┃ ┗ 📜 style.css
 ┣ 📂 src
 ┃ ┗ 📜 frontend.js
 ┣ 📂 backend
 ┃ ┗ 📜 google-script.gs
 ┣ 📜 .env
 ┣ 📜 README.md
 ┗ 📜 package.json
```

## 📦 Instalasi & Penggunaan

### 1️⃣ **Clone Repository**
```sh
git clone https://github.com/username/review-website.git
cd review-website
```

### 2️⃣ **Konfigurasi .env**
Buat file `.env` lalu masukkan ID deployment Google Apps Script:
```
DEPLOYMENT_ID=AKfycbxp0cB_ayt--1HIPNOfpW2vJKpa1q1tohjlEhhHfN6bA72lKkHo-*******
```
**⚠️ Setiap kali melakukan "New Deployment" di Google Apps Script, update ID di `.env`!**

### 3️⃣ **Menjalankan Frontend**
Gunakan **Live Server** di VS Code atau jalankan:
```sh
npx serve public
```
Akses di browser: `http://localhost:3000`

## ⚙️ **Konfigurasi Backend**
Google Apps Script (`google-script.gs`) harus memiliki CORS seperti ini:
```javascript
function doPost(e) {
    return ContentService.createTextOutput(JSON.stringify({status: "success"}))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeader("Access-Control-Allow-Origin", "*")
        .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        .setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function doOptions(e) {
    return ContentService.createTextOutput("")
        .setMimeType(ContentService.MimeType.TEXT)
        .setHeader("Access-Control-Allow-Origin", "*")
        .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
```

## 💡 Catatan
- Gunakan **Ctrl + Shift + R** untuk Hard Refresh di browser.
- Pastikan Google Apps Script sudah **New Deployment** dan id-nya sudah diupdate ke `.env`.

## 👨‍💻 Kontributor
- **Nama Kamu** - Developer

## 📄 Lisensi
Proyek ini menggunakan lisensi **MIT**.
```

