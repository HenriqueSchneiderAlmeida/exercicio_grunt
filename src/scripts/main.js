document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sorteador1').addEventListener('submit', function(evento) { 
        evento.preventDefault();      
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.ceil (numeroAleatorio);

        document.getElementById('numResult').innerHTML = numeroAleatorio;
        document.querySelector('.resultado1').style.display = 'block';
    })
}),
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sorteador2').addEventListener('submit', function(evento2) { 
        evento2.preventDefault();      
        let numeroMaximo2 = document.getElementById('numero-maximo2').value;
        numeroMaximo2 = parseInt(numeroMaximo2);

        let numeroAleatorio2 = Math.random() * numeroMaximo2;
        numeroAleatorio2 = Math.ceil (numeroAleatorio2);

        document.getElementById('numResult2').innerHTML = numeroAleatorio2;
        document.querySelector('.resultado2').style.display = 'block';
    })
})