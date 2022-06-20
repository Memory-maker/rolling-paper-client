export interface kakaoToken {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

export interface kakaoServerRes {
  id: number;
  kakao_account: {
    email: string;
    email_needs_agreement: boolean;
    has_email: boolean;
    is_email_valid: boolean;
    is_email_verified: boolean;
    profile: {
      nickname: string;
      thumbnail_image_url: string;
      profile_image_url: string;
      is_default_image: boolean;
    };
    profile_image_needs_agreement: boolean;
    profile_nickname_needs_agreement: boolean;
  };
  properties: {
    nickname: string;
    profile_image: string;
    thumbnail_image: string;
  };
}

export interface kakaoProfile {
  id: number;
  profile: {
    nickname: string;
    thumbnail_image_url: string;
    profile_image_url: string;
    is_default_image: boolean;
  };
}
