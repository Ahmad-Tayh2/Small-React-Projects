import { useState } from "react";

function Document(){
    const [text, setText] = useState('');
    
    return (
        <>
            <textarea placeholder="Enter Text .."></textarea>
        </>
    )
}

export default Document;