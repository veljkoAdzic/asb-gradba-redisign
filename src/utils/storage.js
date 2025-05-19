

const UserKey = "Active-User";
const UsersTableKey = "Users-Table"
export function getActiveUser(){
    let user = JSON.parse(sessionStorage.getItem(UserKey))
    if(!user) return null;
    const table = JSON.parse( localStorage.getItem(UsersTableKey) )
    console.log( table[user.username])
    let data = table[user.username] || {projects: [], password: ""}
    console.log(data)
    if(data.password != user.password){
        alert("Погрешна лозинка!");
        return null;
    }
    // console.log({...data, password: user.password, username: user.username})
    return {...data, password: user.password, username: user.username}
}

export function storeActiveUser(user){ // {..username, password, projects}
    let table = JSON.parse(localStorage.getItem(UsersTableKey)) || {}
    table[user.username] = { projects: user.projects || [], password: user.password }
    localStorage.setItem(UsersTableKey, JSON.stringify(table))
    sessionStorage.setItem(UserKey, JSON.stringify(user))
}

export function validateUser(cred){
    if(!cred || !cred.username || !cred.password) return false

    let table = JSON.parse(localStorage.getItem(UsersTableKey)) || {}
    // Add new user
    if(!table[cred.username]) {
        table[cred.username] = {projects: [], password: cred.password}
        localStorage.setItem(UsersTableKey, JSON.stringify(table))
        return true;
    }

    return table[cred.username].password == cred.password
}