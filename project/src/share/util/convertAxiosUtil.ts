import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";
import {
  LOCAL_AUTHUSER_ADDRESS,
  LOCAL_AUTHUSER_ADDRESS_DOCKER,
  LOCAL_ROOT_ADDRESS,
} from "../const/serverAdress";

// ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを追加
const options = {
  ignoreHeaders: true,
};

//ユーザー認証のサーバー通信時にスネークケース、キャメルケースの変換を自動化する
export const convertAuthUserAxios = applyCaseMiddleware(
  axios.create({
    baseURL: LOCAL_AUTHUSER_ADDRESS,
  }),
  options,
);

//ユーザー認証のサーバー通信時にスネークケース、キャメルケースの変換を自動化する
export const convertAuthUserAxioDocker = applyCaseMiddleware(
  axios.create({
    baseURL: LOCAL_AUTHUSER_ADDRESS_DOCKER,
  }),
  options,
);
