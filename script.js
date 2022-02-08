const itemArray = [
    {
        "id": 1,
        "product": "Pão",
        "price": 5.80,
        "quantity": 3,
        "section": "Padaria"
    },
    {
        "id": 2,
        "product": "Leite",
        "price": 3.00,
        "quantity": 1,
        "section": "Derivados de Leite"
    },
    {
        "id": 3,
        "product": "Carne",
        "price": 10.00,
        "quantity": 2,
        "section": "Carne"
    },
    {
        "id": 4,
        "product": "Tomate",
        "price": 4.00,
        "quantity": 5,
        "section": "Hortifruti"
    },
]

function showResults(arr, title) {

    const result = document.getElementById('results')

    result.innerHTML = ""

    const titleResult = document.createElement('h2')
    titleResult.innerHTML = title

    const paragraphResult = document.createElement('p')
    paragraphResult.innerHTML =  JSON.stringify(arr)

    result.appendChild(titleResult)
    result.appendChild(paragraphResult)

}



const filterPrice = (array) => {
    console.log(array)
    const result = array.filter(({price}) => {
         return price > 3.00})
         
        showResults(result, 'Filtro de Preço') 

}

const buttonPriceFilter = document.getElementById('filtroPreco')
buttonPriceFilter.addEventListener('click',() => filterPrice(itemArray))

const priceMap = (array) => {
    
    const result = array.map((value) => {

        let {id, price} = value

        if (id === 2) {
            price = 4.00
        }

        return {...value, price}

    })

    showResults(result, 'Mapa de Preços')

}

const buttonPriceMap = document.getElementById('mapaPreco')
buttonPriceMap.addEventListener('click', () => priceMap(itemArray))



const padariaReduce = (array) => {

    const totalList = array.reduce((acc, {quantity, section}) => {{

        if(section === 'Padaria'){
            acc += quantity
        }

        return acc   
         
    }}, 0)

    showResults(totalList, 'Soma de Itens, Padaria')

}

const buttonPadariaReduce = document.getElementById('reduzirPadaria')
buttonPadariaReduce.addEventListener('click', () => padariaReduce(itemArray))




const testMap = (array) => {

    const result = array.map((value) => {
        let { id, price } = value // Neste ponto desconstruirmos o objeto para armazenar as propriedades, id e price.
        if (id > 2) { // Aqui é validado se o id é maior que 2

            price = 2.00// Altere o valor da propriedade price para 2.00 dos índices com id's maior que 2
        
        }
        return {...value, price} // Nesta etapa utilizamos o spread(...), para remontar o objeto e passamos a propriedade que foi alterada
    })

    return result // Por fim é retornado um array de objetos, com as propriedades alteradas
}

/*
    [
        {id: 1, product: "Pão", price: 5.8, quantity: 3, section: "Padaria"},
        {id: 2, product: "Leite", price: 3, quantity: 1, section: "Derivados de Leite"},
        {id: 3, product: "Carne", price: 2, quantity: 2, section: "Carne"}
    ];
*/

const testFilter = (array) => {
    
    const result = array.filter( ({id}) => {
        return id <= 2// retorne apenas os itens que possuem id <= 2
})
    return result// retorne a variável result onde contem os resultados das filtragens
}


const testFind = (array) => {

    const result = array.find( ({id, product}) => {
        return product === 'Leite'// retorne apenas o item onde product === 'Leite'
    })

   return result// retorne a variável result onde contem os resultados das buscas

}

const testReduce = (array) => {

    const totalList = array.reduce((acc, {quantity, price}) => {
        acc = price*quantity// incremente a variável acc, com o valor de price*quantity
        return acc// retorne o valor armazenado em "acc" que neste caso é o valor total da compra
    }, 0)

    return totalList// retorne o valor de totalList para verificar quanto ficou sua compra
}