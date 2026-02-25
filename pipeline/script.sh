# Install dependancies

rm -r node_modules/
pnpm install

# Static type verifications (nuxt loacated only locally so need to use pnpm exec)

pnpm exec nuxt typecheck

# Analyse statique du code

pnpm exec eslint app/