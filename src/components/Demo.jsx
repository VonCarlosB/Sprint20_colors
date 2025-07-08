import { useEffect, useRef } from "react";

export default function DemoUseRef() {
    const arrayRef = useRef([])
    const arrayNormal = []

    const handleButton = () =>{
        arrayRef.current.push('A')
        arrayNormal.push('A')
        console.log('Normal', arrayNormal)
        console.log('Ref', arrayRef.current)
    }
    
    return (
        <button onClick={handleButton}>Añadir elemento</button>
    )
}