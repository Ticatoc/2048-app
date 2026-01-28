# Install dependancies

rm -r node_modules/
pnpm install

# Static code verifications (nuxt loacated only locally so need to use pnpm exec)

pnpm exec nuxt typecheck