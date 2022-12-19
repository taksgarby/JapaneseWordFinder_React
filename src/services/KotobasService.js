const baseURL = 'http://localhost:8080/kotoba'

export const getKotoba = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const kotobaById = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
    
}

export const postKotoba = (data) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteKotoba = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    }
        )
}

