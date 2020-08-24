export const fetchAllPosts = () => {
    return $.ajax({
        method:'GET',
        url: '/api/posts',
    })
};

export const fetchSinglePost = (postId) => {
    return $.ajax({
        method:'GET',
        url: `/api/posts/${postId}`
    })
};

export const createPost = (post) => {
    return $.ajax({
        method:'POST',
        url:'/api/posts',
        data: {post}
    })
};

export const updatePost = post => {
    // debugger
    return $.ajax({
        method:'PATCH',
        url:`/api/posts/${post.id}`,
        data: {post: post}
    })
};

export const deletePost = postId => {
    return $.ajax({
        method:'DELETE',
        url:`/api/posts/${postId}`
    })
};