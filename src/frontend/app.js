//Api para buscar os produtos
//let endpoint = "https://raw.githubusercontent.com/guilhermeonrails/api-frontend/main/produtos.json"

//lista criada para nossos produtos
let produtos = []
let elementoParaInserirProdutos = document.getElementById("produtos__lista")
//função para buscar os produtos
buscarProdutosDaApi()



async function buscarProdutosDaApi(){
    let res = await fetch("./dados.json")
    produtos = await res.json()
    console.table(produtos)
    exibirProdutos(produtos)

}

function exibirProdutos(produtos){
    produtos.forEach(produto =>{ 
    elementoParaInserirProdutos.innerHTML += `
                     <li class="produtos__item">
                    <div class="produtos__content">
                        <img src="${produto.img}">
                        <div class="produtos__informacoes">
                            <h3>${produto.nome}</h3>
                            <p>${produto.descricao}
                            </p>
                            <h4>R$${produto.valorComDesconto}<s>R$ ${produto.valorSemDesconto}</s></h4>
                            <p>Frete GRÁTIS</p>
                        </div>
                    </div>
                </li> 
    `
    })
}