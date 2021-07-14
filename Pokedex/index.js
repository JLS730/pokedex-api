// const generateBtn = document.querySelector('.generate')
const pokemon151 = 151

const pokemonNameModal = document.querySelectorAll('.info-modal')
const btn = document.querySelectorAll('.btn')
const btn2 = document.querySelectorAll('.btn2')

const pokemonNameArray = []
const pokemonTypeArray = []

const getPokemonType = async () => {
    for(let i = 1; i < 152; i++) {
        await individualPokemons(i)
    }
}

const individualPokemons = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const response = await fetch(url)
    const pokemon = await response.json()

    pokemonNameArray.push(pokemon.name)
    pokemonTypeArray.push(pokemon.types[0].type.name)
}

getPokemonType()

function pokemonData() {
    function pokemonIndexNumberHashtag(indexNumber) {
        if(indexNumber < 9) {
            return `#00${indexNumber + 1}`
        } else if (indexNumber >= 9 && indexNumber < 99) {
            return `#0${indexNumber + 1}`
        } else {
            return `#${indexNumber + 1}`
        }
    }
    
    function pokemonIndexNumber(indexNumber) {
        if(indexNumber < 9) {
            return `00${indexNumber + 1}`
        } else if (indexNumber >= 9 && indexNumber < 99) {
            return `0${indexNumber + 1}`
        } else {
            return `${indexNumber + 1}`
        }
    }

    for(let i = 0; i < 151; i++) {
        document.querySelector('.pokemon-container').innerHTML += `
            <div class="pokemon ${pokemonTypeArray[i]}">
                <h4 class="info-text info-number">${pokemonIndexNumberHashtag(i)}</h4>
                <div class="frame">
                    <img 
                        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonIndexNumber(i)}.png" 
                        alt="${pokemonNameArray[i]}"
                        class="pokemon-image"
                    >
                </div>
                <a class="info-text info-name info-modal">${pokemonNameArray[i]}</a>
                <h3 class="info-text info-type">${pokemonTypeArray[i]}</h3>
            </div>
        `
    }
}

setTimeout(() => {
    pokemonData()
}, 4000)