let lista = []
let opcao // tive um problema por declarar a variavel no inicio e tambem dentro do escopo do while, nao pode!

while( opcao != 3 ) {

  opcao = Number(prompt(` 
  Olá usuário! Digite o número da opção desejada
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
`))
  
if (opcao == 1) {
   let item = prompt("Cadastre o item desejado")
   lista.push(item)
} 
  else if (opcao == 2) {

    if (lista.length > 1){
       alert(`${lista}`)
      }
      else{
       alert(`Não existem itens cadastrados`)
      } 
  }
  else {
  alert("Saindo do Sistema... Fim")
}
 console.log(opcao,lista)
}

// let option
// let items = []

// while(option != 3) {

//   option =  Number(prompt(`
//     Olá usuário! Digite o número da opção desejada
    
//     1. Cadastrar um item na lista
//     2. Mostrar itens cadastrados
//     3. Sair do programa
//   `))
  
  
//   if(option == 1) {
//     let item = prompt("Digite o nome do item")
//     items.push(item) 
//   }
  
//   else if (option == 2) {
  
//     if(items.length == 0) {
//       alert("Não existem itens cadastrados")
//     } else {
//       alert(items)
//     }
  
//   } else {
//     alert("Tchau")
//   }
  
//   console.log(option, items)

// }

// let lista = []
// let opcao 

// while( opcao != 3 ) {

//   opcao = Number(prompt(` 
//   Olá usuário! Digite o número da opção desejada
  
//   1. Cadastrar um item na lista
//   2. Mostrar itens cadastrados
//   3. Sair do programa
// `))
  
// if (opcao == 1) {
//    let item = prompt("Cadastre o item desejado")
//    lista.push(item)
// } 
//   else if (opcao == 2 && lista.length > 1) {
//        alert(`${lista}`)
//       } else if (opcao == 2 && lista.length < 1){
//        alert(`Não existem itens cadastrados`)
//       }
//  else {
//   alert("Saindo do Sistema... Fim")
// }
//  console.log(opcao,lista)
// }