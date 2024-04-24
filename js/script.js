function convertToFar() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
        document.getElementById("explanationText").innerHTML = `
            <span>Fahrenheit ke Celcius</span><br>
            <strong>Cara Konversi Dari Celcius (°C) ke Fahrenheit (°F)</strong><br>
            <hr>
            Suhu S dalam derajat Fahrenheit (°F) sama dengan suhu S dalam derajat Celcius (°C) kali 9/5 tambah 32.<br>
            S(°F) = (S(°C) X 9/5) + 32 atau S(°F) = S(°C) X 1.8 + 32
        `;
    } else {
        alert("Masukkan suhu dalam angka!");
    }
}

function resetForm() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("explanationText").innerHTML = "";
}

function reverseConversion() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("celsius").value = celsius.toFixed(2);
        document.getElementById("explanationText").innerHTML = `
            <span>Celcius ke Fahrenheit</span><br>
            <strong>Cara Konversi Dari Fahrenheit (°F) ke Celcius (°C)</strong><br>
            <hr>
            Suhu S dalam derajat Celcius (°C) sama dengan suhu S dalam derajat Fahrenheit (°F) kurang 32 lalu dikalikan 5/9.<br>
            S(°C) = (S(°F) - 32) X 5/9 atau S(°C) = (S(°F) - 32) / 1.8
        `;
    } else {
        alert("Masukkan suhu dalam angka!");
    }
}
