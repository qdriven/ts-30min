'use client'

import {SideNav} from "@/components/playground/SideBar/SideNav";


export default function  MainPage(children:React.ReactNode){
    return (
        <div className="flex h-full">
            <SideNav/>
        </div>
    )
}