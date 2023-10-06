const containerData2 = document.querySelector('#containerchart2')

const msftChart = document.getElementById('msftChart')

document.addEventListener('DOMContentLoaded', traerDatos2)

async function traerDatos2(){
  const apiUrl2 = await fetch (`https://api.stockdata.org/v1/data/eod?symbols=MSFT&api_token=ZkibrAspSTxzw4ysxWgmcEy4IssnIh3XXpsghA5i`)
  const respuesta2 = await apiUrl2.json()
  const StockInfo2 = respuesta2.data.splice(0,9)

  imprimir(StockInfo2)
  console.log(StockInfo2)
}

function graficar(StockInfo2) {
  const labels = StockInfo2.map((stock2)=>{
    return stock2.id
  })


  const datosChart = StockInfo2.map(stock2 => stock2.close)
  new Chart(msftChartChart, {
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