package handlers

import (
	"net/url"

	"github.com/valyala/fasthttp"
)

func parseQueryUrl(ctx *fasthttp.RequestCtx) string {
	u := string(ctx.QueryArgs().Peek("url"))
	if u == "" {
		ctx.Error("empty url query", fasthttp.StatusBadGateway)
		return ""
	}

	if _, err := url.ParseRequestURI(u); err != nil {
		ctx.Error(err.Error(), fasthttp.StatusBadGateway)
		return ""
	}

	return u
}
