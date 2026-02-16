# Build the project
Write-Host "Building project..." -ForegroundColor Green
npm run build

# Ensure .nojekyll exists in dist
if (-not (Test-Path "dist/.nojekyll")) {
    New-Item -Path "dist/.nojekyll" -ItemType File -Force | Out-Null
}

# Remove CNAME if it exists (for user pages)
if (Test-Path "dist/CNAME") {
    Remove-Item "dist/CNAME"
}

# Navigate to dist folder
Set-Location dist

# Initialize git if needed
if (-not (Test-Path .git)) {
    Write-Host "Initializing git repository..." -ForegroundColor Green
    git init
    git checkout -b gh-pages
} else {
    git checkout gh-pages
}

# Add all files
Write-Host "Adding files..." -ForegroundColor Green
git add -A

# Commit
Write-Host "Committing..." -ForegroundColor Green
git commit -m "Deploy to GitHub Pages - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Push to gh-pages branch
Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -f https://github.com/derf567/derf567.github.io.git gh-pages:gh-pages

# Go back
Set-Location ..

Write-Host "`nDeployment complete!" -ForegroundColor Green
Write-Host "Your site will be available at: https://derf567.github.io" -ForegroundColor Cyan
Write-Host "Please wait 1-2 minutes for GitHub Pages to update." -ForegroundColor Yellow
