import { Buffer } from 'buffer';
import { useState } from 'react';

export default function useSessionStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      if (item) {
        const decodeJson = Buffer.from(item, 'base64').toString('ascii');
        return decodeJson ? JSON.parse(decodeJson) : initialValue;
      } else {
        return initialValue;
      }
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      // Save to local session
      const jsonInText = JSON.stringify(valueToStore);
      const base64json = Buffer.from(jsonInText).toString('base64');
      window.sessionStorage.setItem(key, base64json);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = () => window.sessionStorage.removeItem(key);

  return { storedValue, setValue, removeItem };
}
