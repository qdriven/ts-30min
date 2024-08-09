/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nXssquy4v32
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import {Input} from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button"

export default function Component() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header className="sticky top-0 z-40 flex h-14 items-center border-b bg-background px-4 sm:px-6">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <YoutubeIcon className="h-8 w-8 text-red-500"/>
                    <span className="text-lg font-semibold">YouTube</span>
                </Link>
                <div className="relative ml-auto flex-1 max-w-md">
                    <div className="absolute inset-y-0 left-2 flex items-center justify-center">
                        <SearchIcon className="h-4 w-4 text-muted-foreground"/>
                    </div>
                    <Input
                        type="search"
                        placeholder="Search"
                        className="h-8 w-full rounded-full bg-muted pl-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <img src="/placeholder.svg" width={32} height={32} alt="User Avatar"
                                 className="rounded-full"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <div className="flex flex-1">
                <nav className="hidden h-full border-r bg-background px-4 py-6 sm:block sm:w-60">
                    <div className="grid gap-4">
                        <Link
                            href="#"
                            className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
                            prefetch={false}
                        >
                            <HomeIcon className="h-5 w-5 text-muted-foreground"/>
                            Home
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
                            prefetch={false}
                        >
                            <CompassIcon className="h-5 w-5 text-muted-foreground"/>
                            Explore
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
                            prefetch={false}
                        >
                            <ShoppingCartIcon className="h-5 w-5 text-muted-foreground"/>
                            Subscriptions
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
                            prefetch={false}
                        >
                            <LibraryIcon className="h-5 w-5 text-muted-foreground"/>
                            Library
                        </Link>
                        <div className="border-t pt-4">
                            <div className="mb-2 text-xs font-medium uppercase text-muted-foreground">Trending</div>
                            <div className="grid gap-2">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
                                    prefetch={false}
                                >
                                    <div className="h-5 w-5 rounded-full bg-muted"/>
                                    Gaming
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
                                    prefetch={false}
                                >
                                    <div className="h-5 w-5 rounded-full bg-muted"/>
                                    Music
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
                                    prefetch={false}
                                >
                                    <div className="h-5 w-5 rounded-full bg-muted"/>
                                    News
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
                                    prefetch={false}
                                >
                                    <div className="h-5 w-5 rounded-full bg-muted"/>
                                    Sports
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="flex-1 px-4 py-6 sm:px-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <div className="relative group">
                            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                            <img
                                src="/placeholder.svg"
                                alt="Thumbnail"
                                width={320}
                                height={180}
                                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                            />
                            <div className="absolute bottom-2 left-2 rounded-md bg-background/70 px-2 py-1 text-sm">
                                <div className="font-medium line-clamp-1">Introducing v0: Generative UI</div>
                                <div className="text-xs text-muted-foreground line-clamp-1">Vercel</div>
                            </div>
                        </div>
                        <div className="relative group">
                            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                            <img
                                src="/placeholder.svg"
                                alt="Thumbnail"
                                width={320}
                                height={180}
                                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                            />
                            <div className="absolute bottom-2 left-2 rounded-md bg-background/70 px-2 py-1 text-sm">
                                <div className="font-medium line-clamp-1">Introducing the frontend cloud</div>
                                <div className="text-xs text-muted-foreground line-clamp-1">Vercel</div>
                            </div>
                        </div>
                        <div className="relative group">
                            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                            <img
                                src="/placeholder.svg"
                                alt="Thumbnail"
                                width={320}
                                height={180}
                                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                            />
                            <div className="absolute bottom-2 left-2 rounded-md bg-background/70 px-2 py-1 text-sm">
                                <div className="font-medium line-clamp-1">Using Vercel KV with Svelte</div>
                                <div className="text-xs text-muted-foreground line-clamp-1">Lee Robinson</div>
                            </div>
                        </div>
                        <div className="relative group">
                            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                            <img
                                src="/placeholder.svg"
                                alt="Thumbnail"
                                width={320}
                                height={180}
                                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                            />
                            <div className="absolute bottom-2 left-2 rounded-md bg-background/70 px-2 py-1 text-sm">
                                <div className="font-medium line-clamp-1">Loading UI with Next.js 13</div>
                                <div className="text-xs text-muted-foreground line-clamp-1">Delba</div>
                            </div>
                        </div>
                        <div className="relative group">
                            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                            <img
                                src="/placeholder.svg"
                                alt="Thumbnail"
                                width={320}
                                height={180}
                                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                            />
                            <div className="absolute bottom-2 left-2 rounded-md bg-background/70 px-2 py-1 text-sm">
                                <div className="font-medium line-clamp-1">Introducing v0: Generative UI</div>
                                <div className="text-xs text-muted-foreground line-clamp-1">Vercel</div>
                            </div>
                        </div>
                        <div className="relative group">
                            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                            <img
                                src="/placeholder.svg"
                                alt="Thumbnail"
                                width={320}
                                height={180}
                                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                            />
                            <div className="absolute bottom-2 left-2 rounded-md bg-background/70 px-2 py-1 text-sm">
                                <div className="font-medium line-clamp-1">Introducing the frontend cloud</div>
                                <div className="text-xs text-muted-foreground line-clamp-1">Vercel</div>
                            </div>
                        </div>
                        <div className="relative group">
                            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                            <img
                                src="/placeholder.svg"
                                alt="Thumbnail"
                                width={320}
                                height={180}
                                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                            />
                            <div className="absolute bottom-2 left-2 rounded-md bg-background/70 px-2 py-1 text-sm">
                                <div className="font-medium line-clamp-1">Using Vercel KV with Svelte</div>
                                <div className="text-xs text-muted-foreground line-clamp-1">Lee Robinson</div>
                            </div>
                        </div>
                        <div className="relative group">
                            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                            <img
                                src="/placeholder.svg"
                                alt="Thumbnail"
                                width={320}
                                height={180}
                                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                            />
                            <div className="absolute bottom-2 left-2 rounded-md bg-background/70 px-2 py-1 text-sm">
                                <div className="font-medium line-clamp-1">Loading UI with Next.js 13</div>
                                <div className="text-xs text-muted-foreground line-clamp-1">Delba</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

function CompassIcon(props) {
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
            <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/>
            <circle cx="12" cy="12" r="10"/>
        </svg>
    )
}


function HomeIcon(props) {
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
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
    )
}


function LibraryIcon(props) {
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
            <path d="m16 6 4 14"/>
            <path d="M12 6v14"/>
            <path d="M8 8v12"/>
            <path d="M4 4v16"/>
        </svg>
    )
}


function SearchIcon(props) {
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
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
        </svg>
    )
}


function ShoppingCartIcon(props) {
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
            <circle cx="8" cy="21" r="1"/>
            <circle cx="19" cy="21" r="1"/>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
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


function YoutubeIcon(props) {
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
            <path
                d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
            <path d="m10 15 5-3-5-3z"/>
        </svg>
    )
}