# Blood Donation Server

## Configuration

1. Create a `.env` file inside the `server` directory
2. Inside the `.env`, write the following:
    ```
    PORT=5000
    MONGO_URI="mongodb://<USERNAME>:<PASSWORD>@localhost:27017/mongoose?authSource=admin"
    ```

## Create a Table

1. Go to `src/models`. Follow the `user.ts` code.
2. Create a new file called `dog.ts` (example).
3. Use the same code as `user.ts` but modified to have the fields you need.
4. Change anything that has `user` to have `dog`.