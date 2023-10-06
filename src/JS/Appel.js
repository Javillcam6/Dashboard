const containerData1 = document.querySelector('#containerchart1')

const appleChart = document.getElementById('appleChart')

document.addEventListener('DOMContentLoaded', traerDatos1)

async function traerDatos1(){
  const apiUrl1 = await fetch (`https://api.stockdata.org/v1/data/eod?symbols=AAPL&api_token=ZkibrAspSTxzw4ysxWgmcEy4IssnIh3XXpsghA5i`)
  const respuesta1 = await apiUrl1.json()
  const StockInfo1 = respuesta1.data.splice(0,9)

  imprimir(StockInfo1)
  console.log(StockInfo1)
}

function graficar(StockInfo1) {
  const labels = StockInfo1.map((stock1)=>{
    return stock1.id
  })


  const datosChart = StockInfo1.map(stock1 => stock1.close)
  new Chart(appleChart, {
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
