import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { admin } from "./admin";
import { App } from "./components/App";
import { Layout } from "./components/Layout";

const Response = () =>
  <div class="text-red-500">
    I am a Response
  </div>


const app = new Elysia()
  .use(html())
  .use(staticPlugin({
    noCache: true,
    indexHTML: false,
  }))
  .use(admin)
  .get("/", () => {
    return <Layout>
      <App />
    </Layout>
  })
  .get("/response", () => <Response />)
  .listen(Bun.env.PORT || 3000);


console.log(
  `🦊 Elysia is running at ${app.server?.url}`
);
