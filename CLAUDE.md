# CLAUDE.md

## Security Rules

- Never hardcode API keys, secrets or tokens in any file
- Always use environment variables referenced as `process.env.VARIABLE_NAME`
- Always verify `.env` files are in `.gitignore` before committing
- Never commit `.env.local` or any file containing real credentials

## Environment Variables Required

- `NEXT_PUBLIC_YOUTUBE_API_KEY` — YouTube Data API v3 key (stored in Netlify)

## Deployment

- **Repository:** github.com/unmutedmoments/unmuted-moments
- **Hosting:** Netlify
- **Branch:** `master` (auto-deploys on push)
