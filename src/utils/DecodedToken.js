import CryptoJS from 'crypto-js';

const secretKey = '5d49221b96f65f672d35cb7af7bd1d568b38dc347'; // must match backend

export const decryptToken = (token) => {
  try {
    const decryptedBytes = CryptoJS.AES.decrypt(token, secretKey);
    const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
    console.log("decryptedData",decryptedData)
    return decryptedData;
  } catch (error) {
    console.error('Failed to decrypt token:', error);
    return null;
  }
};
