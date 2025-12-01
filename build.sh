npx rollup -c
hash=$(md5sum main.js)
hash=${hash:0:10}
name=main.${hash}.js
npx terser main.js -o $name -c -m
echo "output $name"
cat << EOF > index.html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="title" itemprop="name" property="og:title" content="派魔喵">
  <meta name="description" itemprop="description" property="og:description" content="派魔喵">
  <meta name="image" itemprop="image" property="og:image" content="https://origin.picgo.net/2025/11/19/415001767ece12334a34c01d.jpeg">
  <link rel="icon" href="https://origin.picgo.net/2025/11/19/415001767ece12334a34c01d.jpeg">
  <title>派魔喵</title>
  
  <link rel="stylesheet" href="/src/main.css">
  <script src="/static/sakura.min.js"></script>
  <script defer type="module" src="/$name"></script>
</head>
<body>
  <hbcao-app></hbcao-app>
</body>
</html>

EOF
