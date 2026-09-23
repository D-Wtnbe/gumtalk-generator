# Vercel Preview deployment investigation

## Status

The Vercel bot comments on open dependency-update pull requests link to failed Preview deployments, but the GitHub check named `Vercel Preview Comments` succeeds with “No unresolved feedback.” The build output is not present in GitHub comments or check annotations. The linked deployment detail page requires Vercel dashboard access that is not available in this session.

## Current install configuration

`vercel.json` sets:

```json
{
  "installCommand": "corepack enable pnpm && pnpm install --ignore-scripts"
}
```

Skipping lifecycle scripts could affect packages that need install-time setup, but available evidence does not establish this as the cause of the reported deployment failures. Changing it without the Vercel build log would be speculative.

## Next step

Attach or paste the first failing section of one Vercel Preview build log. Since all previews use the same project configuration, that log should identify the shared failure. Then apply and validate the confirmed fix, and consolidate the eight dependency updates into this pull request.
