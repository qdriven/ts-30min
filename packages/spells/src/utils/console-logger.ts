import chalk from "chalk";

type MSG = string | number | boolean | object | any[] | null | undefined;

export class ConsoleLogger {
    info = (message?: MSG, ...optionalParams: MSG[]) => {
        console.log(chalk.blue(`[INFO] ${message}`), ...optionalParams);
    };
    warn = (message?: MSG, ...optionalParams: MSG[]) => {
        console.log(chalk.yellow(`[WARN] ${message}`), ...optionalParams);
    };
    error = (message?: MSG, ...optionalParams: MSG[]) => {
        console.log(chalk.red(`[ERROR] ${message}`), ...optionalParams);
    };
}

export const consoleLogger = new ConsoleLogger();
