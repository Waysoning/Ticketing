# Ticketing

## Technology

- React and Next JS are used to present content to users.
- Node and Express are used to created services.
- Mongo database and Redis are used to store data for services.
- The entire app is deployed and runs in Docker containers executed in a Kubernetes cluster.

## Structure

<img width="1012" alt="image" src="https://user-images.githubusercontent.com/38137877/161216514-144d847b-086e-4f9c-97bf-bfc56c39d5d8.png">

## Setup environment

- Install [Node.js](https://nodejs.org/en/)
- Install [Docker](https://docs.docker.com/get-docker/)
- Enable Kubernetes in Docker
- Install [skaffold](https://skaffold.dev/docs/install/#standalone-binary)


## Secrets
secrets that should be added to the kubernetes
- JWT
  `kubectl create secret generic jwt-secret --from-literal=JWT_KEY=********`
- Stripe
  `kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=********`

## Start

- open the hosts file and insert `127.0.0.1 ticketing.dev`
- `skaffold dev`
- open `ticketing.dev` in the browser

## Tips

- Your connection is not private. Type `thisisunsage` to ignore.
