
export async function getFact() {
    const response = await fetch('https://catfact.ninja/fact')
    const json = await response.json()
    return json.fact
}

export async function getCatImage(fact: string) {
    const firstWord = fact.split(' ')[0]
    const response = await fetch(`https://cataas.com/cat/says/${firstWord}?fontColor=white&fontSize=100`)
    // const blob = await response.json()
    // setUrlImage(URL.createObjectURL(blob))
    return response.url
}