import React, {useEffect} from 'react';
import gsap from 'gsap'

const Header = () => {
    const headerBigText = React.useRef(null)
    const headerSmallText = React.useRef(null)
    const tl = gsap.timeline()
    useEffect(()=>{
        tl.fromTo(
            headerBigText.current,{x:-400, opacity: 0},{x:0,opacity:1,duration:1})
            .fromTo(headerSmallText.current,{y:-100,opacity:0},{y:0,opacity:1,duration:0.5}
            )
    }, [])
    return (
        <div className={"header"}>
           <h3 className={"headerTopText"} ref={headerBigText}>Генератор QR</h3>
            <h5 className={"headerSmallText"} ref={headerSmallText}>создай свой код</h5>
        </div>
    );
};

export default Header;