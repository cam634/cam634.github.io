const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'opensea13.p.rapidapi.com',
		'X-RapidAPI-Key': 'b2e53878e9msh04cd99d0ad94744p122769jsn3df2c4296d8b'
	}
};

const randomNumber = Math.floor((Math.random() * 1000) + 1)
console.log(randomNumber)

fetch('https://opensea13.p.rapidapi.com/asset/0x4b10701Bfd7BFEdc47d50562b76b436fbB5BdB3B/'+randomNumber+'?include_orders=false', options)
	.then(response => response.json())
	.then(response => {const list = response;
	console.log(response)
	  const poster = response.image_url
	  const name = response.name
	  const linkMaker = response.permalink
	    const movie = `<li><a href="${linkMaker}" target="_blank"><img src="${poster}"> <h2>${name}</h2></li>`
	    document.querySelector('.movies').innerHTML = movie;
	    const icon = ` <link rel="icon" type="image/svg+xml" href="${poster}">`
        document.querySelector('.head').innerHTML = icon;
	} )