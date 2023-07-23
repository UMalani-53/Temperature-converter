function convert() {
            var inputTemp = parseFloat(document.getElementById("inputTemp").value);
            var inputUnit = document.getElementById("inputUnit").value;
            var result = document.getElementById("result");

            if (inputUnit === "celsius") {
                var fahrenheitTemp = (inputTemp * 9/5) + 32;
                result.innerHTML = inputTemp + "°C = " + fahrenheitTemp + "°F";
            } else if (inputUnit === "fahrenheit") {
                var celsiusTemp = (inputTemp - 32) * 5/9;
                result.innerHTML = inputTemp + "°F = " + celsiusTemp + "°C";
            }
        }