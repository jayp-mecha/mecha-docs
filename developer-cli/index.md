# Developer CLI (`mechactl`)

The Developer CLI for Mecha, or generally referred to us as `mechactl` is a command-line interface (CLI) for managing your devices, connecting your dev machines, hosts to the Mecha network and perform advanced operations within your account which are not always possible via the Console.

This part of the docs, focuses entirely on the `mechactl` - installation, usage guides and command reference.

## Quick Start

Follow the 3 steps below, to quicky get up and running with the CLI.

1. The Developer CLI is available on `npm`, launch your favorite terminal and run the below command to install the CLI.

```shell
$ npm install -g mecha-org/mechactl

# This command installs the mechactl globally within your user account
```

For installing `nodejs`, `npm` find OS specific instructions in to our [Installation](installation/) section.

💡 You normally shouldn't need `sudo` to run this command

2. If you have already signed up for a [Mecha account](https://console.mecha.so/auth/signup/) before, you can quickly authorize the CLI with your account using the command below. 

```shell
$ mechactl auth login
```

Once your login is successful, the CLI will try to create an API Key in your account and ask for the key name, if you don't specify any we will default to your system's `hostname`.

There are more ways to authorize the CLI, refer to [Authorization](authorization/) for detailed documentation.

3. You are now ready to use the CLI 🚀. Try out the below commands, to quickly check if everything is working well.

```shell
$ mechactl whoami               # prints your  account information

$ mechactl device list          # lists the devices added in your account
```

Now that the CLI is installed, next time just launch a new terminal window and start running `mechactl` commands.


## What's next?

Check out our different **guides** on the sidebar for different things you can do with the Developer CLI.

You can also check the **Command Reference** section for detailed syntax, argument definition and examples for every command.

