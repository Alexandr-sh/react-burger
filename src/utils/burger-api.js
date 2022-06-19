export function checkApiError(res) {
    if (res.ok) {
        return res;
    }
    return Promise.reject(`Ошибка сервера -- ${res.status}`)
}

export function getIngridients(url) {
    return fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => checkApiError(res)).catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
}

export function getOrderData(url,ingridients) {
    return fetch(url,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ingridients)
      })
        .then(res => checkApiError(res))
}


