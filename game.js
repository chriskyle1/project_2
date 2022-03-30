const monthInput = document.getElementById('month')
const dayInput = document.getElementById('day')
const yearInput = document.getElementById('year')
const button = document.querySelector('button')
const div = document.querySelector('div')


button.addEventListener('click', async () => {
    let year = yearInput.value
    let month = monthInput.value
    let day = dayInput.value
    let response = await axios.get(`https://www.balldontlie.io/api/v1/games/?dates[]=${year}-${month}-${day}`)
        
    for (let i = 0; i < response.length; i++){
        console.log(response.data.data.home_team_score)
    }


})