clear:
	@rm -R ./dist
	@echo "clear dist success!"

build:
	@spm build
	@echo "spm build success!"

deploy:
	@cp -R ./dist/src/** ./dist/
	@rm -R ./dist/src
	@echo "deploy success!"	
