# The Lord of the Rings API SDK for TypeScript

## Introduction

This library is built with TypeScript. This SDK provides a convenient way to access movie endpoints using [The One API](https://the-one-api.dev/).


## Access Token

Before using this SDK, you'll need to get an access token from [Sign Up](https://the-one-api.dev/sign-up)


```
npm i alexander_sequera-sdk
```

## Client

First you would need to have the `Access token` to be able to authenticate in [The One API](https://the-one-api.dev/login).
Then you can set up the `LotrApiClient`

```typescript
import { LotrApiClient } from "alexander_sequera-sdk";

const client = new LotrApiClient("YOUR_ACCESS_TOKEN");
```

## Examples

Once you have your client set up you can access the `movies` endpoints.

### Listing movies

```typescript
const movies = client.movieService.getList();
movies.then(movies => {
    console.log(movies)
})
```

### Getting a movie

```typescript
const movie = client.movieService.getById("5cd95395de30eff6ebccde5c")
movie.then(movie => {
    console.log(movie)
})
```
### Getting a movie quotes

```typescript
const quotes = client.movieService.getQuoteById("5cd95395de30eff6ebccde5c")
quotes.then(quote => {
    console.log(quote)
})
```