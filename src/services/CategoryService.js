const baseURL = 'http://localhost:8080/categories'

export const getCategory = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const categoryById = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
    
}

export const postCategory = (data) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteCategory = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    }
        )
}

