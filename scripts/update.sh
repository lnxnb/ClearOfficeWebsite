#!/bin/bash
set -e

cd ~/myrepo
git fetch origin main

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" = "$REMOTE" ]; then
    echo "No changes. Exiting."
    exit 0
fi

git pull origin main
npm ci --omit=dev
npm run build
rsync -av --delete ./out/ ~/public_html/
