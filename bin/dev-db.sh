relpath=$(dirname "$(realpath "$0")")
(cd $relpath/../node_modules/@startupquickstart/server/ && docker-compose up -d postgres)