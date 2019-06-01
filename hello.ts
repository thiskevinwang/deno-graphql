import { abc } from "https://deno.sh/abc/mod.ts";
// OR import { abc } from "https://deno.land/x/abc/mod.ts";

const app = abc();

app
  .get("/hello", c => {
    return `<b>"Hello, Abc!"</b>`;
  })
  .start("0.0.0.0:8080");
