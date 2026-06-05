//Para fazer o body mudar de cor com o scroll do mouse:
const body = document.querySelector('body')
window.addEventListener('scroll', function() 
{
    const posicao =     window.scrollY;
        //oq acontece no scroll
    if (posicao<1100){
        body.style.backgroundColor = '#7C0A2D'
    }
    else{
        body.style.backgroundColor = '#4B0082'
        
    }
} )

const mouse = document.querySelector('#cursor')
/**o '#' no parâmetro busca uma id,
*se não houvesse '#' ele buscaria uma classe**/
document.addEventListener('mousemove', function(e){
/**o addeventlistener precisa de algo para trabalhar e esse é o 'mousemove'
 * e ele tem que ser escutado por alguém esse alguém acho que é document
*/
    mouse.style.left = e.clientX + 'px'
    mouse.style.top = e.clientY + 'px'
    /**essas linhas ai de cima usam a lógica de alterar propriedade css com:
     * elemento.style.propriedadeCSS = 'valor' com essa sintaxe é possível altera-lás
     * ou seja o mouse X (left) e Y (top), diz ao navegador para mover X ou Y
     * posição na tela, seria uma edição do CSS em tempo real.
     * 
     * Agora no "e.clientX & Y" consta as posições horizontais e verticais. Contando da borda esquerda de tela (X),
     * e contando verticalmente do topo da tela (Y)
     * Por isso de existir left e top
     */
} );
//**usuário move o mouse
//  evento 'mousemove' dispara
//      e guarda as coordenadas do mouse (clientX, clientY)
//           a gente pega essas coordenadas
//               e aplica no elemento #cursor via style.left e style.top
//                   o cursor segue o mouse
// Add 'click' class to cursor on mousedown and remove on mouseup
document.addEventListener("mousedown", (e) => cursor.classList.add("click"));
document.addEventListener("mouseup", (e) => cursor.classList.remove("click"));

const trace = document.querySelector('#cursor-rastro')

document.addEventListener('mousemove', function(e){
    /* esse 'mousemove' é chamado "evento"*/
    mouse.style.left = e.clientX + 'px'
    mouse.style.top = e.clientY + 'px'
    trace.style.left = e.clientX + 'px'
    trace.style.top = e.clientY + 'px'
});

/**
 * Carrossel
 */

//

/** cria uma variável para verificar qual card está sendo exibido no momento
 * começa com zero (primeiro card)
 */
let indiceAtivo = 0

/** Seleciona TODOS os elementos(querySelectorAll),'.card' da página e retorna uma lista com eles
 * no "quertySelectorAll"
 */
const carrossel = document.querySelectorAll('.card')

/** Uma função que move os card para onde eles deveriam
 * sempre é chamada ao clicar nos botões
*/
function atualizarCarrossel(){

    /**Move o card horiz com base na distância do card ativo */
    carrossel.forEach(function(card, indice) {
        card.style.transform = `translateX(${(indice - indiceAtivo) * 100}%)`
    /**se indiceAtivo = 1;
     * card 0 (0 - 1) * 100 = -100% (vai para esquerda)
     * card 1 (1 - 1) * 100 = 0% (mantém)
     * card 2 (2 - 1) * 100 = 100% (vai pra direita)
     */
    })
}

const btnProximo = document.querySelector('#proximo')
//Pega o botão de próximo pelo id

//escuta o click nesse botão e faz{
btnProximo.addEventListener('click', function(){

    //se indiceAtivo menor que largura da var carrossel menos um faça
    if (indiceAtivo < carrossel.length - 1)
        
        {
        indiceAtivo = indiceAtivo + 1 //avança um card
        atualizarCarrossel() //atualiza a posição visual
    }
})

const btnAnterior = document.querySelector('#anterior')
//Pega o botão pelo id nesse caso o '#anterior'

//escuta o click nesse botão
btnAnterior.addEventListener('click', function(){

    /**se indiceAtivo menor que zero faça:
     * indiceAtivo = indiceAtivo - 1 ,ou seja, volta um card
     * atualiza o carrossel logo em seguida
     */
    if (indiceAtivo > 0) {
        indiceAtivo = indiceAtivo - 1
        atualizarCarrossel()
    }
})

atualizarCarrossel()

/**
 * Navegação + Scroll-Spy (C)
 * (destaca no nav qual seção está visível)
 */

const navLinks = document.querySelectorAll('.navegacao a')
//Especifica qual parte do Html o Script tem que "mexer" e guarda em uma var

const sectionIds = ['sobremim-tag', 'projetos-tag', 'contato-tag']
//Cria uma var e define o que ele deve observar

function setActiveLink(activeId) {
    navLinks.forEach(link => {
        const href = link.getAttribute('href') || ''
        const isActive = href === `#${activeId}`
        link.classList.toggle('active', isActive)
    })
}


if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return
            setActiveLink(entry.target.id)
        })
    }, {
        threshold: 0.35,
    })

    sectionIds.forEach(id => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
    })
}