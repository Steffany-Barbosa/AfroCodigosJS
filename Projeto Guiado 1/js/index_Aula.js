//lógica aqui

//inicia uma lista vazia
let estoque = []

let proximoId = 1; 

//C => CRIAR 
function adicionarProduto(nome, quantidade, preco, descricao) {
        let produto = {
            id: proximoId++,
            nome: nome, 
            quantidade: quantidade, 
            preco: preco,
            descricao: descricao
        }
        estoque.push(produto)
}

// R(READ) => LER
function listarProduto(){
    for(let i = 0; i < estoque.length; i++){
        let produto = estoque[i];
        console.log("continuando", produto)
    }
} 
// posso utilizar o map ()


// U => Atualizar
function atualizarProduto (id, informacaoAtualizada) {
	for (let i = 0; i < estoque.length ; i++) {
		if (estoque[i].id === id) {
        	estoque[i] = Object.assign(estoque[i], informacaoAtualizada)
          break;
        }
    }
}

// D => Deletar
function removerProduto(id){
    for(let i = 0; i < estoque.length; i++){
        if(estoque[i].id === id){
            let removerProduto = estoque.splice(i, 1)
            console.log("removeu: ", removerProduto)
            return;
        }
    }
}

let novoProduto1 = adicionarProduto("Tênis", "30", "12.00", "Tênis da marca Afrocódigos");
let novoProduto2 = adicionarProduto("Blusa", "20", "10.00", "Blusa da marca Afrocódigos");
let novoProduto3 = adicionarProduto("Calça", "35", "30.00", "Calça da marca Afrocódigos");



listarProduto()

removerProduto(3)

listarProduto()