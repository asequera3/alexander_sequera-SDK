# SDK Design Decisions

## Configuration

- The SDK is configured by a `config` file.
- BASE_URL as environment variable.

## Authentication

- This SDK uses a personal access token.

## Classes and methods

- `LotrApiClient` is the main class. Using it to create an instance of the SDK.
- Mothods inside SDK:
    - `getList()` - returns a list of movies.
    - `getById("ID of the movie")` - returns one movie by ID.
    - `getQuoteById("ID of the movie")` - returns list of quotes for a movie