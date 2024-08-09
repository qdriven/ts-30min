import { describe, it } from "vitest";
import { consoleLogger } from "../../src/utils/console-logger";

describe("internal function all in one test", () => {
    it("console-log test", () => {
        consoleLogger.info("Hello World");
        consoleLogger.warn("Hello Warn@");
        consoleLogger.error("Hello Error!!!");
    });
});
