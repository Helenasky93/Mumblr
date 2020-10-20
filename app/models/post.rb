# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  type       :string           not null
#  title      :string           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    has_many :likes,
    foreign_key: :post_id,
    class_name: :Like

    has_one_attached :file

    POST_TYPES = %w(text photo video).freeze
    validates :post_type, inclusion: POST_TYPES

    

end
