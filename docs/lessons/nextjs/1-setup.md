# Setup Nextjs Project

Setup nextjs,tailwindcss, shcdn-ui project.


## How to Setup

```sh
PROJECT=$1

echo "create project"
pnpm create next-app@latest ${PROJECT} --typescript --tailwind --eslint
cd ${PROJECT}
bun install
echo "init shadcn-ui"
bunx shadcn-ui@latest init
bun run dev

```

## Install shadcn-ui component

```sh
bunx shdcn-ui@latest add
```

Press a to install all component
