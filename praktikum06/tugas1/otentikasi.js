function validasi(){
    let name = document.getElementById('name').value
    let password = document.getElementById('password').value

    if (name == "Ara" && password =="zah01"){
        window.location = "berhasil.html";
        alert("Berhasil")
        return false
    }else{
        alert('login gagal')
        return false
    }

}