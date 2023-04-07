# Screen capture with Playwright

This my playgound for using Playwright capture website and support with lazyload image, ajax loading

## Installation Playwright
### Clone and npm install first
```
git clone 
node install
```

### Install Playwright For Mac, Windows (install nodejs and npm before)
```
npm install playwright
```

## Usage Playwright

### Screen capture command (Windows)
```
npx playwright test tests/capture_myifew.spec.js --reporter=line
```

### Screen capture command (Mac, Linux)
```
node tests/capture_myifew.spec.js --reporter=line
```

## Installation Playwright CLI

Sometime need to use command line, but not suiable to call js file, can use Playwright CLI

### Install Playwright CLI For Mac, Windows (install nodejs and npm before)
```
npm install playwright-cli
```

## Usage Playwright CLI

### Screen capture 1280x1080 command (Mac, Linux, Windows)
```
npx playwright screenshot --wait-for-timeout=3000 --viewport-size=1280,1080 https://myifew.com screenshot/1280x1080_homepage_cli.png
```

### Screen capture full page command (Mac, Linux, Windows)
```
npx playwright screenshot --wait-for-timeout=3000 --full-page https://myifew.com screenshot/fullPage_homepage_cli.png
```

### Screen capture full page with iPhone 14command (Mac, Linux, Windows)
```
npx playwright screenshot --wait-for-timeout=3000 --full-page --device="iPhone 13 Pro" https://myifew.com screenshot/fullPage_iphone14_homepage_cli.png
```
