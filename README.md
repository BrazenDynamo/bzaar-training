## Getting Started

Download all the required packages:
`yarn install`

Initialize the database (make sure MySQL is running!):
```
npx sequelize-cli db:create
npx sequelize-cli db:seed:all
```

Start the server:
`yarn dev`

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

Login as `admin` with `hunter2`.