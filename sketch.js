function setup() {
  createCanvas(1600, 2050);
  // noLoop()
  // Run once and stop
}

// insert Image
let purba;
let carbon;
r=15

function preload(){
  carbon = loadImage('carbon.png');
  purba = loadImage('purba.jpg');
}
function draw() {
  background(245, 245, 220);
  noStroke()
  
  // IMAGE
  //grafik
  image(carbon,120,600,500,400)
  //purba
  image(purba,1000,600,500,400)
  
  
  // Dashboard
  fill('black');
  textFont('Georgia');
  textSize(26);
  text("DASHBOARD", 780, 90);
  text("PELURUHAN KARBONAKTIF", 680, 120);
  
  // penjelasan grafik
  fill('black')
  textFont('Georgia')
  textSize(20)
  text("Apa itu Peluruhan Karbonaktif ?", 737, 250)
  textSize(16)
   text("           Dalam bidang arkeologi, menentukan usia benda purba merupakan salah satu kegiatan yang sangat penting. Namun seringkali sangat sulit dilakukan.", 65, 280)
  text("Salah satu cara paling memuaskan dalam penentuan usia benda purba (fosil) yaitu dengan Penanggalan Radiocarbon, yaitu metode penentuan usia benda bersejarah berdasarkan peluruhan carbon (〖14〗_𝐶 ).", 65, 300)
  text("Metode tersebut pertama kali dikembangkan oleh Willard F. Libby bekerjasama dengan James Arnold dan Ernest C. di Institute Nuclear Studies,  California University (1940).", 65, 320)
  textSize(10)
  text("(Yuliati,dkk.2005.“Radionuklida Kosmogenik untuk Penanggalan”).", 1300, 320)
  textSize(16)
  text("Metode radiocarbon bermanfaat dalam menentukan usia suatu objek (misalnya fosil) yang bergantung pada peluruhan radiocarbon menjadi nitrogen melalui proses peluruhan atau radioactive decay.", 65, 340)
  text("laju peluruhan (R) atau dapat juga ditulis dengan dN/dt. N(t) merupakan banyaknya atom pada waktu ke-t,sehingga laju peluruhan zat radioaktif dapat dituliskan :", 65, 360)
  text(" R = dN/dt = -N/tao....(1) ;  tao = konstanta peluruhan", 705, 380)
  text("Pengintegrasian menggunakan variabel terpisah diperoleh persamaan analitis berikut :", 65, 400)
  text("N(t) = N(0). e^(-t/tao)....(2) ; N(0) = jumlah inti saat t=0", 705, 420)
  text("Persamaan analitis diatas bisa dikembangkan dengan menggunakan kondisi waktu paro(peluruhan inti bersisa separuh), T paro = 5730 tahun. Persamaan (1) dapat ditulis kembali seperti berikut.", 65, 440)
  text("dN/dt = N.ln2/T paro", 705, 460)
  text("diperoleh dari hubungan T paro = tao.ln2 atau tao = T paro/ln2 berdasarkan persamaan (2).", 65, 480)
  
  //TEKS KELOMPOK
  // penjelasan grafik
  fill('black')
  textFont('Georgia')
  textSize(24)
text("SIMULASI KOMPUTASI DAN MATEMATIKA", 65, 1800)
textSize(20)
text("Kelompok B : ", 65, 1830)
textSize(18)
  text(" 1. Gaizka Hisham Mustofa_119160058", 65, 1860)
  text(" 2. Callista Wynona Claudea_119160078", 65, 1880)
  text(" 3. Iqlima Dita Azzahra_121160024", 65, 1900)
  text(" 4. Agnes Putri Delima Manik_121160031", 65, 1920)
  text(" 5. Visna Mutiara Rahma_121160046", 65, 1940)
  text(" 6. Intan Permatasari Harahap_121160083", 65, 1960)
  text(" 7. Rika Kristiani_121160093", 65, 1980)
  text(" 8. Banua Asi Pardamean Tamba_121160112", 65, 2000)
  
  // posisi grafik
  //rect(100, 1400, 1000, 625)
  fill('black')
  textFont('Georgia')
  textSize(20)
  text("Grafik Peluruhan Karbonaktif", 260, 540)
  
  // Purba
  fill('black')
  textFont('Georgia')
  textSize(20)
  text("Pithecabthropus Mojokertensis", 1085, 530)
  textSize(20)
  text("(30.000 – 2 juta tahun)", 1115, 560)
  //penjelasan purba
  textSize(17)
  text("Ditemukan oleh Weeidenreich dan G.H.R von Koenigswald pada tahun 1936", 980, 1040)
  text("Perning, Mojokerto, Jawa Timur.", 980, 1060)
  text("Disebut pithe (kera) karena ciri-cirinya mirip dengan kera.", 980, 1080)
  text("Ciri- Ciri Pithecabthropus Mojokertensis : ", 980, 1100)
  text("- Berbadan tegap", 980, 1120)
  text("- Tinggi badan 165-180 cm", 980, 1140)
  text("- Otot kunyah yang kuat", 980, 1160)
  text("- Tulang kening tebal, menonjol, dan melebar sampai ke pelipis", 980, 1180)
  text("- Isi tengkorak diperkirakan 750-1300 cc", 980, 1200)
  text("- Belum memiliki tulang dagu", 980, 1220)
  text("- Terdapat tulang yang menonjol di belakang kepala", 980, 1240)
  
  {
    fill(0, 0, 0);
    line()
    line()
  }
  {
  }

}