# living kavita loca website (Archived)

> **This repository is archived and is no longer maintained.** The active codebase has moved to a Next.js project located at [`portfolio/apps/living-kavita-loca`](https://github.com/KChau9/portfolio/tree/main/apps/living-kavita-loca). The new site's infrastructure and pipeline are maintained by Terraform in that repository.

The site received a makeover and now uses Next.js with static export — still statically hosted, same philosophy. The simplicity and approach of this original repository is still perfectly valid; the move was primarily to explore Next.js in the same capacity, experiment with new ideas, and consolidate projects into a monorepo.

You can still view the old version of the site at [living-kavita-loca.com/old-site](https://living-kavita-loca.com/old-site).

---

This website was statically hosted via AWS in an S3 bucket and used Route53 as DNS and CloudFront as a CDN to serve the site securely (cheaply and statically).

It was written in React with TypeScript, using a combination of styled-components and CSS. Routing was handled client-side via react-router's HashRouter so I did not need server.
