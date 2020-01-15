export const loadDevs = devs => ({ type: "LOAD_DEVS", payload: devs });
export const addDev = dev => ({ type: "ADD_DEV", payload: dev });
export const removeDev = dev => ({ type: "DELETE_DEV", payload: dev });
