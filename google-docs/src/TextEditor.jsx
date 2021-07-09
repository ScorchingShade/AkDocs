import React, { useCallback, useEffect, useRef } from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css"

export default function TextEditor() {


    const wrapperRef=useCallback((wrapperRef)=>{
        if(wrapperRef==null){return}
        wrapperRef.innerHTML =""
        const editor = document.createElement('div');
        wrapperRef.append(editor);
        new Quill(editor,{theme:"snow"})
 
    })

    return (
        <div className="container" ref={wrapperRef}>

        </div>
    )
}
