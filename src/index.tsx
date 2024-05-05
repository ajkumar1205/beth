import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { App } from "./components/App";
import { HomePage } from "./pages/HomePage";

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
  .get("/", () => {
    return <App>
      <HomePage />
    </App>
  })
  .get("/response", () => <Response />)
  .listen(Bun.env.PORT || 3000);


console.log(
  `🦊 Elysia is running at ${app.server?.url}`
);
