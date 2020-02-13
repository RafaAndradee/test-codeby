const url = 'Edata/abaixo-10-reais.json'

const ul = document.querySelector('#productList')

/*
let products = new Promise((resolve, reject) =>{
  if(products.length > 0) {
    resolve('parabéns')
  } else {
    reject('não deu certo')
  }
})

    products.map( (produto) => {
      console.log(produto);
      let li = document.createElement('li')
      li.innerHTML = `${produto.name}`
      ul.appendChild(li)
      
*/

fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    
  })

  
