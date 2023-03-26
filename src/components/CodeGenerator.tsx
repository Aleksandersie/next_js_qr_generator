import React, {useEffect, useState} from 'react';
import QRCode from 'qrcode'
import gsap from 'gsap'
import Tween from 'gsap'
import {Sine,Elastic} from 'gsap'
import CodeText from "./CodeText";

const CodeGenerator = () => {
    const [darkColor,setDarkColor] = useState('#000000')
    const [lightColor,setLightColor] = useState('#ffffff')
    const [codeText,setCodeText] = useState('www.mySite.ru')
    const [codeImg,setCodeImg] = useState("")
    const genBtn = React.useRef(null)
    const qrRef = React.useRef(null)
    const tl = gsap.timeline()
   useEffect(()=>{
       QRCode.toDataURL(codeText,{type: 'image/jpeg',
           rendererOpts:{
               quality:1
           },
           color:{
               dark:darkColor,
               light:lightColor
           },
           margin:2
       }).then(data=>setCodeImg(data))
   },[])

    function generate(){
        QRCode.toDataURL(codeText,{type: 'image/jpeg',
            rendererOpts:{
                quality:1
            },
            color:{
                dark:darkColor,
                light:lightColor
            },
            margin:2
        }).then(data=>setCodeImg(data))
            .then(()=>qrAnimation())
    }

    function genBtnAnimation(){
        Tween.to(genBtn.current, 0.4, {scale:1.1, ease:Sine.easeOut})
        Tween.to(genBtn.current, 0.2, {scale:1, delay:0.4})
    }
    function qrAnimation(){
        Tween.to(qrRef.current, 0.4, {y:-15, ease:Elastic.easeOut})
        Tween.to(qrRef.current, 0.2, {y:0, delay:0.4})
    }
    return (
        <div className={"container codeBackground"}>
            <div className={"codeSection"}>
                <div className={"leftSelection"}>
                    <div className={'inputTextBlock'}>
                        <p className={'linkInputTopText'}>Введите текст</p>
                        <input type="text" className={"linkInput"} value={codeText} onChange={e=>setCodeText(e.target.value)}/>
                    </div>
                    <div className={"colorBlock"}>
                        <p className={'linkInputTopText'}>Выберите цвет</p>
                        <div className={"colorSelectorBlock"}>
                            <div className={"colorSelectorGroupe"}>
                                <p className={"colorSelectorLabel"}>цвет кода</p>
                                <input type="color" value={darkColor} onChange={e=>setDarkColor(e.target.value)} />
                            </div>
                            <div className={"colorSelectorGroupe"}>
                                <p className={"colorSelectorLabel"}>цвет фона</p>
                                <input type='color' value={lightColor} onChange={e=>setLightColor(e.target.value)}/>
                            </div>
                        </div>

                    </div>

                    <div className={"genButton"} ref={genBtn} onMouseEnter={genBtnAnimation} onTouchStart={genBtnAnimation}>
                        <p className={'genButtonText'} onClick={generate} >Создать код</p>
                    </div>

                </div>
                <div className={"rightSelection"}>
                    <p className={'yourCodeText'}>Ваш код</p>
                    <p className={'press'}>Нажмите что бы скачать</p>
                    <div>
                        <a href={codeImg} download={"qr.jpg"}>
                            <img width={250} height={250} alt={"QR code"} src={codeImg}  className={"imgArea"}  ref={qrRef}/>
                        </a>

                    </div>

                </div>
            </div>
            <CodeText/>
        </div>


    );
};

export default CodeGenerator;