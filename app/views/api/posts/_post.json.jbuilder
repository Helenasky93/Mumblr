json.extract! post, :id, :title, :body, :post_type, :author_id, :created_at
if post.file.attached?
    json.file_url url_for(post.file)
end
json.likes post.likes.count
