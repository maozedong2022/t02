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
// axios内部, 会把参数对象转成json字符串格式发后台
// axios内部, 会自动携带请求参数(headers)里Content-Type: 'application/json' 帮你添加好
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
// 注意: 用户没有登录, 默认返回后台设置的默认频道列表
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
