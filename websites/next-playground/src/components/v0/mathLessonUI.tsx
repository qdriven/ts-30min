/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9tk0WDvMrYm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#E6FCFF]">
            <div className="text-4xl font-bold text-[#008080] my-10">Welcome to Math Learning App</div>
            <div className="grid grid-cols-2 gap-4 w-3/4">
                <Link
                    href="#"
                    className="flex flex-col items-center justify-center py-4 px-6 rounded-xl bg-[#FFCCE6] text-[#800000] font-semibold text-lg hover:bg-[#FF99CC] transition-colors duration-300"
                    prefetch={false}
                >
                    <PlusIcon className="h-10 w-10 mb-2"/>
                    Addition
                </Link>
                <Link
                    href="#"
                    className="flex flex-col items-center justify-center py-4 px-6 rounded-xl bg-[#E6E6FA] text-[#000080] font-semibold text-lg hover:bg-[#CCCCFF] transition-colors duration-300"
                    prefetch={false}
                >
                    <MinusIcon className="h-10 w-10 mb-2"/>
                    Subtraction
                </Link>
                <Link
                    href="#"
                    className="flex flex-col items-center justify-center py-4 px-6 rounded-xl bg-[#E6FAE6] text-[#008000] font-semibold text-lg hover:bg-[#CCFFCC] transition-colors duration-300"
                    prefetch={false}
                >
                    <SquareDivideIcon className="h-10 w-10 mb-2"/>
                    Multiplication
                </Link>
                <Link
                    href="#"
                    className="flex flex-col items-center justify-center py-4 px-6 rounded-xl bg-[#FAE6E6] text-[#800000] font-semibold text-lg hover:bg-[#FFCCCC] transition-colors duration-300"
                    prefetch={false}
                >
                    <DivideIcon className="h-10 w-10 mb-2"/>
                    Division
                </Link>
            </div>
            <div className="mt-16 text-2xl font-bold text-[#008080]">Your Progress</div>
            <div className="w-3/4 h-2 bg-[#B3E0E6] rounded-full mt-4">
                <div className="h-full bg-[#008080] rounded-full w-1/2"/>
            </div>
        </div>
    )
}

function DivideIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="6" r="1"/>
            <line x1="5" x2="19" y1="12" y2="12"/>
            <circle cx="12" cy="18" r="1"/>
        </svg>
    )
}


function MinusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14"/>
        </svg>
    )
}


function PlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14"/>
            <path d="M12 5v14"/>
        </svg>
    )
}


function SquareDivideIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
            <line x1="8" x2="16" y1="12" y2="12"/>
            <line x1="12" x2="12" y1="16" y2="16"/>
            <line x1="12" x2="12" y1="8" y2="8"/>
        </svg>
    )
}


function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    )
}