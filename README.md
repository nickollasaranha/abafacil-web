# Deploying new versions

## Deploy
```bash
NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && npm run build
```

```bash
npx firebase login
```

```bash
npx firebase init hosting
```

Public directory: dist (This is important! Accept the default dist if offered, or type it in).
Rewrite all urls to /index.html? Yes
Overwrite index.html? No

```bash
npx firebase deploy
```
