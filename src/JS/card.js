const containerDataCard = document.querySelector('#containercard')

const cardData = document.getElementById('cardData')

document.addEventListener('DOMContentLoaded', traerDatos)

async function traerDatos(){
  const apiUrl = await fetch (`https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=Jmidu4Y05WW3WpjvB8aHT5O5UbaJOnO7COZJ4L2z`)
  const respuesta = await apiUrl.json()
  const StockCard = respuesta.data.splice(0,9)

  imprimir(StockCard)
  console.log(StockCard)
}

function imprimir (stocksCard){
  containerData.innerHTML = stocksCard.map((stocksCard)=>{
    return `
    <div class='cardStock'>
    <h3>${stocksCard.ticker}</h3>
    <h3>${stocksCard.name}</h3>
    <h3>${stocksCard.price}</h3>
    <h3>${stocksCard.day_change}</h3>
    </div>
    `
  }).join('')
}