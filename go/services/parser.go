package services

import (
	"google.golang.org/grpc"

	pb "github.com/alexeykhr/go-node-grpc-dom-parser/services/proto"
)

func ParserHtml(grpc *grpc.ClientConn, req *pb.HtmlRequest) (*pb.HtmlResponse, error) {
	ctx, cancel := createDefaultContext()
	defer cancel()

	client := pb.NewParserSvcClient(grpc)

	return client.Html(ctx, req)
}

func ParserImage(grpc *grpc.ClientConn, req *pb.ImageRequest) (*pb.ImageResponse, error) {
	ctx, cancel := createDefaultContext()
	defer cancel()

	client := pb.NewParserSvcClient(grpc)

	return client.Image(ctx, req)
}
