import { SHOW_WHITELIST_DATA, SHOW_BLOCKLIST_DATA, UPDATE_TFA_STATUS, UPDATE_FARM_STATUS, LOADERTEXT, ENABLELOADER, UPDATE_GLOBAL_CHAIN_ID } from "../Constants/constants";
 
export function userReducer(
    state = { blocklist: [], whitelist: [], updatestatus: false, updatefarmstatus: false,currentChainId:"1" }, action
) {
    switch (action.type) {
        case SHOW_WHITELIST_DATA:
            return {
                ...state,
                whitelist: action.payload,
            };
        case SHOW_BLOCKLIST_DATA:
            return {
                ...state,
                blocklist: action.payload,
            };
        case UPDATE_TFA_STATUS:
            return {
                ...state,
                updatestatus: action.payload,
            };
        case UPDATE_FARM_STATUS:
            return {
                ...state,
                updatefarmstatus: action.payload,
            };

        case ENABLELOADER: {

            return {
                ...state,
                enableLoader: action.payload
            }
        }

        case LOADERTEXT: {

            return {
                ...state,
                loaderText: action.payload
            }
        }

        case UPDATE_GLOBAL_CHAIN_ID: {
            return {
                ...state,
                currentChainId: action.payload
            }
        }

        
        default:
            return state;
    }
}
