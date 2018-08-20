export const fetchUserByEmail = async email => {
    try {
        const response = await fetch('http://localhost:4000/users?email=' + email)
        const data = await response.json()
        return data[0]
    }
    catch (error) {
        console.log(error)
    }
}
export const fetchGymExercises = async () => {
    try {
        const response = await fetch('http://localhost:4000/gym_exercises')
        const exe = await response.json()
        return exe;
    }
    catch (error) {
        console.log(error)
    }
}

export const SaveFavoritesInDatabase = async (id, obj) => {
    const userReq = await fetch('http://localhost:4000/users?id=' + id)
    const userRes = await userReq.json()
    if (userRes[0]) {
        let updateUser = {
            ...userRes[0],
            favorites: [...userRes.favorites, obj]
        }

        const req = await fetch("http://localhost:4000/users/" + id, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        const res = await req.json();
        return res
    }
    else return null
}

export const UpdateDatabaseAfterADD = async (id, obj) => {
    const userReq = await fetch('http://localhost:4000/users?id=' + id)
    const userRes = await userReq.json()

    const p = userRes[0].calendarAttachments;
    let pom = p.filter(element => {
        return element.date.slice(0, 10) === obj.name.slice(0, 10)
    })
    if (pom.length > 0)
        return null
    if (userRes[0]) {
        let updateUser = {
            ...userRes[0],
            calendarAttachments: [...userRes[0].calendarAttachments, obj]
        }

        const req = await fetch("http://localhost:4000/users/" + id, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        const res = await req.json();
        return res
    }
    else return null
}



export const UpdateDatabaseAfterDEL = async (id, obj) => {
    const userReq = await fetch('http://localhost:4000/users?id=' + id)
    const userRes = await userReq.json()

    const p = userRes[0].calendarAttachments;
    let pom = p.filter(el => el.date.slice(0, 10) !== obj.date.slice(0, 10))
    console.log(pom)
    if (userRes[0]) {
        let updateUser = {
            ...userRes[0],
            calendarAttachments: pom
        }

        const req = await fetch("http://localhost:4000/users/" + id, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        const res = await req.json();
        return res
    }
    else return null
}


export const UpdateDatabaseAfterAddFavorite = async (id, obj) => {
    const userReq = await fetch('http://localhost:4000/users?id=' + id)
    const userRes = await userReq.json()

    const p = userRes[0].favorites;
    let pom = p.filter(element => {
        return element.name === obj.name
    })
    if (pom.length > 0)
        return null
    if (userRes[0]) {
        let updateUser = {
            ...userRes[0],
            favorites: [...p, obj]
        }

        const req = await fetch("http://localhost:4000/users/" + id, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        const res = await req.json();
       
        return res
    }
    else return null
}



export const UpdateDatabaseAfterRemoveFav  = async (id, name) => {
    const userReq = await fetch('http://localhost:4000/users?id=' + id)
    const userRes = await userReq.json()

    const p = userRes[0].calendarAttachments;
    let pom = p.filter(el => el.name !== name)
    if (userRes[0]) {
        let updateUser = {
            ...userRes[0],
            favorites: pom
        }

        const req = await fetch("http://localhost:4000/users/" + id, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        const res = await req.json();
        console.log(res)
        return res
    }
    else return null
}
