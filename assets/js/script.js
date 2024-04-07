const btnPlay = document.querySelector('#button .mulai')
const btnNext = document.querySelector('.next')
const btnNext1 = document.querySelector('.next1')
const btnNext2 = document.querySelector('.next2')
const btnNext3 = document.querySelector('.next3')
const btnNext4 = document.querySelector('.next4')
const btnNext5 = document.querySelector('.next5')
const btnNext6 = document.querySelector('.next6')
const btnNext7 = document.querySelector('.next7')
const messege = document.querySelector('.messege-box')
const messege1 = document.querySelector('.messege-box1')
const messege2 = document.querySelector('.messege-box2')
const messege3 = document.querySelector('.messege-box3')
const messege4 = document.querySelector('.messege-box4')
const messege5 = document.querySelector('.messege-box5')
const messege6 = document.querySelector('.messege-box6')
const messege7 = document.querySelector('.messege-box7')
const messege8 = document.querySelector('.messege-box8')
const messege9 = document.querySelector('.messege-box9')
const messege10 = document.querySelector('.messege-box10')
const messege2P = document.querySelector('.messege-box2 .pesan p')
const hilang1 = document.querySelector('.hilang1')
const hilang2 = document.querySelector('.hilang2')
const nama = document.querySelectorAll('.nama h2')[0]
const nama1 = document.querySelectorAll('.nama h2')[1]
const nama2 = document.querySelectorAll('.nama h2')[2]
const nama3 = document.querySelectorAll('.nama h2')[3]
const nama4 = document.querySelectorAll('.nama h2')[4]
const nama5 = document.querySelectorAll('.nama h2')[5]
const nama6 = document.querySelectorAll('.nama h2')[6]
const nama7 = document.querySelectorAll('.nama h2')[7]
const nama8 = document.querySelectorAll('.nama h2')[8]
const nama9 = document.querySelectorAll('.nama h2')[9]
const waktu = document.getElementById('waktu')
const jam = waktu.querySelector('h1')
const hari = waktu.querySelector('p')
const bg1 = document.querySelector('.background1')
const bg2 = document.querySelector('.background2')
const body = document.querySelector('.body')
const audio = document.querySelector('.audio')

body.classList.add('background1')

const date = new Date()
const hour = String(date.getHours()).padStart(2, '0')
const minutes = String(date.getMinutes()).padStart(2, '0')
const day = date.getDay()
const tgl = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

hari.innerHTML = `${dayID()}, ${tgl} ${monthID()} ${year}`
jam.innerHTML = `${hour}:${minutes}`

const pengirim = "mas pandu 😈";
const nomorWa = "6282276281076"
const textWa = "Wopppyuuuu toooo mas gembilllll"
const pesan = `Ini baru bener Cici, This for you ya babyyyyyyy`;

if (pengirim) {
  nama.innerHTML = pengirim;
  nama1.innerHTML = pengirim;
  nama2.innerHTML = pengirim;
  nama3.innerHTML = pengirim;
  nama4.innerHTML = pengirim;
  nama5.innerHTML = pengirim;
  nama6.innerHTML = pengirim;
  nama7.innerHTML = pengirim;
  nama8.innerHTML = pengirim;
  nama9.innerHTML = pengirim;
} else {
  nama.innerHTML = "Nama Kamu";
  nama1.innerHTML = "Nama Kamu";
  nama2.innerHTML = "Nama Kamu";
  nama3.innerHTML = "Nama Kamu";
  nama4.innerHTML = "Nama Kamu";
  nama5.innerHTML = "Nama Kamu";
  nama6.innerHTML = "Nama Kamu";
  nama7.innerHTML = "Nama Kamu";
  nama8.innerHTML = "Nama Kamu";
  nama9.innerHTML = "Nama Kamu";
}

  btnPlay.addEventListener('click', () => {
  audio.play()
  messege1.style.display = "block";
  messege1.style.transform = "translateX(0)"
  btnPlay.style.display = "none";
  hilang1.style.display = "block";
})

  hilang1.addEventListener('click', () => {
  messege1.style.display = "none";
  messege2.style.transform = "translateX(0)"
  hilang1.style.display = "none"
  // hilang2.style.display = "block"
  Swal.fire({
    imageUrl: "/assets/img/stiker_mylove.gif",
    imageHeight: 120,
    width: 350,
    title: 'Untuk memverifikasi kalo ini cici nya mas, masukin ya tanggal pertama kali kita call :D',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Tgl Telfon Pertama">`,
    confirmButtonText: 'Kirim',
    focusConfirm: false,
    customClass: {
      title: 'my-title-class',
    },
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#login').value;
      if (!login) {
        Swal.showValidationMessage(`Masukin Tgl Pertama Telfon Dong :(`);
      } else if (login !== "6 Desember 2023") {
        Swal.showValidationMessage(`Ih kamu mah, tgl pertama telfon nya salah :(`);
      }
      return { login };
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel) return;
    let i = 0;
    const speed = 50;
    const namaAwal = result.value.login.charAt(0);
    let txt = `Yeay bener. ${result.value.login}, ${pesan}`;

    const typeWriter = () => {
      if (i < txt.length) {
        messege2P.innerHTML += txt.charAt(i);
        i++;
        messege2.classList.remove('kelip');
        hilang2.style.display = "none";
        btnNext.style.display = "none";
        setTimeout(typeWriter, speed);
      } else {
        messege2.classList.add('kelip');
        body.classList.replace('background1', 'background2');
        body.classList.add('muncul');
        btnNext.style.display = "block";
      }
    };
    typeWriter();
  });
});

