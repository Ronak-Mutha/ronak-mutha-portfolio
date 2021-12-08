# Ronak Mutha's Portfolio
## About Me
- Hello, I'm Ronak Mutha. A Web Developer from Pune, India, passionate about learning the latest technologies in the web development domain. I enjoy implementing my learning by creating user-friendly products.

- I am a Computer Science grad who completed his engineering in 2019. Previously, I've worked as an Assistant Systems Engineer at TCS for 1 year and 3 months.

- I've been playing around the web development for quite a while now. I'll also be joining Neogcamp (Fullstack Bootcamp) in January 2022 to improve my existing knowledge of React and learn backend technologies like Nodejs, Express, Mongoose, and MongoDB.

---
## Current known languages/tools : 

> **_HTML, CSS, JavaScript, React, SQL, Oracle, Putty, Unix, and Git/GitHub_**

---
## Portfolio in different resolution
- **Desktop**
![Desktop Screen](/src/assets/img/projects/portfolio.webp)

- **Tablet**
![iPad Screen](/src/assets/img/portfolio-ipad.webp)

- **Mobile**
![Pixel 2 Screen](/src/assets/img/portfolio-pixel-2.webp)

---

## Learnings 

> I finally built my portfolio 🥳🥳

> Was it an easy ride? Nope.

> Did you learn from it? A lot.

So here's the story. Finally decided to look for a job that required proof of work. And you have to showcase your skills then I realized what's better than a portfolio website. That'll also improve my React skills and help me revise Basic Concepts. While creating this portfolio, I got to learn a lot of stuff like using React, how to route to different pages through react-router, how to style using styled-components, adding background particles effect using tsparticles, how to get integrate icons from Material Ui to your react-app, using HTTP headers for increasing security, meta tags and page structure for SEO, react-toastify for toast messages, emailjs for integrating email service to contact form, compressing  .png images and then converting to .webp for faster loading of images, using media-queries for responsiveness, react-lazy and suspense for splitting and getting the FP - FMP as soon as possible, and finally host it with Netlify.

## How I improved my Performance Score from 30+ to 90+ and Security Score from F to A+

For performance optimization -
- I compressed my images and converted them to a newer format like _webp_.  
- I preloaded my fonts as they took a lot of time, due to which website was taking time for FP, still not much performance improvement as expected and the size of _build chunks_ were still huge.
- So, I used react-lazy and Suspense to split the code according to their priority and based on routes. And voila, the performance improved drastically.

For Security Headers -
- I didn't know about this before. I might have learned about this during my engineering, but never implemented it. So when I came across the _F_ score in terms of security on the [webpagetest.com](https://www.webpagetest.org/) site. I researched different HTTP headers and their usage. 
- I checked for the header used in sites with an A+ score and then checked on MDN docs and applied HTTP headers to this portfolio website as well using the knowledge gained from MDN docs and Netlify docs. After that had an A+ score on the [securityheaders.com](https://securityheaders.com/) website.
### Results

- __GTMetrics__ 
![GTMetrics](/src/assets/img/performance/gtmetrics.webp)

- __PageSpeed Insights__
![PageSpeed Insights](/src/assets/img/performance/pagespeed-insights.webp)

- __Security Headers__
![Security Headers](/src/assets/img/performance/security-headers.webp)