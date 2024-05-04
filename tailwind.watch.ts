import { plugin, type BunPlugin } from "bun";
import { $ } from "bun";
import { watch } from "fs";

const tailwindReload: BunPlugin = {
    name: "Custom Tailwind Reload Plugin",
    setup(build) {
        // write the tailwindcss command here
        $`bunx tailwindcss -i ./input.css -o ./public/main.css`.then(() => {
            console.log("Tailwind Built Complete...");
        });

    },
};

plugin(tailwindReload);