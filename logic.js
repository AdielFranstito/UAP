function submit() {
  // Mengambil nilai dari elemen formulir
  const kode = document.getElementById("kode").value;
  const banyakbarang = document.getElementById("banyakbarang").value;

  // Membuat objek barang
  const jual = {
    kode,
    banyakbarang,
  };

  // Menambahkan objek barang ke dalam array brang
  submit.push(jual);
  showAlert("Total Pembayaran Anda: " + Total);
  showAlert("Masukkan uang yang dibayarkan:");
  showAlert("total kembalian: " + kembalian);
  clearForm();
}

// Memanggil fungsi showAlert untuk menampilkan pesan alert
function showAlert(message) {
  alert(message);
}

// Memanggil fungsi clearForm untuk mengosongkan formulir
function clearForm() {
  document.getElementById("kode").value = "";
  document.getElementById("banyakbarang").value = "";
}

function Total() {
  kode * banyakbarang;
}

function kembalian() {
  Total - dibayarkan;
}
