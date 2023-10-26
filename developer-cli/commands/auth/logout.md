---
title: mechactl auth logout
---

# mechactl auth logout

## Name

> **Command Syntax** > **mechactl auth logout [options]** - Logout from your [Mecha](https://console.mecha.so/) account using `mechactl` CLI

## Usage

```bash
$ mechactl auth logout  # interactive
```

## Description

**mechactl auth logout** helps you logout from your current session of your Mecha account using `mechactl` CLI.

### Notes

- Logging out will delete the stored authentication credentials from `.mecha` folder of your system's root directory, ensuring the security of your account.

**Standard options**

- `--yes [-y]` Skip all prompts, for logout command it will skip the confirmation prompt
- `--json [-j]` Prints all output and error messages in JSON. Useful for any application
- `--verbose [-v]` Prints all logs across all levels for debugging a command
- `--debug [-d]` Print all logs with debug and above levels

## Examples

Launch the logout flow

```bash
$ mechactl auth logout
```

Skipping the confirmation prompt

```bash
$ mechactl auth logout --yes
```
