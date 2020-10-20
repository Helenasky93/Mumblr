export const fetchAllLikes = () => {
    return $.ajax({
        url:'api/likes',
        method:'GET'
    })
}

export const receiveLike = (id) => {
    return $.ajax({
        url:`api/likes/${id}`,
        method:'GET'
    })
}

export const likePost = (id) => {
    return $.ajax({
        url:'api/likes',
        method:'POST',
        data: {id}
    })
}

export const unlikePost = (id) => {
    return $.ajax({
        url:`api/likes/${id}`,
        method:'DELETE',
        data:{id}
    })
}

