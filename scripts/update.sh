#!/bin/bash
set -e

cd ~/ClearOfficeWebsite
git fetch origin main

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" = "$REMOTE" ]; then
    rsync -av --delete ./out/ ~/public_html/
    echo "No changes. Exiting."
    exit 0
fi

git pull origin main
rsync -av --delete ./out/ ~/public_html/
