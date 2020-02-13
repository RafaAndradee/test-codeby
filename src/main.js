const url = 'data/acima-10-reais.json'

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
      <div id="cartImageBox">
      <img src="https://dummyimage.com/120x120/fff/878787.png&text=Produto" alt="">
      </div>
      <div id="cartDetails">
      <h4>${item.name}</h4>
      <p id="listPrice">${formatMoney(item.listPrice)}</p>
      <p id="sellingPrice">${formatMoney(item.sellingPrice)}</p>
      </div>
      `
      ul.appendChild(itemList)    
      

    })

    
    const sellingPrices = products.map(prices => {
      return prices.sellingPrice
    })
    const totalPrice = sellingPrices.reduce((total, current) => {
      return total + current
    })
    
    document.getElementById('totalPrice').innerHTML = formatMoney(totalPrice)

    const freteFree = document.querySelector('#messageFrete')
    if (totalPrice > 1000){
      freteFree.innerHTML = `<p id="freteFree">Parabéns, sua compra tem frete grátis</p>`
    }

    console.log(totalPrice);
    

  })

  
