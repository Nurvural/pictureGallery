const accessKey = "Sv9pKP9aNJ5GMZcRYfjF72R5VUv_w-7YBOgU6ejdPEs";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=15`;
const gallery = document.getElementById('gallery');

fetch(apiUrl) // api den veri çekmek için istek gönderir.
    .then(response => response.json()) // response nesnesini alır ve json metodu ile JSON formatındaki verilere dönüştürür.
    .then(images => {
        gallery.innerHTML = ''; //gallery ögesinin içeriğini temizler
        images.forEach(image => {
            gallery.appendChild(createImageElement(image)); //her resim için bir img öğesi oluşturur ve gallery öğesine ekler.
            //create fonksiyonu ise resim nesnesini alır ve karşılık gelen bir <img> öğesi oluşturur.
        });
    })
    .catch(error => console.error('Error fetching images:', error)); //hata mesajı

const createImageElement = ({ urls: { regular }, alt_description, links: { html } }) => {
    const img = document.createElement('img');
    Object.assign(img, { src: regular, alt: alt_description, onclick: () => openImage(html) });
    return img;
};

const openImage = url => window.open(url, '_blank');

document.addEventListener('DOMContentLoaded', () => fetch(apiUrl));//sayfa yüklendiğinde fetch(apiUrl) fonksiyonunu çalıştırır.
