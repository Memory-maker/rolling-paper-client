export interface kakaoToken {
  access_token: String;
  expires_in: Number;
  id_token: String;
  refresh_token: String;
  refresh_token_expires_in: Number;
  scope: String;
  token_type: String;
}

export interface kakaoServerRes {
  id: Number;
  kakao_account: {
    email: String;
    email_needs_agreement: Boolean;
    has_email: Boolean;
    is_email_valid: Boolean;
    is_email_verified: Boolean;
    profile: {
      nickname: String;
      thumbnail_image_url: String;
      profile_image_url: String;
      is_default_image: Boolean;
    };
    profile_image_needs_agreement: Boolean;
    profile_nickname_needs_agreement: Boolean;
  };
  properties: {
    nickname: String;
    profile_image: String;
    thumbnail_image: String;
  };
}

export interface kakaoProfile {
  id: Number;
  profile: {
    nickname: String;
    thumbnail_image_url: String;
    profile_image_url: String;
    is_default_image: Boolean;
  };
}
