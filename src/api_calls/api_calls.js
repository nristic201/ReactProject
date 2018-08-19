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
    console.log('poceo je fec')
    try {
        const response = await  fetch('http://localhost:4000/gym_exercises')
        const exe=await response.json()
        return exe;
    }
    catch (error) {
        console.log(error)
    }
}