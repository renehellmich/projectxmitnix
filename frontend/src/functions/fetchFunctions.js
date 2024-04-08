const fetchFunctions = {
    bigItems: (setBigStuff) => {
        fetch('http://localhost:3000/item')
        .then((res) => {
            res.json()
        })
        .then((data) => {
            setBigStuff((prevState) => ({
                ...prevState,
                data: data.filter((item) => item.size === 'groß')
            }))
        })
        .catch((err) => {
            console.error(err)
        })
    },
    mediumItems: (setMediumStuff) => {
        fetch('http://localhost:3000/item')
        .then((res) => {
            res.json()
        })
        .then((data) => {
            setMediumStuff((prevState) => ({
                ...prevState,
                data: data.filter((item) => item.size === 'mittel')
            }))
        })
        .catch((err) => {
            console.error(err)
        })
    },
    smallItems: (setSmallStuff) => {
        fetch('http://localhost:3000/item')
        .then((res) => {
            res.json()
        })
        .then((data) => {
            setSmallStuff((prevState) => ({
                ...prevState,
                data: data.filter((item) => item.size === 'klein')
            }))
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

export default fetchFunctions