# Installation

The instructions for installing the `mechactl` CLI for your operating system or environment are given below.

### Prerequisites

The `mechactl` CLI is built using Node.js or (just node), and is installed as a global package using `npm` which is Node's package manager.

1. Node.js 18.x or above is recommended
2. `npm` 8.0 or above - this is usually installed along with Node.js

To check the version installed run the commands below in your terminal.

```sh
$ node --version
v18.17.0

$ npm --version
8.13.1
```

If you already have the above requirements met you can skip the Node.js installation step in the guides given below, and jump to [CLI installation](#installing-the-cli-from-npm)

## Installing Node.js, `npm`

### Linux

The recommended way to install Node.js on Linux is via `nvm`, which works well irrespective of the distro and lets you quickly move between `node.js` versions easily. 

```sh
# Install the NVM
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# Install LTS version and set as default
$ nvm install --lts
$ nvm use --lts
```

Like most things on Linux, there are more ways to get the same thing done. You can also install from the official sources of your distribution, check - [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager)

### Windows

You can install Node.js using the Windows Installer available officially from Nodejs.org using the link below.

Choose the LTS version for download

[Download Node.js (node.js.org)](https://nodejs.org/en#home-downloadhead)

### MacOS

You can install Node.js using Homebrew, just run the command below and let the brewing begin.

```sh
$ brew install node@18
```

## Installing the CLI from `npm`

Once Node.js and `npm` is setup, you can now install the `mechactl` CLI as a global node.js package for your user account. 

```sh
$ npm install -g @mecha-org/mechactl
```

## Installing in a CI Environment

You can install the `mechactl` in any CI environment, and also authenticate via environment variables. Check out our example below for Github Workflow.

For additional instructions around authenticating the CLI using Environment Variables - [Authenticating the CLI](/developer-cli/authentication/)

### Github Workflow

For installing the Devloper CLI in a Github Workflow context, all you need is 
  - Create an API Key from the Mecha Console > [API Keys](https://app.mecha.build/account/api-keys)
  - Set the API Keypair generated as secrets in Github Actions - `MECHACTL_API_KEY_NAME`, `MECHACTL_API_KEY_SECRET` 
  - Setup Node.js in your Github Workflow using `actions/setup-node@v3` action with `lts` node-version.
  - Install the `mechactl` using `npm`

An example of a Github Workflow is shown below.

```yml
name: Github Workflow with mechactl
# Setup env from secrets
env:
  MECHACTL_API_KEY_NAME: ${{ secrets.MECHACTL_API_KEY_NAME }}
  MECHACTL_API_KEY_SECRET: ${{ secrets.MECHACTL_API_KEY_SECRET }}
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # Use the nodejs action
      - uses: actions/setup-node@v3
        with:
          node-version: 18

      # Install the CLI
      - name: Installing mechactl
        run: npm install -g `mechactl`

      # Print account information
      - name: Check account information
        run: mechactl auth whoami
```


## Installing in a Docker image

Use any of the `node` images on [Docker Hub](https://hub.docker.com/node) as base for your docker container.

An example of a `Dockerfile` is shown below that installs the `mechactl` CLI and authenticates via `API Key Name, Secret` in the environment.

```Dockerfile
# Node LTS
FROM node:lts:debian

ENV MECHACTL_API_KEY_NAME
ENV MECHACTL_API_KEY_SECRET

# Install the CLI
RUN npm install -g mechact

# Print account information
CMD ["mechactl", "auth", "whoami"]
```

## Clone the Git Repository

You can also download the source and run the CLI in your local environment by cloning the git repository below. The source code is licensed under the permissive open-source license [MIT](https://opensource.org/license/mit/).

Github: [mecha-org/mechactl](https://github.com/mecha-org/mechactl)

```sh
$ git clone https://github.com/mecha-org/mechactl
```

Check instructions on the `README.md` to run the CLI in your local environment and guidelines on how-to contribute.


## Troubleshooting

Below section documents any known issues during installation.


- No known issues currently