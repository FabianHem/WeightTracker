# Weighttracker hacked together in Svelte and Firebase whilst knowing neither Svelte nor Firebase 

## TODO
- Fix/Update setup guide
- Add way to develop without using real firebase
- Fix reactivity instead of fetching DB for each page, add general store that reacts to a DB update
- Probably remove rxJs stuff or better yet learn it
- Fix "add weight" button to scroll with the page
- Fix display of chart
- Add error messages to "add weight"-fct.
- Add "edit weight"
- Add swipe functionality to pages`` on mobile
- Add desktop view
- Add deployment pipeline
- Dockerize application
- Automate Deployments.

## Get started

Start locally

```bash
npm i
npm run dev
```
App will run on [localhost:5000](http://localhost:5000).


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Todo
- Todo's are just spread into the code right now
