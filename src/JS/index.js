// const apiUrl = `https://api.stockdata.org/v1/data/quote?symbols=%2CTSLA%2CMSFT&api_token=4icw5TsyauRdPZCa7UKoxdUieoizFy26GbPDOb5g`;


////////////////////////////////////////////////////////////////

////////////////////Grafico TESLA///////////////////////////////////////////////////////////
const containerData = document.querySelector('#containerchart')

const chartsData = document.getElementById('chartData')

document.addEventListener('DOMContentLoaded', traerDatos)

async function traerDatos(){
  const apiUrl = await fetch (`https://api.stockdata.org/v1/data/eod?symbols=TSLA&api_token=ZkibrAspSTxzw4ysxWgmcEy4IssnIh3XXpsghA5i`)
  const respuesta = await apiUrl.json()
  const StockInfo = respuesta.data.splice(0,9)

  graficar(StockInfo)
  console.log(StockInfo)
}

function graficar(StockInfo) {
  const labels = StockInfo.map((stock)=>{
    return stock.id
  })


  const datosChart = StockInfo.map(stock => stock.close)
  new Chart(chartsData, {
    type: 'bar',
    data: {
      datasets: [{
          type: 'bar',
          label: 'Precio Actual',
          data: datosChart,
          borderWidth: 1,
          borderColor:['rgba(255,99,132)', 'rgba(0,69,125)'],
          backgroundColor: [
            'rgba(255,99,132,0.2)'
          ]
      }, {
          type: 'line',
          label: 'Precio anterior',
          data: datosChart,
          borderWidth: 1,
          borderColor:['rgba(0,69,125)'],
          backgroundColor: [
            'rgba(0,69,125, 0.2)'
          ]
      }],
      labels: labels

  },
  options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
}

/////////////////////////////




