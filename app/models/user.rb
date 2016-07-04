class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  attr_reader :password
  validates :password, length: {minimum: 6, allow_nil: true}
  has_many :tracks, class_name: "Track", foreign_key: :artist_id
  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.valid_password?(password) ? user : nil
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.base64
  end
end
