PROJECT=$1

echo "create project"
pnpm create next-app@latest ${PROJECT} --typescript --tailwind --eslint
cd ${PROJECT}
bun install
echo "init shadcn-ui"
bunx shadcn-ui@latest init
bun run dev
