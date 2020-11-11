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
    return $.ajax({
        method:"PATCH",
        url: `api/users/${post.id}`,
        data: {user}
    })
}


