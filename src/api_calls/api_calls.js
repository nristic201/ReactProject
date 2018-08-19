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

export const SaveToFavorites = async (id, data) => {
    const userReq = await fetch('http://localhost:4000/users?id=' + id)
    const userRes=  await userReq.json()
    if (userRes[0]) {
        let updateUser = {
            ...userRes[0],
            favorites: data
        }

        const req = await fetch("http://localhost:4000/users/"+id, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        console.log(updateUser)
        const res = await req.json();
        console.log(res)
        return res
    }
    else return null
}