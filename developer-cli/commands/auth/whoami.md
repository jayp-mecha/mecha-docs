---
title: mechactl auth whoami
---

# mechactl auth whoami

## Name

> **Command Syntax** > **mechactl auth whoami [options]** - Retrieve your authenticated account details of your [Mecha](https://console.mecha.so/) account using `mechactl` CLI

## Usage

```bash
$ mechactl auth whoami
```

## Description

**mechactl auth whoami** command allows you to retrieve information about your authenticated Mecha account. This command provides details about your current session, helping you verify your authentication status.

### Notes

- Whoami command checks the credentials stored locally in your system. The result of the whoami command depends on existence and truthiness of the credentials.
- If credentials are not found in the `.mecha` folder of your system's root directory, it will try and get credentials from ENV variables.

**Standard options**

- `--json [-j]` Prints all output and error messages in JSON. Useful for any application
- `--verbose [-v]` Prints all logs across all levels for debugging a command
- `--debug [-d]` Print all logs with debug and above levels

## Examples

Launch the whoami flow

```bash
$ mechactl auth whoami
```

Add ENV variables and then launch the whoami flow

```bash
# Set the ACCESS_KEY and ACCESS_SECRET environment variables
export ACCESS_KEY="your_access_key"
export ACCESS_SECRET="your_access_secret_key"

# Run the whoami command
$ mechactl auth whoami
```
