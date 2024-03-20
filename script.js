const input_tarefa = document.getElementById("input-tarefa");
const botao_add_task = document.getElementById("botao-add-task");
const item_lista = document.querySelector(".item-lista");
const lista_tarefas = document.querySelector(".lista-Tarefas");


let lista = [];


botao_add_task.addEventListener("click", pegarValorInput);


function pegarValorInput() {

    if (!input_tarefa.value) {
        alert("Informe uma tarefa!");
        return;
    }


    lista.push({

        task: input_tarefa.value,
        concluida: false

    });



    input_tarefa.value = "";

    input_tarefa.focus();


    mostrarNaTela();

}


function mostrarNaTela() {

    let novaLi = '';


    lista.forEach((item, index) => {

        novaLi += `<li class="item-lista ${item.concluida && "realizada"}">
            
            <span> ${index + 1} </span>
            
            <p class="conteudoItem">${item.task}</p>

        
            <div class="btoacoes">
                <img src="img/checked.png" alt="Checar tarefa" onclick="checarTarefa(${index})">
                <i class="fa-solid fa-pen-to-square" onclick="alterarTarefa(${index})"></i>
                <img src="img/trash.png" alt="Deletar tarefa" onclick = "deletarTarefa(${index})">
            </div>
            
        </li>`;


    });

    lista_tarefas.innerHTML = novaLi;


}



function deletarTarefa(index){

    lista.splice(index, 1);

    mostrarNaTela();
}


function checarTarefa(index){
    
    lista[index].concluida = !lista[index].concluida;

    mostrarNaTela();
}


function alterarTarefa(index){
    
    input_tarefa.setAttribute("placeholder", "Informe sua alteração...");
    botao_add_task.textContent = "Alterar Tarefa";

    
    
    

    if(input_tarefa.value){

            if(confirm(`Você deseja alterar a tarefa ${index + 1} para ${input_tarefa.value} ?`))
            lista[index].task = input_tarefa.value;
            input_tarefa.value = "";
    input_tarefa.setAttribute("placeholder", "Informe sua próxima tarefa...");
botao_add_task.textContent = "Inserir Tarefa";
mostrarNaTela()
alert(`Tarefa ${index + 1} alterada com Sucesso!`)

}
    



        


       
    
}











