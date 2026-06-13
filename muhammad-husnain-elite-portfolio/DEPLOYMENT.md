# Deployment Checklist

## Before deployment

- Replace the profile placeholder in `public/placeholders/generic-profile.svg` or update the path in `src/pages/Home.jsx` and `src/pages/About.jsx`.
- Review all project descriptions in `src/content/projects/`.
- Add real project images, live links, and GitHub links.
- Add an email in `src/content/site.json` when available.
- Remove draft blog posts or set `published` to true after editing.
- Test every external link.

## Vercel

1. Upload the project to your GitHub account.
2. In Vercel, select **Add New Project**.
3. Import the GitHub repository.
4. Framework preset should be detected as **Vite**.
5. Make sure Vercel uses the repository root that contains the top-level `package.json` and `vercel.json`.
6. Build command: `npm run build`.
7. Output directory: `muhammad-husnain-elite-portfolio/dist`.
8. Deploy.

If Vercel still shows `ENOENT: no such file or directory, open '/vercel/path0/package.json'`, the deployment is still pointed at an older commit or the wrong repository/folder. Push the commit that includes the root-level `package.json` and `vercel.json`, then redeploy.

The included rewrite configuration allows direct navigation to project and service URLs.

## Custom domain

After deployment, open the Vercel project, go to **Settings → Domains**, add your domain, and follow the DNS records shown by Vercel.
