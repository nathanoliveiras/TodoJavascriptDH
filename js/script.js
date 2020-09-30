let btnAddTarefa = document.querySelector('#adicionar-tarefa')
let inputTarefa = document.querySelector('#tarefa-digitada')
let divTarefas = document.querySelector('#tarefas')

function finalizarTarefa(){
    let listaDeBotoes = document.querySelectorAll('.botao-tarefa')
    for(let i =0; i<listaDeBotoes.length; i++){
        let botao = listaDeBotoes[i];
        botao.addEventListener('click',function(){
           botao.parentElement.parentElement.remove();
        })
    }
}
finalizarTarefa()

function criarTarefa(){
    if (inputTarefa.value.trim() == ""){ 
        //inputTarefa.style.border="2px solid red"
        return alert("Digite uma tarefa");
    }
    let tarefa = ` <div class="col-md-4 mb-4">
                        <div class="card-tarefa">
                             <div class="texto-tarefa">
                                ${inputTarefa.value}
                            </div>
                        <div class="botao-tarefa">
                            <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
                        </div>
                        </div>
                    </div>
                `
    divTarefas.innerHTML += tarefa
    //Limpar input
    inputTarefa.value = "";
    finalizarTarefa()
    //alert("Tarefa criada" + inputTarefa.value)
}
btnAddTarefa.addEventListener('click', criarTarefa)
inputTarefa.addEventListener('keypress', function(event){
    if (event.key == "Enter"){
        criarTarefa()
    }
})