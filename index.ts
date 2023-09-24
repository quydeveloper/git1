const server = Bun.serve({
    port: 3000,
    fetch(req) {
      return new Response("Hello Bun hihi!");
    },
    development: true
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);
  