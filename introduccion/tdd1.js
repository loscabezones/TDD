function test_sum() {
    var calculadora = new Calculadora();

    var a = Math.floor(Math.random() * 10);
    var b = Math.floor(Math.random() * 10);

    if (calculadora.suma(a, b) === a + b) {
        console.log("Test ok!");
    } else {
        console.log("Test fail!");
    }
}

function Calculadora() { }

Calculadora.prototype.suma = function (a, b) {
    return a + b;
}

test_sum();