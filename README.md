# Personal Portfolio & Resume Website (pofo-next)

A modern, responsive, and bilingual personal portfolio and resume website built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**. Designed for performance, clean aesthetics, and seamless localization (English & Japanese).

---

## ✨ Features

- 🌐 **Multi-Language Support:** Instant switching between English and Japanese via dedicated localization files and Context API.
- 📱 **Fully Responsive:** Optimized for desktops, tablets, and mobile devices with smooth animations and touch-friendly navigation.
- ⚡ **Next.js Powered:** Leverages Next.js for server-side rendering, static generation, and optimized asset loading.
- 🎨 **Tailwind CSS Styling:** Modern typography, dynamic layouts, and utility-first styling for effortless customization.
- 📄 **Resume Integration:** Integrated PDF resume download link with localized filenames.

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have installed stable versions of:
- [Node.js](https://nodejs.org/en/) (v18 or v20 LTS recommended)
- [Yarn](https://yarnpkg.com/) package manager

### 2. Install Dependencies
Open a terminal in the project directory and run:
```bash
yarn install
```

### 3. Run Development Server
Start the local development server:
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🛠️ Customizing Your Content

All website content and text translations are centralized in `src/data/`:
- **English Content:** Edit `src/data/data_en.tsx`
- **Japanese Content:** Edit `src/data/data_ja.tsx`
- **Shared Configuration & Types:** See `src/data/data.tsx` and `src/data/dataDef.ts`

### Images & Assets
- **Images:** Store portfolio screenshots, profile photos, and blog images in `src/images/` and import them directly in your data files.
- **Resume PDF:** Place your downloadable resume PDF at `public/assets/resume.pdf`.

---

## 🌍 Deploying to DigitalOcean

This application is ready for production deployment on DigitalOcean. Choose the method that best fits your workflow:

### Method 1: DigitalOcean App Platform (Recommended & Easiest)
DigitalOcean App Platform is a fully managed platform as a service (PaaS) that automatically builds and hosts your Next.js application from GitHub.

1. **Prepare for Production Image Optimization (Recommended):**
   When deploying Next.js containers on Linux, installing `sharp` prevents CPU overload during image rendering:
   ```bash
   yarn add sharp
   ```
2. **Push to GitHub:**
   Commit your changes and push the repository to your GitHub account.
3. **Create an App in DigitalOcean:**
   - Go to your DigitalOcean dashboard and select **App Platform** -> **Create App**.
   - Connect your GitHub repository and select the branch you wish to deploy.
4. **Configure Build Settings:**
   Verify or apply the following build parameters:
   - **Environment:** `Node.js`
   - **Build Command:** `yarn build`
   - **Run Command:** `yarn start`
   - **HTTP Port:** `3000`
5. **Set Environment Variables:**
   Add the following environment variable under App Settings:
   - `NODE_ENV` = `production`
6. Click **Deploy App**. Once the build completes, DigitalOcean will provide your live URL!

---

### Method 2: DigitalOcean Droplet (Ubuntu VPS / Linux Server)
If you are deploying on an Ubuntu Droplet (virtual machine):

1. **Install Node.js & Yarn:** Install Node.js (v18/20 LTS) and Yarn on your droplet.
2. **Clone & Build:**
   ```bash
   git clone <your-repo-url>
   cd react-pofo
   yarn install
   yarn build
   ```
3. **Run in the Background with PM2:**
   Install PM2 globally to keep the Next.js process running continuously:
   ```bash
   npm install -g pm2
   pm2 start yarn --name "react-pofo" -- start
   pm2 save
   pm2 startup
   ```
4. **Set Up Nginx Reverse Proxy:**
   Configure Nginx to forward HTTP/HTTPS traffic from ports `80` and `443` to your application running locally on port `3000`.
5. **SSL Certificate:**
   Use Let's Encrypt (`certbot --nginx`) to enable free, automated HTTPS certificates.

---

## 📝 License

This project is licensed under the MIT License.
