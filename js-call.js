// Burç adlarını ve tarih aralıklarını içeren bir obje
const burclar = [
    { ad: "Koç", baslangic: "03-21", bitis: "04-20" },
    { ad: "Boğa", baslangic: "04-21", bitis: "05-21" },
    { ad: "İkizler", baslangic: "05-22", bitis: "06-21" },
    { ad: "Yengeç", baslangic: "06-22", bitis: "07-22" },
    { ad: "Aslan", baslangic: "07-23", bitis: "08-22" },
    { ad: "Başak", baslangic: "08-23", bitis: "09-22" },
    { ad: "Terazi", baslangic: "09-23", bitis: "10-22" },
    { ad: "Akrep", baslangic: "10-23", bitis: "11-21" },
    { ad: "Yay", baslangic: "11-22", bitis: "12-21" },
    { ad: "Oğlak", baslangic: "12-22", bitis: "01-20" },
    { ad: "Kova", baslangic: "01-21", bitis: "02-19" },
    { ad: "Balık", baslangic: "02-20", bitis: "03-20" }
];

// Doğum tarihini alarak hangi burca denk geldiğini bulan fonksiyon
function burcHesapla(dogumTarihi) {
    // Doğum tarihini JavaScript Date objesine çevirme
    const tarih = new Date(dogumTarihi);
    const gun = tarih.getDate();
    const ay = tarih.getMonth() + 1; // JavaScript'de ay 0'dan başlar, 1 eklemeliyiz

    // Ay ve günü formatlayarak tarih stringine dönüştürme (MM-DD)
    const tarihString = `${ay.toString().padStart(2, '0')}-${gun.toString().padStart(2, '0')}`;

    // Burçleri kontrol etme
    for (let i = 0; i < burclar.length; i++) {
        const burc = burclar[i];
        if (tarihString >= burc.baslangic && tarihString <= burc.bitis) {
            return burc.ad;
        }
    }

    // Eğer hiçbir burca uymuyorsa
    return "Geçersiz tarih";
}

// Kullanıcıdan doğum tarihini alarak burç hesaplama
const dogumTarihi = prompt("Lütfen doğum tarihinizi (MM-DD-YYYY formatında) giriniz:");
const burc = burcHesapla(dogumTarihi);

if (burc !== "Geçersiz tarih") {
    console.log(`Doğum tarihiniz ${dogumTarihi} olan kişi ${burc} burcundadır.`);
} else {
    console.log("Geçersiz bir tarih girdiniz.");
}
