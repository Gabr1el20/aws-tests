(async() => {const response = await fetch('https://oq5npnwovb.execute-api.us-east-1.amazonaws.com/default/randomSakuga')
const data = await response.json()
console.log(data)
})()