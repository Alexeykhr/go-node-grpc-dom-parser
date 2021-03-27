package services

import (
	"context"
	"time"
)

const defaultCtxTime = time.Second * 30

func createContext(ctx context.Context, t time.Duration) (context.Context, context.CancelFunc) {
	return context.WithTimeout(ctx, t)
}

func createDefaultContext() (context.Context, context.CancelFunc) {
	return createContext(context.Background(), defaultCtxTime)
}
