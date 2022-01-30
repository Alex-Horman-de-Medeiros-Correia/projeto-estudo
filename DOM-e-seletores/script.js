//window.onload = funcRef; - a função de referência é chamada e carregada quando o evento de carregamento (onload) é ativado.

/* const load = () => {
    console.log('evento de carregamento detectado!');
}

window.onload = load; */


/* const botao = document.querySelector('#botao');
const param = document.querySelector('#param');



botao.addEventListener('click', function() {
    param.innerHTML = 'página carregada!';
}) */

//parseInt() - transformará uma string em number - parseInt('34') -> 34.

//Math.random() * aquiNumeroAtéOndeSeráAAleatoriedade - produz um número aleatório, tipo sorteio.

//style.marginLeft é uma propriedade CSS e, portanto, possui valor no formato string. Sendo assim, com o parseInt transformamos esse valor string em number PARA SÓ ENTÃO ele poder ser somado com o número aleatório com o math.random e SÓ DEPOIS tudo é somado com o 'px', transformando NOVAMENTE em string. Isso se faz necessário para que a propriedade css possa ser lida e interpretada e então funcione em nossa página!

window.onload = function() {
    const botao = document.querySelector('#botaoId');
    const carroUm = document.querySelector('.carro1');
    const carroDois = document.querySelector('.carro2');
    
    resetando();

    botao.addEventListener('click', function(event) {
        event.target.innerText = 'Acelera, mano!!!';
        //o event representa um evento interativo a partir do 'click' no botão, enquanto o target é um direcionamento para o próprio elemento HTML button, podendo acessar suas propriedades, inclusive podendo alterar texto com o innerText.
        carroUm.style.marginLeft = parseInt(carroUm.style.marginLeft) + (Math.random() * 100) + 'px';
        carroDois.style.marginLeft = parseInt(carroDois.style.marginLeft) + (Math.random() * 100) + 'px';


        if (parseInt(carroUm.style.marginLeft) > (window.innerWidth - 150)) {
            alert('A nave vermelha ganhou!');
            resetando();
            event.target.innerText = 'Iniciar Corrida!';
        }

        if (parseInt(carroDois.style.marginLeft) > (window.innerWidth - 150)) {
            alert('A nave azul ganhou!');
            resetando();
            event.target.innerText = 'Iniciar Corrida!';
        }
    })

    function resetando() {
        carroUm.style.marginLeft = 0;
        carroDois.style.marginLeft = 0;
    }
}