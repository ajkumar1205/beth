import { BunSvg } from "../components/BunSvg";
// import bunsvg from "../../public/bun.svg" assert { type: "text" };

export const HomePage = () => {
    return <div class="w-screen h-screen flex justify-center flex-col items-center bg-gradient-to-br from-gray-300 from-10% via-white via-70% to-emerald-200">
        <h1 class="text-5xl">
            <a href="https://bun.sh/docs" style={{ color: "#febbd0" }}>B</a>
            <a href="https://elysiajs.com/quick-start.html" class="text-gray-700">E</a>
            <a href="https://htmx.org/docs/" style={{ color: "#3d72d7" }}>T</a>
            <a href="https://docs.turso.tech/" style={{ color: "#4FF7D1" }}>H</a>
        </h1>
        <div class="flex justify-center flex-row">
            <img src="../../public/bun.svg" alt="Bun" height="200px" width="200px" />
            <img src="../../public/elysia.svg" alt="Elysia" height="200px" width="200px" />
            <div class="font-bold" style={{ fontSize: "180px", fontStretch: "condensed" }}>
                <span>{"<"}</span><span style={{ color: "#3d72d7" }}>{"/"}</span><span>{">"}</span>
            </div>
            <img src="../../public/turso.svg" alt="Turso" width="200px" height="200px" />
        </div>
        <div>Along with <a href="https://tailwindcss.com/docs/installation" class="text-sky-500">Tailwind</a> and <a href="https://orm.drizzle.team/docs/overview" class="text-green-500">Drizzle</a> configurations</div>
        <div>An easy to use template. Start Development Now. Check the source at <a href="https://github.com/ajkumar1205/beth" class="text-purple-600">BETH</a> </div>
    </div>
}