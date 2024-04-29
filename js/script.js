function convertTemperature() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let resultText = document.getElementById("resultText");
    let button = document.getElementById("convertBtn");
    
    if (!isNaN(temperature)) {
        let result;
        let explanation;
        
        switch (unit) {
            case "celsius":
                result = {
                    fahrenheit: (temperature * 9/5) + 32,
                    kelvin: temperature + 273.15
                };
                explanation = `
                    Fahrenheit: ${temperature}°C × 9/5 + 32 = ${result.fahrenheit.toFixed(2)}°F
                    <br>
                    Kelvin: ${temperature}°C + 273.15 = ${result.kelvin.toFixed(2)}K
                `;
                break;
            case "fahrenheit":
                result = {
                    celsius: (temperature - 32) * 5/9,
                    kelvin: (temperature - 32) * 5/9 + 273.15
                };
                explanation = `
                    Celcius: (${temperature}°F - 32) × 5/9 = ${result.celsius.toFixed(2)}°C
                    <br>
                    Kelvin: (${temperature}°F - 32) × 5/9 + 273.15 = ${result.kelvin.toFixed(2)}K
                `;
                break;
            case "kelvin":
                result = {
                    celsius: temperature - 273.15,
                    fahrenheit: (temperature - 273.15) * 9/5 + 32
                };
                explanation = `
                    Celcius: ${temperature}K - 273.15 = ${result.celsius.toFixed(2)}°C
                    <br>
                    Fahrenheit: (${temperature}K - 273.15) × 9/5 + 32 = ${result.fahrenheit.toFixed(2)}°F
                `;
                break;
        }
        
        resultText.innerHTML = explanation;
        button.style.backgroundColor = "#ff3f6c";
        setTimeout(() => {
            button.style.backgroundColor = "#6c63ff";
        }, 1000);
    } else {
        resultText.innerHTML = "Masukkan suhu dalam angka!";
    }
}

function resetForm() {
    document.getElementById("temperature").value = "";
    document.getElementById("resultText").innerHTML = "";
}
