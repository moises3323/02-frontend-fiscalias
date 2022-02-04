import { Buffer } from 'buffer';
import { useState, useRef } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useRef(
    useState(() => {
      try {
        const item = window.localStorage.getItem(key);
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
    })
  ).current;

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      // Save to local storage
      const jsonInText = JSON.stringify(valueToStore);
      const base64json = Buffer.from(jsonInText).toString('base64');
      window.localStorage.setItem(key, base64json);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = () => window.localStorage.removeItem(key);

  return { storedValue, setValue, removeItem };
}
