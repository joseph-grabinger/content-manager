debug:
	npm run dev

run:
	npm run start

setup:
	node tools/db-migrations.js
	node tools/db-initial-data.js $$NAME $$EMAIL $$PASSWORD

clear_db:
	rm -rf ./dev.db