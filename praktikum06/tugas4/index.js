function bendera() {
    let kotak = document.getElementById('gambar');
    let bendera = document.getElementById('Bendera');

    if (!Bendera.value == ' '){
        kotak.innerHTML = `<img src="${Bendera.value}.png"></img>`
        alert(`ini gambar bendera ${Bendera.value}.png`)
    }
    return false;
}