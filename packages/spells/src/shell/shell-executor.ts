import { default as shell } from "shelljs";

export const executeCmd = (cmd: string) => {
    return shell.exec(cmd, { silent: true });
};
