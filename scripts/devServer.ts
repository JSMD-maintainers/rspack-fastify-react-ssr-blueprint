import { rspack } from "@rspack/core";
import clientConfig from "../rspack.config.client";
import serverConfig from "../rspack.config.server";
import { ChildProcess } from "child_process";
import childProcess from "node:child_process";
import formatWebpackMessages from "react-dev-utils/formatWebpackMessages";
import path from "node:path";

const isInteractive = process.stdout.isTTY;

// Custom hot reloading dev server setup using the servers http server framework: Fastify
const devServer = () => {
  let serverInstance: ChildProcess | null = null;

  const launchServer = () => {
    serverInstance = childProcess.fork(path.join("build", "server"), {
      stdio: "inherit",
    });
  };

  const compiler = rspack([clientConfig, serverConfig]);

  compiler.watch({}, (error, stats) => {
    let messages;

    if (error) {
      messages = formatWebpackMessages({
        errors: [error.message],
        warnings: [],
      });
    } else {
      messages = formatWebpackMessages(
        stats?.toJson({ all: false, warnings: true, errors: true }),
      );
    }

    if (messages.errors.length) {
      if (messages.errors.length > 1) {
        messages.errors.length = 1;
      }

      console.error("Failed to compile\n");
      console.error(messages.errors.join("\n\n"));
      return;
    }

    if (messages.warnings.length) {
      console.warn("Compiled with warnings.\n");
      console.warn(messages.warnings.join("\n\n"));
      console.warn(
        `\nSearch for the keywords to learn more about each warning.`,
      );
      console.log(
        `To ignore, add // eslint-disable-next-line to the line before.\n`,
      );
    } else {
      console.info(`Compiled successfully with rspack\n`);
    }

    if (serverInstance) {
      if (!serverInstance.killed) {
        serverInstance.on("exit", launchServer);
        serverInstance.kill();
      }

      if (!serverInstance.connected) {
        launchServer();
      }
    } else {
      launchServer();
    }
  });

  ["SIGINT", "SIGTERM"].forEach((signal) => {
    process.on(signal, () => compiler.close(() => process.exit()));
  });

  if (isInteractive || process.env.CI !== "true") {
    process.stdin.on("end", () => compiler.close(() => process.exit()));
    process.stdin.resume();
  }
};

devServer();
