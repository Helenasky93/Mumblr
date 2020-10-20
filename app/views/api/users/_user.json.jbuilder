json.extract! user, :id, :username, :email
json.likedPosts do 
    liked_ids = []
    user.likes.each do |post|
        liked_ids << post.id
    end
    json.array! liked_ids
end