const apiAves = async () => {
    const URL = 'https://aves.ninjas.cl/api/birds'
    const respuesta = await fetch(URL)
    return respuesta.json()
}

apiAves().then(respuesta => {
    const newDiv = (spanish, english, imagen) => `<div class="hidden mx-1 grid grid-cols-2 mt-3 bg-slate-800 rounded px-3 py-1 shadow-md hover:bg-red-700 hover:shadow-red-900 hover:cursor-pointer hover:animate-pulse">
        <div>
            <p class="font-semibold decoration-red-500 underline tracking-wide">${spanish}</p>
            <p class="text-sm">${english}</p>
        </div>
        <div class="max-w-sm mx-auto">
            <img class="py-1 w-20 h-20 object-cover rounded" src="${imagen}" alt="bird image">
        </div>    
    </div>`

    const main = document.getElementsByTagName('main')[0]

    respuesta.forEach(pajaro => {
        const { english, latin, spanish } = pajaro.name
        main.innerHTML += newDiv( english, spanish, pajaro.images.main )
    });
    
    const button = document.getElementById('showMore')

    let i = 3
    const addMore = () => {
        let another5 = i+5
        while (i < another5 & i < main.childNodes.length){
            main.childNodes[i].classList.remove("hidden")        
            i++
        }
        if (i === main.childNodes.length){
            button.classList.add('hidden')
        }
    }

    button.onclick = addMore
})
