export const login = (user) => {
    $.ajax({
        method:'POST',
        url:'/api/session',
        data: {user}
    }).then(console.log);
};

export const signup = user => {
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: {user}
    })
};

export const logout = () => {
    $.ajax({
        method: 'DELETE',
        url: '/api/session',
        
    })
}

