import Image from "next/image";
import {ArrowRightIcon} from '@heroicons/react/24/outline';

import Link from "next/link";
import LessonLogo from "@/app/ui/lesson-log";
import styles from '@/app/ui/home.module.css'

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col p-6 `}>
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-32">
                <LessonLogo/>
            </div>
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-19
                            md:w-2/5 md:px-20">
                    <strong>Welcome to Lessons!</strong>
                    <Link href="/login"
                          className="flex items-center gap-5 self-start rounded-lg
                      bg-blue-500 px-6 py-3 text-sm font-medium
                      text-white transition-colors hover:bg-blue-400 md:text-base"
                    >
                        <span>Log In</span> <ArrowRightIcon className="w-5 md:w-6"/>
                    </Link>

                    <Link href="/dashboard"
                          className="flex items-center gap-5 self-start rounded-lg
                      bg-blue-500 px-6 py-3 text-sm font-medium
                      text-white transition-colors hover:bg-blue-400 md:text-base"
                    >
                        <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6"/>
                    </Link>
                </div>
                <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                    {/* Add Hero Images Here */}
                    <Image
                        src="/hero-desktop.png"
                        width={1000}
                        height={760}
                        alt="Screenshots of the dashboard project showing desktop version"
                        className="hidden md:block"
                    />
                    <Image
                        src="/hero-mobile.png"
                        width={560}
                        height={620}
                        alt="Screenshot of the dashboard project showing mobile version"
                        className="block md:hidden"
                    />
                </div>
            </div>
        </main>
    )
}
