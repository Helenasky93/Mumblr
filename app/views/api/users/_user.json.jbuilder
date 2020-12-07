json.extract! user, :id, :username, :email, :followed_users, :followers
if user.profile_picture.attached?
    json.profile_picture_url url_for(user.profile_picture)
end
json.likedPosts do 
    liked_ids = []
    user.likes.each do |post|
        liked_ids << post.id
    end
    json.array! liked_ids
end
