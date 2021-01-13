const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=918d6b046a58dd3ee0317e908b860335&format=json'

function getMusicData() {
    return fetch(`${URL}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
        return {
            id: artist.mbid,
            name: artist.name,
            image: artist.image[3]['#text']
        }
    }))
}

export {getMusicData}