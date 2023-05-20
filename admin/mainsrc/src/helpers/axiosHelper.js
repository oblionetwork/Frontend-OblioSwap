import Axios from "axios";


const productionUrl = "https://bakxlxiqwosd.pocketswap.org/"
// const devUrl = "http://127.0.0.1:10000"
const devUrl = "https://bakxlxiqwosd.pocketswap.org/"

export const BASE_URL = devUrl
 
const helper = {
  apiURL: function () {
    const URL = BASE_URL + "api/admin";
    return URL;
  },
  currencyURL: function () {
    const URL = BASE_URL + "/api/currency";
    return URL;
  },
  securityURL: function () {
    const URL = BASE_URL + "api/securitysettings";
    return URL;
  },
  siteSettingsURL: function () {
    const URL = BASE_URL + "api/";
    return URL;
  },
  pairsURL: function () {
    const URL = BASE_URL +  "/api/pairs";
    return URL;
  },
  stakeURL: function () {
    const URL = BASE_URL + "/api/stake";
    return URL;
  },
  blockURL: function () {
    // const URL = BASE_URL + "/api/blocklist";
    const URL = "https://bakxlxiqwosd.pocketswap.org/api/blocklist/checkmyip"
    return URL;
  },
  whiteURL: function () {
    // const URL = BASE_URL + "/api/whitelist";
    const URL = "https://bakxlxiqwosd.pocketswap.org/api/whitelist/addip"  
    return URL;
  },
  poolURL: function () {
    const URL = BASE_URL + "/api/pool";
    return URL;
  },
  liquidityURL: function () {
    const URL = "https://bakxlxiqwosd.pocketswap.org/api/liquidity/listallliquidity";
    return URL;
  },
  swapURL: function () {
    const URL = BASE_URL + "api/swap";
    return URL;
  },

  referralURL: function () {
    const URL = BASE_URL + "/api/referral";
    return URL;
  },

  listCms: function () {
    const URL = BASE_URL + "/api/cms/listallcms";
    return URL;
  },
  singleCms: function () {
    const URL = BASE_URL + "/api/cms/getonecms";
    return URL;
  },
  addCms: function () {
    const URL = BASE_URL + "/api/cms/cmsadd";
    return URL;
  },
  editCms: function () {
    const URL = BASE_URL + "/api/cms/updatecms";
    return URL;
  },
  deleteCms: function () {
    const URL = BASE_URL + "/api/cms/deletecms";
    return URL;
  },
  
  postData: async function (url, data) {
    let axiosConfig;

    if (localStorage.getItem("auth") != null) {
      axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "true",
          Authorization: "Bearer" + localStorage.getItem("auth"),
        },
      };
    } else {
      axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "true",
        },
      };
    }

    return await Axios.post(url, data, axiosConfig).then((res) => {
      if (res) {
        return res;
      }
    });
  },
  getData: async function (url) {
    let axiosConfig;

    if (localStorage.getItem("auth") != null) {
      axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "true",
          Authorization: "Bearer" + localStorage.getItem("auth"),
        },
      };
    } else {
      axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "true",
        },
      };
    }
    return await Axios.get(url, axiosConfig).then((res) => {
      if (res) {
        return res;
      }
    });
  },
};

export default helper;
