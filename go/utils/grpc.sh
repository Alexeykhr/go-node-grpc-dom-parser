#!/bin/bash

rootPath="$(dirname $(dirname $(realpath $0)))"
protoPath="$(dirname $rootPath)/proto"

# https://grpc.io/docs/protoc-installation/
execPath="protoc"

if ! command -v protoc &> /dev/null; then
  execPath="$(dirname $rootPath)/node/node_modules/.bin/grpc_tools_node_protoc"
fi

$execPath \
  --go_out=$rootPath/ \
  --go-grpc_out=$rootPath/ \
  --proto_path=$protoPath \
  $protoPath/*.proto
