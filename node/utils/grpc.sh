#!/bin/bash

rootPath="$(dirname $(dirname $(realpath $0)))"
inProtoPath="$(dirname $rootPath)/proto"
outProtoPath="$rootPath/src/grpc/proto"
binPath=$rootPath/node_modules/.bin

$binPath/grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:$outProtoPath \
  --grpc_out=grpc_js:$outProtoPath \
  --proto_path=$inProtoPath \
  $inProtoPath/*.proto

$binPath/grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=$binPath/protoc-gen-ts \
  --ts_out=$outProtoPath \
  --proto_path=$inProtoPath \
  $inProtoPath/*.proto
