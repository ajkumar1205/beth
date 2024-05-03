import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { admin } from "./admin";
import { App } from "./components/App";
import { Layout } from "./components/Layout";
import "../public/main.css";

const Response = () =>
  <div class="text-orange-500">
    I am from Response
  </div>


const app = new Elysia()
  .use(html())
  .use(staticPlugin({
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0"
    },
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
