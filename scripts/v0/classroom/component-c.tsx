/**
 * v0 by Vercel.
 * @see https://v0.dev/t/StRx1dfFb5T
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link
              href="#"
              className="flex items-center gap-2 font-semibold"
              prefetch={false}
            >
              <BookIcon className="h-6 w-6" />
              <span className="">AI Classroom</span>
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
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                prefetch={false}
              >
                <UsersIcon className="h-4 w-4" />
                Students
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
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team
                </CardDescription>
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
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link href="#" className="lg:hidden" prefetch={false}>
            <BookIcon className="h-6 w-6" />
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
                <img
                  src="/placeholder.svg"
                  width="32"
                  height="32"
                  className="rounded-full"
                  alt="Avatar"
                />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg w-12 h-12 bg-[#55efc4] text-3xl flex items-center justify-center">
                    <BookIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1 items-start">
                    <div className="font-bold">Math 101</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Algebra and Geometry
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex items-center gap-1 px-2 h-7 rounded-full bg-blue-100 border-blue-400 border-2">
                    <UsersIcon className="h-4 w-4" />
                    <span>25</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 h-7 rounded-full bg-gray-100 border-2 border-gray-100 hover:bg-white hover:border-gray-300 dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-950">
                    <BookIcon className="h-4 w-4" />
                    <span>12</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 h-7 rounded-full bg-gray-100 border-2 border-gray-100 hover:bg-white hover:border-gray-300 dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-950">
                    <MessageSquareIcon className="h-4 w-4" />
                    <span>8</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Button size="sm" variant="outline">
                    Join
                  </Button>
                  <Button size="sm">Manage</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg w-12 h-12 bg-[#ffeaa7] text-3xl flex items-center justify-center">
                    <BookIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1 items-start">
                    <div className="font-bold">Biology 201</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Cellular and Molecular Biology
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex items-center gap-1 px-2 h-7 rounded-full bg-blue-100 border-blue-400 border-2">
                    <UsersIcon className="h-4 w-4" />
                    <span>18</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 h-7 rounded-full bg-gray-100 border-2 border-gray-100 hover:bg-white hover:border-gray-300 dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-950">
                    <BookIcon className="h-4 w-4" />
                    <span>7</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 h-7 rounded-full bg-gray-100 border-2 border-gray-100 hover:bg-white hover:border-gray-300 dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-950">
                    <MessageSquareIcon className="h-4 w-4" />
                    <span>4</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Button size="sm" variant="outline">
                    Join
                  </Button>
                  <Button size="sm">Manage</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg w-12 h-12 bg-[#fdcb6e] text-3xl flex items-center justify-center">
                    <BookIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1 items-start">
                    <div className="font-bold">Physics 301</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Mechanics and Electromagnetism
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex items-center gap-1 px-2 h-7 rounded-full bg-blue-100 border-blue-400 border-2">
                    <UsersIcon className="h-4 w-4" />
                    <span>32</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 h-7 rounded-full bg-gray-100 border-2 border-gray-100 hover:bg-white hover:border-gray-300 dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-950">
                    <BookIcon className="h-4 w-4" />
                    <span>15</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 h-7 rounded-full bg-gray-100 border-2 border-gray-100 hover:bg-white hover:border-gray-300 dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-950">
                    <MessageSquareIcon className="h-4 w-4" />
                    <span>11</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Button size="sm" variant="outline">
                    Join
                  </Button>
                  <Button size="sm">Manage</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Students</h1>
            <Button className="ml-auto" size="sm">
              Invite Student
            </Button>
          </div>
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Classrooms</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>John Smith</div>
                    </div>
                  </TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell>Math 101, Biology 201</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SA</AvatarFallback>
                      </Avatar>
                      <div>Sarah Anderson</div>
                    </div>
                  </TableCell>
                  <TableCell>sarah@example.com</TableCell>
                  <TableCell>Math 101, Physics 301</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                      <div>Michael Johnson</div>
                    </div>
                  </TableCell>
                  <TableCell>michael@example.com</TableCell>
                  <TableCell>Biology 201, Physics 301</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
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
  );
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
  );
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
  );
}

function MessageSquareIcon(props) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
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
  );
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
  );
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
  );
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
  );
}
