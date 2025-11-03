# Makefile for New Line Guide Chrome Extension

# Default unpacked directory (can be overridden)
unpacked_dir ?= /mnt/c/extensions/new-line-guide

# Extension files to include
EXT_FILES = manifest.json content.js styles.css options.html options.js

.PHONY: all unpacked store install clean

all: unpacked

# Create unpacked extension directory
unpacked:
	mkdir -p $(unpacked_dir)
	cp $(EXT_FILES) $(unpacked_dir)/
	mkdir -p $(unpacked_dir)/icons
	-cp icons/*.png $(unpacked_dir)/icons/ 2>/dev/null || true

# Create zip file for Chrome Web Store
store:
	mkdir -p store
	zip -r store/new-line-guide.zip $(EXT_FILES) icons/*.png
	@echo "Created store/new-line-guide.zip"

# Alias for unpacked (backward compatibility)
install: unpacked

# Clean build artifacts
clean:
	rm -rf unpacked/
	rm -f store/*.zip
