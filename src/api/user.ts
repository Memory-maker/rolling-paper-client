import axios from "axios";
import { BASE_URL } from ".";

interface LoginRequest {
  accessToken: string;
  userId: string;
  refreshToken: string;
}

// export const login = ({ accessToken, userId, refreshToken }: LoginRequest) => {
//   if (!localStorage.getItem("token")) {
//     axios.post(`${BASE_URL}login`);
//     localStorage.setItem("token", accessToken);
//   }
// };
