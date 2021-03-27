package main

import (
	"flag"

	"github.com/alexeykhr/go-node-grpc-dom-parser/handlers"

	"github.com/valyala/fasthttp"
	"google.golang.org/grpc"
)

func main() {
	grpcAddr := flag.String("grpc", "node:8080", "URL for gRPC connection")
	addr := flag.String("addr", ":8081", "Server address")
	flag.Parse()

	conn, err := grpc.Dial(*grpcAddr, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	handler := &handlers.Handler{Grpc: conn}
	fasthttp.ListenAndServe(*addr, handler.HandleFastHTTP)
}
