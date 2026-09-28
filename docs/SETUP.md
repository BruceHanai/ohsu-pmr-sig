# GitHub and Cloudflare setup

## 1. Put the source on GitHub

Create an empty repository named ohsu-pmr-sig in your GitHub account. Do not initialize the remote with another README. From this project folder, review and commit the files, then connect your actual repository URL:

```sh
git add .gitignore AGENTS.md README.md public docs
git commit -m "Add PM&R student interest group website starter"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/ohsu-pmr-sig.git
git push -u origin main
```

Replace YOUR-ACCOUNT. If origin already exists, inspect it with git remote -v instead of adding it again. Authentication is handled by GitHub; never paste tokens into source files.

## 2. Connect Cloudflare Pages

In Cloudflare, open Workers & Pages → Create application → Pages → Import an existing Git repository. Authorize GitHub access to this repository and select it.

Use these settings:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Production branch | main |
| Build command | exit 0 |
| Build output directory | public |
| Root directory | Repository root |

Deploy and check the assigned pages.dev address. Subsequent pushes to the production branch deploy updates. Use pull requests and preview deployments for review.

Source: [Cloudflare static HTML guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/).

## 3. Add the domain

After confirming ownership/availability, register your chosen domain. The planned name is ohsupmrsig.org; this project does not establish ownership or availability. Add the domain to Cloudflare and follow its nameserver instructions. In the Pages project, add the apex domain through Custom domains before configuring DNS. Apex domains require Cloudflare nameservers. Add www as well, then configure a redirect from www to the apex and test both HTTPS addresses.

Source: [Cloudflare custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/).

## 4. Configure email forwarding

After DNS is working, follow the current Cloudflare email setup flow for receiving/routing mail. Verify destination inbox ownership and add the required DNS records through that flow. Create public role aliases only after verifying delivery. Check existing mail records before changing them. Forwarding is separate from a newsletter or membership platform; verify current service terms and capabilities before enabling it.

Source: [Cloudflare email getting started](https://developers.cloudflare.com/email-service/get-started/).

## 5. Launch review

Approve the draft copy, add confirmed group contact/join details, check phone and desktop layouts, test all links and keyboard access, and review the independent student-group disclaimer. Keep student lists out of this repository. Add event and mailing integrations later once providers are selected.

No repository push, domain purchase, DNS change, or deployment has been performed by this starter.
