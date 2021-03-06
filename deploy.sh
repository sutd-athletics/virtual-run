#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

COMMIT_MSG=$1

git init
git add -A
git commit -m "$COMMIT_MSG"

git push -f https://github.com/sutd-athletics/virtual-run.git master:gh-pages

cd -