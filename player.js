const fName = document.querySelector('input')
const button = document.querySelector('button')
const infoDiv = document.querySelector('div')


button.addEventListener('click', async () => {
    let id = fName.value
    let response = await axios.get(`https://www.balldontlie.io/api/v1/players/?search=${id}`)
    console.log(response.data)

    let playerName = response.data[2]
    infoDiv.innerHTML = `${playerName}`
})
