
const login = process.env.LOGIN || false
getUsers(login, (users) => {
    console.log(login)
    console.log(`Running in port ${port}`)
    if (login == true) {
        console.log(users)
    }
})

function getUsers(login, callback) {
    setTimeout(() => {
        console.log('Reading users database...')
        callback([ 
            {id:'1', user: 'Joe' },
            {id:'2', user: 'Dan' },
            {id:'3', user: 'John' },
            {id:'4', user: 'Kent' }])
    }, 2000)
}

const port = process.env.PORT || 3000 