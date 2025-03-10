document.addEventListener("DOMContentLoaded", function () {
  // Manipulasi DOM: Pesan Selamat Datang Berdasarkan Waktu
  const welcomeMessage = document.getElementById("welcomeMessage");

  // Variabel dan Fungsi Tambahan: Menentukan salam berdasarkan waktu
  const currentHour = new Date().getHours();
  function getGreeting(hour) {
    let greeting = "";
    // Percabangan: Menentukan salam
    if (hour >= 5 && hour < 12) {
      greeting = "Hii, Pagi Candraa! 👋🏻";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Hii, Sore Tuan Putri Candraa! 👋🏼";
    } else {
      greeting = "Hii, Malam Syancan! 👋🏿";
    }
    return greeting;
  }

  // Manipulasi DOM: Menyisipkan pesan greeting
  welcomeMessage.textContent = getGreeting(currentHour);
  welcomeMessage.style.color = "#000";
  welcomeMessage.style.fontWeight = "mediumbold";

  // Perulangan: Menambahkan Nomor Urut pada Galeri**
  const galleryItems = document.querySelectorAll(".gallery-number");
  galleryItems.forEach((item, index) => {
    item.textContent = `Foto ${index + 1}`; // Untuk Menghitung Nomor urut
    item.style.display = "block";
    item.style.fontSize = "1rem";
    item.style.color = "#000";
    item.style.marginBottom = "10px";
  });

  // Manipulasi DOM dan Log: Validasi Formulir dengan Riwayat
  const form = document.getElementById("contactForm");
  const messageDiv = document.getElementById("formMessage");
  let formSubmissions = []; // Variabel untuk menyimpan riwayat

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil nilai input
    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    // Percabangan: Validasi formulir
    if (name && email && message) {
      // Simpan riwayat pengiriman
      const submission = {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toLocaleString(),
      };
      formSubmissions.push(submission);

      // Log: Catat riwayat ke konsol
      console.log("Riwayat Pengiriman Formulir:", formSubmissions);

      // Manipulasi DOM: Tampilkan pesan sukses
      messageDiv.style.display = "block";
      messageDiv.textContent =
        "Terima kasih, " + name + "! Pesan Anda telah dikirim.";
      messageDiv.style.color = "#28a745";
      form.reset();
    } else {
      // Alert: Peringatan jika ada field kosong
      alert("Harap isi semua field yang diperlukan!");
      messageDiv.style.display = "block";
      messageDiv.textContent = "Silakan isi semua field!";
      messageDiv.style.color = "#dc3545";
    }

    // Sembunyikan pesan setelah 3 detik
    setTimeout(() => {
      messageDiv.style.display = "none";
    }, 5000);
  });

  // FAB Animasi Klik
  const fabItems = document.querySelectorAll(".fab-item");
  fabItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.style.transform = "scale(1.2)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 200);
    });
  });
});
