const url = 'data/abaixo-10-reais.json'

const ul = document.querySelector('#productList')

function formatMoney(x){
  let y = 100
  let finalCalc = x / y.toFixed(2)
  return finalCalc.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    const products = data.items
    products.map( (item) => {
      console.log(item.name)
      let itemList = document.createElement('li')
      let formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
      //item.listPrice.toFixed(2) / 100
      itemList.className = "productBox" 
      itemList.innerHTML = `

      <img src="${item.imageUrl}" alt="">

      <div>
      <h4>${item.name}</h4>
      <p>${formatMoney(item.listPrice)}</p>
      <p>R$ ${formatMoney(item.sellingPrice)}</p>
      </div>
      `
      
      ul.appendChild(itemList)
    })
    
  })

  
