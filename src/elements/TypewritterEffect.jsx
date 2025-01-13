import React, { useEffect, useState } from 'react'

const TypewritterEffect = ({text, speed}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if(index < text.length){
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeoutId);
        }
    }, [index, text, speed]);

  return (
    <div className='font-mono text-md'>
        {displayedText}
    </div>
  )
}

export default TypewritterEffect