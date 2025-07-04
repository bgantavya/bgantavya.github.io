import { useState } from 'react';
import { CodeSquareIcon } from 'lucide-react';
export default function MagicPage({text, children}: {text: string, children?: React.ReactNode}) {
    const [init, setInit] = useState(true);
    function hehe() {
        setInit(!init);
      }
    
  return (
    <>
    {init ?(
        <button onClick={hehe} >
                  <CodeSquareIcon size={24} className={`mx-1 cursor-pointer inline-block rounded text-fuchsia-600`}/>
          </button> ) : (
        <span id="hehe" className={`text-fuchsia-500 animate-wiggle transition duration-700`}>{text}{children}</span>)}
        </>
  );
}