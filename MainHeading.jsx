import { useTypewriter } from "react-simple-typewriter"

function Heading(){
    
    const [text] = useTypewriter({
        words:["Backend Developer" , "Full stack developer" , "React developer"],
        loop:{},
        typeSpeed:120,
        deleteSpeed : 100,
        cursorStyle: "|"
    })


    return(
        <>
        <div className="main-head">
        <h1 className="text-red-600">Mack Walker</h1><br></br>
        <h1 className="text-white -mt-28">{text}|</h1>
        </div>
        </>
    )
}

export default Heading

