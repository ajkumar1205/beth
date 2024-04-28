import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { admin } from "./admin";
import { App } from "./components/App";
import { Layout } from "./components/Layout";


const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .use(admin)
  .get("/", () => {
    return <Layout>
      <App />
    </Layout>
  })
  .listen(Bun.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.url}`
);
