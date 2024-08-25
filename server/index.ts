import { fastify, FastifyInstance } from "fastify";
import { resolve, join } from "node:path";
import { requireDynamically } from "./requireDynamically";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { buildHtml } from "./buildHtml";
import middie from "@fastify/middie";
import staticServer from "sirv";

async function prepareServerWithPublicAssets(): Promise<FastifyInstance> {
  const app = await fastify({
    requestIdHeader: "x-request-id",
    ignoreTrailingSlash: true,
    disableRequestLogging: true,
  });

  await app.register(middie);

  app.use(
    staticServer("dist", {
      etag: false,
      gzip: true,
      brotli: true,
    }),
  );

  return app;
}

async function createServer(): Promise<void> {
  const port = 3_001;
  const app = await prepareServerWithPublicAssets();

  const clientOutputDir = resolve(__dirname, "..", "..", "dist");

  app.register((childApplication, _, next) => {
    childApplication.get("/", (_, reply) => {
      const clientScriptPath = join(clientOutputDir, "index.js");
      const { Fragment } = requireDynamically(clientScriptPath);

      const data = { rootComponentProps: { hello: "Blueprint" } };
      const fragment = createElement(Fragment, data);

      return reply
        .header("Content-Type", "text/html; charset=UTF-8")
        .code(200)
        .send(buildHtml(renderToString(fragment), JSON.stringify(data)));
    });

    next();
  });

  app.listen({ port, host: "::" }, () =>
    process.stdout.write(`Running fast on http://localhost:${port} 🚀\n`),
  );
}

void createServer();
