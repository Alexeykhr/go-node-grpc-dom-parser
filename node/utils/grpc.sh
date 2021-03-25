#!/bin/bash

rootPath="$(dirname $(dirname $(realpath $0)))"
protoPath="$(dirname $rootPath)/proto"

$rootPath/node_modules/.bin/grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:$rootPath/service/proto/ \
  --grpc_out=grpc_js:$rootPath/service/proto \
  --proto_path=$protoPath \
  $protoPath/*.proto
