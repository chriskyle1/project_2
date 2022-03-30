const button = document.querySelector('button')
const div = document.querySelector('div')
const teamName = document.querySelector('input')

button.addEventListener('click', async () => {
    let id = teamName.value
    let response = await axios.get(`https://www.balldontlie.io/api/v1/teams/?=${id}`)
    console.log(response)


})