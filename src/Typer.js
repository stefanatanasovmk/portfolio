import React, { useEffect, useState } from "react";
import "./Typer.css"
export default function Typer({ text }) {
     const [type, setType] = useState("")
     useEffect(() => {
          const timeout = setTimeout(() => {
               setType(text.slice(0, type.length + 1))
          }, 100)
          return () => clearTimeout(timeout)
     }, [type, text])
     return (
          <span className="AnimationText BlinkingCursor">
               {type}
          </span>
     )
}