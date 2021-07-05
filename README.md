# Weighttracker hacked together in 2 days in Svelte without knowing Svelte 

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
