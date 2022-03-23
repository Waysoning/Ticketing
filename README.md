# Ticketing

## Service Init

- `npm init -y`
- `npm install typescript ts-node-dev express @types/express`
- `tsc --init`

## Library

- `npm install express-validator`
  for Auth to validate the email
- `npm install express-async-errors`
  deal with async errors in services
- `npm install mongoose`
  for MongoDB
- `npm install @types/mongoose`
  mongoose for typescript
- `npm install cookie-session @types/cookie-session`
  add session support
- `npm install jsonwebtoken @types/jsonwebtoken`
  add JWT support
- `kubectl create secret generic jwt-secret --from-literal=JWT_KEY=********`
  envi variable
- `npm install --save-dev @types/jest @types/supertest jest ts-jest supertest mongodb-memory-server`
  dependencies for test

## Dev

- K8s Setup
- add skaffold `skaffold dev`
- Ingress-Nginx Setup

## Client

- `npm init -y`
- `npm install react react-dom next`
- `npm install bootstrap`
- `npm install axios`

## Common

- `npm publish --access public`
- `npm install typescript del-cli --save-dev`
- `npm install express express-validator cookie-session jsonwebtoken @types/cookie-session @types/express @types/jsonwebtoken`
- `npm run pub` to publish it to the npm repo

## Tips

- Your connection is not private. Type `thisisunsage` to ignore.

## NATS Streaming Service

- `kubectl port-forward nats-depl-7bb844d5f6-kn46r 4222:4222`
- `kubectl port-forward nats-depl-7bb844d5f6-kn46r 8222:8222`
- `localhost:8222/streaming`

## Secrets

- JWT
  `kubectl create secret generic jwt-secret --from-literal=JWT_KEY=********`
- Stripe
  `kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=********`
