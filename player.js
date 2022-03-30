const input = document.querySelector('input')
const button = document.querySelector('button')
const infoDiv = document.getElementById('name')
const heightDiv = document.getElementById('height')
const weightDiv = document.getElementById('weight')
const postDiv = document.getElementById('post')
const threePts = document.getElementById('threePts')
const shotPct = document.getElementById('shotpct')
const gamePlayed = document.getElementById('gamesPlayed')
const shotTot = document.getElementById('shottot')


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
    let records = await axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerId}`)
    console.log(records)

    let threePointAvg = averages.data.data[0].fg3_pct
    let shootingAvg = averages.data.data[0].fg_pct
    let gamesPlayed = records.data.data[0].games_played
    let shotTotal = records.data.data[0].pts

    infoDiv.innerHTML = `<h1>${fName} ` + `${lName}</h1>`
    heightDiv.innerHTML = `Height: ${heightF} Feet ` + `${heightI} Inches`
    weightDiv.innerHTML = `Weight: ${weight} pounds`
    postDiv.innerHTML = `Position: ${position}<br>Team: ${team}`
    threePts.innerHTML = `The current number of Three Pointers made this season is: ${threePointAvg}`
    shotPct.innerHTML = `The current total shot percentage is: ${shootingAvg}%`
    gamePlayed.innerHTML = `The current number of games played for this season is: ${gamesPlayed} games.`
    shotTot.innerHTML = `The current total of shots for this player is: ${shotTotal} shots.`
})
