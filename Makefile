# make install -> copy extension files to /mnt/c/extensions

install:
	mkdir -p /mnt/c/extensions/new-line-guide
	cp manifest.json /mnt/c/extensions/new-line-guide/
	cp content.js /mnt/c/extensions/new-line-guide/
	cp styles.css /mnt/c/extensions/new-line-guide/
	cp README.md /mnt/c/extensions/new-line-guide/
