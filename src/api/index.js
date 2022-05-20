import axios from "@/utils/request.js";
import request from "@/utils/request.js";
import { getToken } from "@/utils/token.js";

// 获取主页数据, 只负责调用一个接口, 返回一个Promise对象
export const allChannelListAPI = () =>
  axios({
    url: "/v1_0/channels",
    method: "GET",
  });

// 用户 - 登录接口
export const loginAPI = ({ mobile, code }) => {
  return request({
    url: "/v1_0/authorizations",
    method: "POST",
    data: {
      mobile,
      code,
    },
  });
};

// 频道 - 获取用户选择的频道
export const getUserChannelsAPI = () =>
  request({
    url: "/v1_0/user/channels",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

// 文章 - 获取列表
export const articlesListAPI = ({ channel_id, timestamp }) =>request({
    url: "/v1_0/articles",
    method: "GET",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    params: {
      channel_id,
      // timestamp: new Date().getTime(),
      timestamp,
    },
  });
