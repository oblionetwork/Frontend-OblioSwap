import {
    SHOW_BLOCKLIST_DATA, SHOW_WHITELIST_DATA, UPDATE_TFA_STATUS, UPDATE_FARM_STATUS, ENABLELOADER, LOADERTEXT, UPDATE_GLOBAL_CHAIN_ID
} from "../Constants/constants";

export const showWhiteListData = (data) => {
    return {
        type: SHOW_WHITELIST_DATA,
        payload: data,
    };
};

export const showBlockListData = (data) => {
    return {
        type: SHOW_BLOCKLIST_DATA,
        payload: data,
    };
};

export const updateTfaData = (data) => {
    return {
        type: UPDATE_TFA_STATUS,
        payload: data,
    };
};
export const enableLoader = (data) => ({
    type: ENABLELOADER,
    payload: data
})

export const loaderText = (data) => ({
    type: LOADERTEXT,
    payload: data
})

export const updatefarmdata = (data) => {
    return {
        type: UPDATE_FARM_STATUS,
        payload: data,
    };
};



export const updateGlobalChainId = (data) => {
    return {
        type: UPDATE_GLOBAL_CHAIN_ID,
        payload: data,
    };
};
