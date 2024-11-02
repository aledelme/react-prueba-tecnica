import { useEffect, useState } from "react"
import { getCatImage, getFact } from "../services/facts"


export function useCatFact() {
    const [fact, setFact] = useState(null)

    const refreshFact = async () => {
        const _fact = await getFact() 
        setFact(_fact)
    }

    useEffect(() => {
        refreshFact()
    }, [])

    return { fact, refreshFact }
}

export function useCatImage({fact}: {fact: string | null}) {
    const [urlImage, setUrlImage] = useState('')

    useEffect(() => {
        if (fact) getCatImage(fact).then(_urlImage => setUrlImage(_urlImage))
    }, [fact])

    return { urlImage }
}