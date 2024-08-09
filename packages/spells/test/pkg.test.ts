import { describe, it } from "vitest";
import { error, info, warn } from "../src/console-logger";
import { version, name } from "../src/pkg";

describe("logging", () => {
  it("test version", () => {
    info("current version is ", version);
    info("current name is ", name);
  });
});
