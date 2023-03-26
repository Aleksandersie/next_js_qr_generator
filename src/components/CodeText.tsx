import React, {useEffect} from 'react';
import gsap from 'gsap'


const CodeText = () => {
    const tl = gsap.timeline()
    const bigText = React.useRef(null)
    const smallText = React.useRef(null)
    useEffect(()=>{

        tl.fromTo(
            bigText.current,{x:0, opacity: 0},{x:0,opacity:1,duration:1})
            .fromTo(smallText.current,{y:0,opacity:0},{y:0,opacity:1,duration:1}
            )
    }, [])
    return (
        <div>
          <p className={'codeTextHeader'} ref={bigText}>Для чего нужен QR код?</p>
            <p className={"codeText"} ref={smallText}>Основное предназначение QR код это быстрое распознавание с помощью камеры мобильного телефона.
                В коде можно зашифровать любую желаемую информацию, например ссылку на сайт
                Сгенерированный на сайте код вы можете нанести на визитку или рекламную вывеску.
                Либо придумать какой-то другой способ применения.</p>
        </div>
    );
};

export default CodeText;

