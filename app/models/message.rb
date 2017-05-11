class Message < ApplicationRecord
  belongs_to :user

  # Validations
  validates :content, presence: true
  validates :user, presence: true


end
