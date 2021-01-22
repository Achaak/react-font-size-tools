import { useState, useEffect } from "react";

const useFontSize = () => {
  const [finalFontSize, setFinalFontSize] = useState("1rem");

  useEffect(() => {
    setFontSize(getFontSize() || "1rem")
  }, [])

  useEffect(() => {
    if(document) document.body.style.fontSize = finalFontSize
  }, [finalFontSize])

  const getFontSize = () => {
    if(typeof window === 'undefined') return null

    return window.localStorage.getItem("font-size")
  }

  const setFontSize = (value: string) => {
    if(typeof window === 'undefined') return

    window.localStorage.setItem("font-size", value)
    setFinalFontSize(value)
  }

  return [finalFontSize, setFontSize] as const;
};

export default useFontSize