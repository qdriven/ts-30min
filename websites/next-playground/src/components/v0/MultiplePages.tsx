/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZpuQuM8fVgg  https://v0.dev/t/ZpuQuM8fVgg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
    return (
        <div className="flex flex-col h-screen">
            <header className="bg-background border-b px-4 md:px-6 flex items-center h-14 shrink-0">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <MountainIcon className="w-6 h-6" />
                    <span className="text-lg font-bold">Omni</span>
                </Link>
                <nav className="ml-auto flex items-center gap-4">
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        YouTube
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Minecraft
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Discord
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder-user.jpg" />
                                <AvatarFallback>JP</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>My Account</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>
            </header>
            <div className="flex-1 grid grid-cols-[250px_1fr_250px] overflow-hidden">
                <div className="bg-muted border-r p-4 overflow-y-auto">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-medium">Servers</h3>
                        <div className="grid gap-2">
                            <Link
                                href="#"
                                className="flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                                prefetch={false}
                            >
                                <ServerIcon className="w-5 h-5" />
                                <span>Minecraft</span>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                                prefetch={false}
                            >
                                <ServerIcon className="w-5 h-5" />
                                <span>Discord</span>
                            </Link>
                        </div>
                        <h3 className="text-sm font-medium">Chat</h3>
                        <div className="grid gap-2">
                            <Link
                                href="#"
                                className="flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                                prefetch={false}
                            >
                                <MessageCircleIcon className="w-5 h-5" />
                                <span>General</span>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                                prefetch={false}
                            >
                                <MessageCircleIcon className="w-5 h-5" />
                                <span>Announcements</span>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                                prefetch={false}
                            >
                                <MessageCircleIcon className="w-5 h-5" />
                                <span>Support</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="overflow-y-auto">
                    <div className="grid gap-4 p-4">
                        <div className="rounded-lg overflow-hidden aspect-video">
                            <video
                                className="w-full h-full object-cover"
                                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
                                controls
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-lg overflow-hidden aspect-video">
                                <video
                                    className="w-full h-full object-cover"
                                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                    controls
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden aspect-video">
                                <video
                                    className="w-full h-full object-cover"
                                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                                    controls
                                />
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden aspect-video">
                            <video
                                className="w-full h-full object-cover"
                                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
                                controls
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-muted border-l p-4 overflow-y-auto">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-medium">Settings</h3>
                        <div className="grid gap-2">
                            <Link
                                href="#"
                                className="flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                                prefetch={false}
                            >
                                <SettingsIcon className="w-5 h-5" />
                                <span>General</span>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                                prefetch={false}
                            >
                                <MailsIcon className="w-5 h-5" />
                                <span>Notifications</span>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                                prefetch={false}
                            >
                                <PresentationIcon className="w-5 h-5" />
                                <span>Appearance</span>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                                prefetch={false}
                            >
                                <CookieIcon className="w-5 h-5" />
                                <span>Privacy</span>
                            </Link>
                        </div>
                        <h3 className="text-sm font-medium">Notifications</h3>
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2 rounded-md p-2 bg-accent text-accent-foreground">
                                <SignalIcon className="w-5 h-5" />
                                <span>New message from @shadcn</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-md p-2 bg-accent text-accent-foreground">
                                <SignalIcon className="w-5 h-5" />
                                <span>Minecraft server is online</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-md p-2 bg-accent text-accent-foreground">
                                <SignalIcon className="w-5 h-5" />
                                <span>Discord channel updated</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CookieIcon(props) {
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
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 14v.01" />
        </svg>
    )
}


function MailsIcon(props) {
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
            <rect width="16" height="13" x="6" y="4" rx="2" />
            <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
            <path d="M2 8v11c0 1.1.9 2 2 2h14" />
        </svg>
    )
}


function MessageCircleIcon(props) {
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
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
    )
}


function MountainIcon(props) {
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
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function PresentationIcon(props) {
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
            <path d="M2 3h20" />
            <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
            <path d="m7 21 5-5 5 5" />
        </svg>
    )
}


function ServerIcon(props) {
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
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
    )
}


function SettingsIcon(props) {
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
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}


function SignalIcon(props) {
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
            <path d="M2 20h.01" />
            <path d="M7 20v-4" />
            <path d="M12 20v-8" />
            <path d="M17 20V8" />
            <path d="M22 4v16" />
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}