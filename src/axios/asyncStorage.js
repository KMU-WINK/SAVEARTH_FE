import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    try {
        const stringValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, stringValue);
    } catch (e) {
        console.error(e.message);
    }
};

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        }
    } catch (e) {
        console.log(e.message);
    }
};
