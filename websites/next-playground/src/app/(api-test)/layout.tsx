'use client'

import {theme} from 'antd'
import React from "react";
import {SideNav} from "@/components/playground/SideBar/SideNav";


export default function MainLayout(props: React.PropsWithChildren){
    //TODO: check token/cookie/auth
    const token = theme.useToken()
    console.log("current token is ", token)
    return (
        <div className="flex h-full" style={{backgroundColor:token.token.colorFillTertiary}}>
            <SideNav/>
        </div>
    )
}