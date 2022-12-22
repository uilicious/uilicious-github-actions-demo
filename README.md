# uilicious-github-actions-demo
The following outlines the main ways to integrate the uilicious-cli with the github actions or azure.

## Option 1) Use the community github actions

> Note, this is not written officially by the uilicious team

Repository: https://github.com/omairvaiyani/ghact-uilicious

It includes various enhancments, to improve ease of setup and use.

Example script:
```
name: Github Actions Example
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
jobs:
  # Run a single test file
  action-with-test:
    runs-on: ubuntu-latest
    steps:
      - uses: omairvaiyani/ghact-uilicious@v1.2.0
        with:
          access-key: ${{ secrets.UILICIOUS_ACCESSKEY }}
          project: github-actions-demo
          tests: hello-github
  # Run a multiple test file using a wildcard
  test-wildcard:
    runs-on: ubuntu-latest
    steps:
      - uses: omairvaiyani/ghact-uilicious@v1.2.0
        with:
          access-key: ${{ secrets.UILICIOUS_ACCESSKEY }}
          project: github-actions-demo
          tests: hello-*
          pattern: true
```
