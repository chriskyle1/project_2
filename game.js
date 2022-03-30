const game = document.querySelector('input')
const button = document.querySelector('button')
const div = document.querySelector('div')


button.addEventListener('click', async () => {
    let id = game.value
    let response = await axios.get(`https://www.balldontlie.io/api/v1/games/?search=${id}`)
    console.log(response.data)


})