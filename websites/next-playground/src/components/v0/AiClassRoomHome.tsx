/**
 * v0 by Vercel.
 * @see https://v0.dev/t/g9bjvmqSp10
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function Component() {
    return (
        <div className="grid min-h-screen w-full grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[60px] items-center border-b px-6">
                        <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
                            <BookOpenIcon className="h-6 w-6" />
                            <span>AI Classroom</span>
                        </Link>
                        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                            <BellIcon className="h-4 w-4" />
                            <span className="sr-only">Toggle notifications</span>
                        </Button>
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                        <nav className="grid items-start px-4 text-sm font-medium">
                            <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <HomeIcon className="h-4 w-4" />
                                Dashboard
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <BookIcon className="h-4 w-4" />
                                Classrooms
                                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">5</Badge>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <UserIcon className="h-4 w-4" />
                                Profile
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                <SettingsIcon className="h-4 w-4" />
                                Settings
                            </Link>
                        </nav>
                    </div>
                    <div className="mt-auto p-4">
                        <Card>
                            <CardHeader className="pb-4">
                                <CardTitle>Upgrade to Pro</CardTitle>
                                <CardDescription>Unlock all features and get unlimited access to our support team</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button size="sm" className="w-full">
                                    Upgrade
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[60px]">
                    <Link href="#" className="lg:hidden" prefetch={false}>
                        <BookOpenIcon className="h-6 w-6" />
                        <span className="sr-only">Home</span>
                    </Link>
                    <div className="w-full flex-1">
                        <form>
                            <div className="relative">
                                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                <Input
                                    type="search"
                                    placeholder="Search classrooms..."
                                    className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                                />
                            </div>
                        </form>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                            >
                                <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="flex items-center">
                        <h1 className="font-semibold text-lg md:text-2xl">Classrooms</h1>
                        <Button className="ml-auto" size="sm">
                            Create Classroom
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <Card className="group">
                            <CardHeader>
                                <CardTitle>Math 101</CardTitle>
                                <CardDescription>Taught by Mrs. Johnson</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2">
                                    <UsersIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">25 students</span>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <BookOpenIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">10 resources</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" size="sm" className="w-full">
                                    Join Classroom
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="group">
                            <CardHeader>
                                <CardTitle>English 201</CardTitle>
                                <CardDescription>Taught by Mr. Williams</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2">
                                    <UsersIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">18 students</span>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <BookOpenIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">15 resources</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" size="sm" className="w-full">
                                    Join Classroom
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="group">
                            <CardHeader>
                                <CardTitle>Biology 301</CardTitle>
                                <CardDescription>Taught by Dr. Lee</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2">
                                    <UsersIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">30 students</span>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <BookOpenIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">20 resources</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" size="sm" className="w-full">
                                    Join Classroom
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="group">
                            <CardHeader>
                                <CardTitle>History 401</CardTitle>
                                <CardDescription>Taught by Ms. Garcia</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2">
                                    <UsersIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">22 students</span>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <BookOpenIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">18 resources</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" size="sm" className="w-full">
                                    Join Classroom
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="flex items-center">
                        <h1 className="font-semibold text-lg md:text-2xl">My Profile</h1>
                        <Button className="ml-auto" size="sm">
                            Edit Profile
                        </Button>
                    </div>
                    <Card>
                        <CardContent>
                            <div className="flex items-center gap-4">
                                <Avatar className="h-16 w-16 border">
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <div className="text-lg font-semibold">John Doe</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">johndoe@example.com</div>
                                </div>
                            </div>
                            <Separator className="my-6" />
                            <div className="grid gap-4">
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Role</div>
                                    <div className="text-sm">Student</div>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Joined</div>
                                    <div className="text-sm">April 2023</div>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Classrooms</div>
                                    <div className="text-sm">4</div>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Resources</div>
                                    <div className="text-sm">32</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    )
}

function BellIcon(props) {
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
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}


function BookIcon(props) {
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
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
    )
}


function BookOpenIcon(props) {
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
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
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
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
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


function UserIcon(props) {
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}


function UsersIcon(props) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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