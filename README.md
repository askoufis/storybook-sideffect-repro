# Storybook Side-effect Issue Reproduction

## Reproduction steps

1. `git clone https://github.com/askoufis/storybook-sideffect-repro`
1. `cd storybook-sideffect-repro/app`
1. `pnpm install`
1. `pnpm dev`. The `Button` story works correctly and side-effects fire correctly and the expected logs are in the console.
1. `pnpm build && pnpm serve`. Opening Storybooks results in a `Expected flag to be true` error being thrown. No logs appear in the console.