btnNext.addEventListener('click', () => {
  messege3.style.display = "block";
  messege3.style.transform = "translateX(0)"
  messege2.style.display = "none";
  hilang1.style.display = "none";
  btnNext.style.display = "none";
  btnNext1.style.display = "block";
  btnNext2.style.display = "none";
  btnNext3.style.display = "none";
  btnNext4.style.display = "none";
  btnNext5.style.display = "none";
  btnNext6.style.display = "none";
  btnNext7.style.display = "none";
})

btnNext1.addEventListener('click', () => {
  messege4.style.display = "block";
  messege4.style.transform = "translateX(0)"
  messege3.style.display = "none";
  hilang1.style.display = "none";
  btnNext.style.display = "none";
  btnNext1.style.display = "none";
  btnNext2.style.display = "block";
  btnNext3.style.display = "none";
  btnNext4.style.display = "none";
  btnNext5.style.display = "none";
  btnNext6.style.display = "none";
  btnNext7.style.display = "none";
})

btnNext2.addEventListener('click', () => {
  messege5.style.display = "block";
  messege5.style.transform = "translateX(0)"
  messege4.style.display = "none";
  hilang1.style.display = "none";
  btnNext.style.display = "none";
  btnNext1.style.display = "none";
  btnNext2.style.display = "none";
  btnNext3.style.display = "block";
  btnNext4.style.display = "none";
  btnNext5.style.display = "none";
  btnNext6.style.display = "none";
  btnNext7.style.display = "none";
})

btnNext3.addEventListener('click', () => {
  messege6.style.display = "block";
  messege6.style.transform = "translateX(0)"
  messege5.style.display = "none";
  hilang1.style.display = "none";
  btnNext.style.display = "none";
  btnNext1.style.display = "none";
  btnNext2.style.display = "none";
  btnNext3.style.display = "none";
  btnNext4.style.display = "block";
  btnNext5.style.display = "none";
  btnNext6.style.display = "none";
  btnNext7.style.display = "none";
})

btnNext4.addEventListener('click', () => {
  messege7.style.display = "block";
  messege7.style.transform = "translateX(0)"
  messege6.style.display = "none";
  hilang1.style.display = "none";
  btnNext.style.display = "none";
  btnNext1.style.display = "none";
  btnNext2.style.display = "none";
  btnNext3.style.display = "none";
  btnNext4.style.display = "none";
  btnNext5.style.display = "block";
  btnNext6.style.display = "none";
  btnNext7.style.display = "none";
})

btnNext5.addEventListener('click', () => {
  messege8.style.display = "block";
  messege8.style.transform = "translateX(0)"
  messege7.style.display = "none";
  hilang1.style.display = "none";
  btnNext.style.display = "none";
  btnNext1.style.display = "none";
  btnNext2.style.display = "none";
  btnNext3.style.display = "none";
  btnNext4.style.display = "none";
  btnNext5.style.display = "none";
  btnNext6.style.display = "block";
  btnNext7.style.display = "none";
})

btnNext6.addEventListener('click', () => {
  messege9.style.display = "block";
  messege9.style.transform = "translateX(0)"
  messege8.style.display = "none";
  hilang1.style.display = "none";
  btnNext.style.display = "none";
  btnNext1.style.display = "none";
  btnNext2.style.display = "none";
  btnNext3.style.display = "none";
  btnNext4.style.display = "none";
  btnNext5.style.display = "none";
  btnNext6.style.display = "none";
  btnNext7.style.display = "block";
})

btnNext7.addEventListener('click', () => {
  messege10.style.display = "block";
  messege10.style.transform = "translateX(0)"
  messege9.style.display = "none";
  hilang1.style.display = "none";
  btnNext.style.display = "none";
  btnNext1.style.display = "none";
  btnNext2.style.display = "none";
  btnNext3.style.display = "none";
  btnNext4.style.display = "none";
  btnNext5.style.display = "none";
  btnNext6.style.display = "none";
  btnNext7.style.display = "none";
  hilang2.style.display = "block"
})

hilang2.addEventListener('click', () => {
  window.open(`https://wa.me/${nomorWa}/?text=${textWa}`, '_blank')
})

