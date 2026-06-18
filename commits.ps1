Set-Location -Path "d:\Desktop\projects\Football Project"

if (Test-Path ".git") {
    Write-Host ".git already exists. We will continue."
} else {
    git init
}

# Day 1: June 15
if (-not (Test-Path "README.md")) {
    New-Item -Path "README.md" -ItemType File -Value "# Football Project

Aether." -Force | Out-Null
}
git add README.md
$env:GIT_AUTHOR_DATE="2026-06-15T10:00:00"
$env:GIT_COMMITTER_DATE="2026-06-15T10:00:00"
git commit -m "docs: add README.md and first commit"

git add package.json turbo.json pnpm-workspace.yaml tsconfig.base.json pnpm-lock.yaml docker-compose.yml
$env:GIT_AUTHOR_DATE="2026-06-15T14:30:00"
$env:GIT_COMMITTER_DATE="2026-06-15T14:30:00"
git commit -m "chore: initial monorepo workspace setup"

git add packages/types
$env:GIT_AUTHOR_DATE="2026-06-15T18:15:00"
$env:GIT_COMMITTER_DATE="2026-06-15T18:15:00"
git commit -m "feat: add shared types package"

# Day 2: June 16
git add packages/database
$env:GIT_AUTHOR_DATE="2026-06-16T09:45:00"
$env:GIT_COMMITTER_DATE="2026-06-16T09:45:00"
git commit -m "feat: initialize database package and schema"

git add packages/ui-kit/package.json
$env:GIT_AUTHOR_DATE="2026-06-16T13:20:00"
$env:GIT_COMMITTER_DATE="2026-06-16T13:20:00"
git commit -m "feat: setup ui-kit package"

git add apps/api-gateway
$env:GIT_AUTHOR_DATE="2026-06-16T16:50:00"
$env:GIT_COMMITTER_DATE="2026-06-16T16:50:00"
git commit -m "feat: create api-gateway service"

# Day 3: June 17
git add apps/ai-inference
$env:GIT_AUTHOR_DATE="2026-06-17T11:10:00"
$env:GIT_COMMITTER_DATE="2026-06-17T11:10:00"
git commit -m "feat: add ai-inference microservice"

git add apps/web-client/package.json
$env:GIT_AUTHOR_DATE="2026-06-17T15:00:00"
$env:GIT_COMMITTER_DATE="2026-06-17T15:00:00"
git commit -m "feat: initialize web-client application"

git add packages/ui-kit/src/components/EmptyState.tsx packages/ui-kit/src/components/PageHeader.tsx
$env:GIT_AUTHOR_DATE="2026-06-17T17:40:00"
$env:GIT_COMMITTER_DATE="2026-06-17T17:40:00"
git commit -m "feat(ui): implement EmptyState and PageHeader components"

# Day 4: June 18
git add apps/web-client/src/app/(app)/performance/page.tsx
$env:GIT_AUTHOR_DATE="2026-06-18T09:30:00"
$env:GIT_COMMITTER_DATE="2026-06-18T09:30:00"
git commit -m "feat(web): add performance tracking page"

git add apps/web-client/src/app/(app)/layout.tsx
$env:GIT_AUTHOR_DATE="2026-06-18T10:15:00"
$env:GIT_COMMITTER_DATE="2026-06-18T10:15:00"
git commit -m "fix(web): update app layout"

git add .
$env:GIT_AUTHOR_DATE="2026-06-18T11:00:00"
$env:GIT_COMMITTER_DATE="2026-06-18T11:00:00"
git commit -m "chore: finalize project setup and dependencies"

git branch -M main
git remote add origin https://github.com/iinaa-eimrit/Aether.git
git push -u origin main
