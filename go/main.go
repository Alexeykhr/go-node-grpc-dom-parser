package main

import (
	"context"
	"flag"
	"fmt"
	"time"

	pb "github.com/alexeykhr/go-node-grpc-dom-parser/service"
	"github.com/valyala/fasthttp"
	"google.golang.org/grpc"
)

type MyHandler struct{}

func (h *MyHandler) HandleFastHTTP(ctx *fasthttp.RequestCtx) {
	conn, err := grpc.Dial("node:8080", grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		fmt.Fprintf(ctx, "fail to dial: %v", err)
		return
	}
	defer conn.Close()

	ctx2, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	client := pb.NewParserSvcClient(conn)
	resp, err := client.Html(ctx2, &pb.HtmlRequest{Url: "https://example.com"})
	if err != nil {
		fmt.Fprintf(ctx, "error: %v", err)
		return
	}

	fmt.Fprintf(ctx, resp.Content)
}

func main() {
	flag.Parse()

	handler := &MyHandler{}
	fasthttp.ListenAndServe(":8081", handler.HandleFastHTTP)
}
