class User < ApplicationRecord

  validates :username, presence: true
  validates :password_digest, presence: { message: 'Password can\'t be blank' } 
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :session_token, presence: true
  after_initialize :ensure_session_token

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

end
