---
title: mechactl auth login - Developer CLI
---

# mechactl auth login

## Name

> **Command Syntax**
> **mechactl auth login [options]** - Authorize the `mechactl` CLI for your [Mecha](https://console.mecha.so/) account

## Usage

```bash
$ mechactl auth login    # interactive
$ mechactl auth login --user=<username/email-address>
$ mechactl auth login --user=<username> --password-file=</path/tofile>

$ mechactl auth login --github # github auth
```

## Description

**mechactl auth login** setups the CLI with your Mecha account. The login flow, when in interactive mode requests the login method, collects your credentials and setups an API key authorizing this CLI for your account.

### Notes
- You can also pass all the account credentials in the command using the options documented below, also refer examples below.
- For authenticating via Github, you can trigger with the `--github` that will launch a browser flow to complete the OpenID authentication flow.
- You can check the API Key generated under the [Settings](https://console.mecha.so/settings/api-keys) in the Console.
- To authorize a server, CI/CD or docker via **environment variables**, refer to [Authorization with Env Vars](/developer-cli/authorization/#environment-variables) for more information.

## Options

- `--user <username/email-address> [-u]` Mecha account username or email address
- `--password-file </path/to/file> [-p]` File path to the account password. The password is read from your file to avoid saving the password in your shell history. 
- `--github` Start a Github OpenID authentication flow

**Standard options**
- `--yes [-y]` Skip all prompts, for this to work you need to pass all required options in the command
- `--json [-j]` Prints all output and error messages in JSON. Useful for any application
- `--verbose [-v]` Prints all logs across all levels for debugging a command
- `--debug [-d]` Print all logs with debug and above levels

## Examples

Launch the login flow in an interactive session

```bash
$ mechactl auth login
```

Launch the login flow passing the email address in the command and the password from a file

```bash
$ vi password.txt 
# do your thing, type the password in the editor, save ([Esc]+:wq) and come back

# trigger the login
$ mechactl auth login --user=luke@mecha.so --password-file=./password.txt
```

Login via Github - starts your default browser with Github sign-in. Once you finish your sign in, the CLI will automatically capture your github user information and process your login.

```bash
$ mechactl auth login --github
```