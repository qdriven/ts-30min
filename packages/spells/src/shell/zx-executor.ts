import { $ } from "zx";



export const zxExecute = async function zxExecute(cmds: [string]) {

    for (const cmd of cmds) {
        await $(cmd)
    }
};