import { useEffect, useState } from "react";

function Artical (props){
    const lessText = props.info.substring(0, 200)
    const [isLess, setIsLess] = useState(true);

    function handleText(){
        setIsLess(!isLess);
    }

    return (
        <article className="single-artical" key={props.id}>
            <img src={props.image} alt='images' />
            <span className="price">{props.price}$</span>
            <div className="artical-info">
                <h4 className="artical-name">{props.name}</h4>
                <p>{isLess? lessText : props.info}</p>
                <button onClick={handleText}>{isLess? 'read more' : 'read less'}</button>
            </div>
        </article>
    )
}

export default Artical;