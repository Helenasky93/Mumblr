export const login = (user) => {
    return $.ajax({
        method:'POST',
        url:'/api/session',
        data: {user}
    });
};

export const signup = user => {
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: {user}
    })
};

export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session',
        
    })
};

export const allUsers = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/users'
    })
}

export const updateProfilePicture = user => {
    
    var data = new FormData()
    data.append('user[email]', user.email)
    data.append('user[id]', user.id)
    data.append('user[username]', user.username)
    data.append('user[profile_picture]', user.profile_picture)
    data.append('user[profile_picture_url]', user.profile_picture_url)

    return $.ajax({
        method:"PATCH",
        url: `api/users/${user.id}`,
        data,
        processData: false,
        contentType: false
    })
   
}


