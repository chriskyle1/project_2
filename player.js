const input = document.querySelector('input')
const button = document.querySelector('button')
const infoDiv = document.getElementById('name')
const heightDiv = document.getElementById('height')
const weightDiv = document.getElementById('weight')
const postDiv = document.getElementById('post')

button.addEventListener('click', async () => {
    let idName = input.value
    let response = await axios.get(`https://www.balldontlie.io/api/v1/players/?search=${idName}`) 
    let playerId = response.data.data[0].id
    console.log(playerId)

    let fName = response.data.data[0].first_name
    let lName = response.data.data[0].last_name
    let heightI = response.data.data[0].height_inches
    let heightF = response.data.data[0].height_feet
    let weight = response.data.data[0].weight_pounds
    let position = response.data.data[0].position
    let team = response.data.data[0].team.full_name
    console.log(response)

    let averages = await axios.get(`https://www.balldontlie.io/api/v1/stats?player_ids[]=${playerId}`)
    console.log(averages)

    let threePointAvg = averages.data.data[0].fg3_pct
    

    infoDiv.innerHTML = `<h1>${fName} ` + `${lName}</h1>`
    heightDiv.innerHTML = `Height: ${heightF} Feet ` + `${heightI} Inches`
    weightDiv.innerHTML = `Weight: ${weight} pounds`
    postDiv.innerHTML = `Position: ${position}<br>Team: ${team}`
})
