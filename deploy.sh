#!/bin/bash
cd "$(dirname "$0")"
git add .
git commit -m "Update site"
git push
echo "✓ Deployed to GitHub Pages"
