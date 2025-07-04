"use client";

import { BotOffIcon } from "lucide-react";

export function Stuti() {
    return(
        <div className="fixed bottom-0 right-0 m-6 p-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-fuchsia-700 cursor-pointer">
            {/* <BotMessageSquareIcon color="white" width={30}/> */}
            <BotOffIcon color="white" width={30}/>
        </div>
    )
}