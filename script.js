function openInvitation() {
  const cover = document.querySelector("#cover");
  const quotes = document.querySelector("#quotes");
  const musikControl = document.querySelector("#ctrlmusik"); // Ambil elemen kontrol musik
  

  cover.style.opacity = "0";
  setTimeout(() => {
      cover.style.display = "none";
      quotes.style.display = "block";
      
      // Tampilkan kontrol musik setelah quotes muncul
      musikControl.style.display = "block";
      
      setTimeout(() => {
          isi.style.opacity = "1";
      }, 50);
      isi.classList.add("active");
  }, 500);
  
}



function openInvitationSecondPage() {
  document.getElementById('cover').style.display = 'none';
  document.getElementById('quotes').style.display = 'none'; // Menyembunyikan halaman pertama
  document.getElementById('profil-pengantin').style.display = 'block'; // Menampilkan halaman kedua
}

document.addEventListener("DOMContentLoaded", function() {
  const confirmButton = document.querySelector(".confirm-button");
  const confirmationFormContainer = document.getElementById("confirmationFormContainer");
  const closeButton = document.querySelector(".close-button");

  confirmButton.addEventListener("click", function() {
      confirmationFormContainer.style.display = "block";
  });

  closeButton.addEventListener("click", function() {
      confirmationFormContainer.style.display = "none";
  });

  window.addEventListener("click", function(event) {
      if (event.target === confirmationFormContainer) {
          confirmationFormContainer.style.display = "none";
      }
  });
});

var modal = document.getElementById("giftModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

function copyToClipboard(elementId) {
  const text = document.getElementById(elementId).innerText;

  navigator.clipboard.writeText(text).then(function() {
      alert('Nomor rekening berhasil disalin: ' + text);
  }, function(err) {
      console.error('Gagal menyalin teks: ', err);
  });
}

var directTransfer = document.getElementById("directTransfer");
var giftTransfer = document.getElementById("giftTransfer");
var giftForm = document.getElementById("giftForm");

giftTransfer.onclick = function() {
  giftForm.style.display = "block";  
};

directTransfer.onclick = function() {
  giftForm.style.display = "none"; 
};

function sendWishes() {
  var name = document.getElementById('name').value.trim();
  var address = document.getElementById('address').value.trim();
  var message = document.getElementById('message').value.trim();

  if (!name || !address || !message) {
      alert("Semua kolom harus diisi!");
      return;
  }

  var wishesContent = "<p><strong>Nama:</strong> " + name + "</p>" +
                      "<p><strong>Alamat:</strong> " + address + "</p>" +
                      "<p><strong>Ucapan:</strong> " + message + "</p><hr>";

  document.getElementById('wishes').innerHTML += wishesContent;

  document.getElementById('name').value = "";
  document.getElementById('address').value = "";
  document.getElementById('message').value = "";
}

function putarMusik() {
  const musik = document.querySelector('#musik');
  const imgmusik = document.querySelector('#imgmusik');

  if (musik.paused) {
      musik.play();
      imgmusik.src = "img/musicon.png";
  } else {
      musik.pause();
      imgmusik.src = "img/musicof.png";
  }
}