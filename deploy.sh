yarn build &&
git branch gh-pages &&
git checkout gh-pages &&
rm -rf *.html *.js *.css *.png *.sh &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'update' &&
git push &&
git checkout -      