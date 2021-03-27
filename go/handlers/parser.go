package handlers

import (
	"fmt"

	"github.com/alexeykhr/go-node-grpc-dom-parser/services"
	"github.com/alexeykhr/go-node-grpc-dom-parser/services/proto"

	"github.com/valyala/fasthttp"
	"google.golang.org/grpc"
)

func htmlHandler(ctx *fasthttp.RequestCtx, grpc *grpc.ClientConn) {
	u := parseQueryUrl(ctx)
	if u == "" {
		return
	}

	resp, err := services.ParserHtml(grpc, &proto.HtmlRequest{Url: u})
	if err != nil {
		ctx.Error(err.Error(), fasthttp.StatusBadGateway)
		return
	}

	fmt.Fprintln(ctx, resp.Content)
}

func imageHandler(ctx *fasthttp.RequestCtx, grpc *grpc.ClientConn) {
	u := parseQueryUrl(ctx)
	if u == "" {
		return
	}

	resp, err := services.ParserImage(grpc, &proto.ImageRequest{Url: u})
	if err != nil {
		ctx.Error(err.Error(), fasthttp.StatusBadGateway)
		return
	}

	fmt.Fprintln(ctx, string(resp.Content))
}
