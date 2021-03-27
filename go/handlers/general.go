package handlers

import (
	"github.com/valyala/fasthttp"
	"google.golang.org/grpc"
)

type Handler struct {
	Grpc *grpc.ClientConn
}

func (h *Handler) HandleFastHTTP(ctx *fasthttp.RequestCtx) {
	switch string(ctx.Path()) {
	case "/":
		ctx.Write([]byte("/html or /image"))
	case "/html":
		htmlHandler(ctx, h.Grpc)
	case "/image":
		imageHandler(ctx, h.Grpc)
	default:
		ctx.NotFound()
	}
}
