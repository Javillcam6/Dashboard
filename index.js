const apiUrl = `https://api.stockdata.org/v1/data/quote?symbols=%2CTSLA%2CMSFT&api_token=4icw5TsyauRdPZCa7UKoxdUieoizFy26GbPDOb5g`;




// const queryParams = new URLSearchParams(params);

// const url = `${apiUrl}?${queryParams.toString()}`;



fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error (`Error en la solicitud: ${response.status}`)
        }
        return response.json ();
    })

    .then((data) => {
        console.log(data)
    })
    .catch((error)=> {
        console.error(`Ocurrió un error ${error.message}`)
    })

