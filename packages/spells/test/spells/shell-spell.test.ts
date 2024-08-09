import { assert, describe, it } from "vitest";
import { executeCmd } from "../../src/spells/shell/shell-executor";
import { consoleLogger } from "../../src/utils/console-logger";
import { zxExecute } from "../../src/spells/shell/zx-executor";
import {$} from 'zx'

describe("test ls command", () => {
    it("command list", () => {
        const result = executeCmd("ls -al");
        consoleLogger.info(result.stdout);
        consoleLogger.info(result.code);
        consoleLogger.error(result.stderr);

    });

    it('zx command test',async ()=>{
        const r1= await $`ls -al`
        consoleLogger.info(r1.stdout)
       // await $`touch test.txt`
       await zxExecute(["touch test.txt"])
    });
    it('zx command test',async ()=>{
        await $`cat package.json | grep name`

        let branch = await $`git branch --show-current`
        await $`dep deploy --branch=${branch}`

        await Promise.all([
            $`sleep 1; echo 1`,
            $`sleep 2; echo 2`,
            $`sleep 3; echo 3`,
        ])

        let name = 'foo bar'
        await $`mkdir /tmp/${name}`
    })
});
//https://medium.com/@hizacharylee/say-goodbye-to-tedious-scripting-with-zx-simplifying-shell-scripting-bbce2662866c