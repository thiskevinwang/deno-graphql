import { serve } from "https://deno.land/std@v0.3.2/http/server.ts";

async function main(): Promise<void> {
  const body = new TextEncoder().encode(`
    <div>Hello World</div>
    <b>bold</b>
  `);
  for await (const req of serve(":8000")) {
    req.respond({ body }).then(() => {
      console.log("foobar");
    });
  }
}

main();
