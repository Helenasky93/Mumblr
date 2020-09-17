class Like < ApplicationRecord
    belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :user


end
