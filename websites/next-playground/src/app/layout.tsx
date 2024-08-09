import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import "../styles/globals.css";
import '../styles/styles.css'
import {Suspense} from "react";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import {App} from "antd"

const inter = Inter({
    subsets: ["latin"]
    , display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "Project Based Playground Lessons",

    description: "Project Based Learning ......",
    manifest: '/manifest.webmanifest',
    icons: [{url: '/favicon.svg', type: 'image/svg+xml'}],
    authors: [{name: 'fluent-qa', url: 'https://github.com/fluent-qa'}],
};

export const viewPort: Viewport = {
    colorScheme: 'light'
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="h-full" lang="zh-Hans-CN">
        <body className="m-0 h-full ${inter.variable}">
        <AntdRegistry>
            <App className="h-full">
                <main className="h-full">
                    <Suspense>
                        {children}
                    </Suspense>
                </main>
            </App>
        </AntdRegistry>
        </body>
        </html>
    );
}
