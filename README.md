# Go Node GRPC DOM Parser

> A small example of a project to test gPRC technology.

A running `Go` server that accepts requests from the Internet and communicates with` Node` using [`gPRC`] (https://grpc.io/).

## Development

- Launch docker containers.

```shell
$ docker-compose up -d
```

- Execute any request from [API] (# api), for example:

`http://localhost:8081/image?url=https://news.ycombinator.com/`

## Scripts

Generating **go/node** code from proto files:

```shell
# Go -> go/services/proto
$ sh ./go/utils/grpc.sh

# Node -> node/src/grpc/proto
$ sh ./node/utils/grpc.sh
```

## API

- Get site image: `/image?url=<website-url>`.

`http://localhost:8081/image?url=https://news.ycombinator.com/`

- Get site HTML: `/html?url=<website-url>`.

`http://localhost:8081/html?url=https://news.ycombinator.com/`

## Testing

- Run `docker-compose` containers
- Run `go test .` in **go** folder

## Technologies

- [gPRC](https://grpc.io/)
- [Docker](https://www.docker.com/)

**Node**

- [@grpc/grpc-js](https://www.npmjs.com/package/@grpc/grpc-js) - Pure JavaScript gRPC Client
- [microsoft/playwright](https://github.com/microsoft/playwright) - Playwright to automate Chromium, Firefox and WebKit with a single API
- [agreatfool/grpc_tools_node_protoc_ts](https://github.com/agreatfool/grpc_tools_node_protoc_ts) - Generate TypeScript d.ts definitions for generated js files
- [remy/nodemon](https://github.com/remy/nodemon) - Live reload
- [microsoft/TypeScript](https://github.com/microsoft/TypeScript) - TypeScript extends JavaScript by adding types

**Go**

- [gRPC-Go](https://google.golang.org/grpc) - The Go implementation of gRPC
- [cosmtrek/air](https://github.com/cosmtrek/air) - Live reload
- [valyala/fasthttp](https://github.com/valyala/fasthttp) - Fast HTTP implementation

## License

[MIT](https://opensource.org/licenses/MIT)
