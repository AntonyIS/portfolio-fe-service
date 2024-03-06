git-push:
	go build -o bin/notelify-articles-service
	
serve-dev: build
	ENV=development ./bin/notelify-articles-service

