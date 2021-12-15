# living kavita loca website

This website is statically hosted via AWS in an s3 bucket and uses Route53 as DNS and uses CloudFront as a CDN to serve this site securely (cheaply and statically).

To enable routing without the usage of a server, it uses react-router's HashRouter

Its written in React with Typescript and Styled Components

# to run locally

to run this locally, cd into the client directory and then do an `npm install` and and then run `npm run dev` 

# to build 

Run `npm run build`


# pipeline

This feature is coming soon. At this moment, I just do an `npm run build` and upload the contents of the build to my s3 pipeline