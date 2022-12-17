echo "Switching to branch master"
git checkout master

echo "building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* elijah@lijahq.com:/var/www/lijahq.com/

echo "Done!"