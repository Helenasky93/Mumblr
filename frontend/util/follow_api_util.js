export const fetchAllFollows = () => {
    return $.ajax({
        url:'api/follows',
        method: 'GET'
    })
};

export const receiveFollow = (id) => {
    return $.ajax({
        url:`api/follows/${id}`,
        method:'GET'
    })
};

export const followUser = (id) => {
    return $.ajax({
        url:'api/follows',
        method:'POST',
        data:{id}
    })
};

export const unfollowUser = (id) => {
    return $.ajax({
        url:`api/follows/${id}`,
        method:'DELETE',
        data:{id}
    })
};