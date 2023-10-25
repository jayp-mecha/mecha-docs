---
title: mechactl device list
---

# mechactl device list

## Name

> **Command Syntax** > **mechactl device list [options]** - List user devices from `mechactl` CLI for your [Mecha](https://console.mecha.so/) account

## Usage

```bash
$ mechactl device list --interactive
$ mechactl device list --limit=10 --skip=0 --order=ASC
$ mechactl device list --keyword=ast-1
$ mechactl device list --tag=hello:world
```

## Description

**mechactl device list** command allows you to list the devices associated with your account. You can specify various options to filter and customize the output.

### Notes

- You first need to [Login](../auth/login.md) before you try to list all the devices.
- You can launch the interactive flow for device list command using the `--interactive` command
- The limit and skip options allows you to control the number of devices displayed. Range for limit ranges from 1 to 100 where as the range for skip ranges from 0 to 100.
- You can also control the sorting order using `--order` option.
- You can also filter devices can be filtered using the keywords and tags.

## Options

- `--interactive [-i]` Show all prompts for interactive mode.
- `--limit [-l]` Limit the number of devices to display (1-100).
- `--skip [-s]` Skip a specified number of devices in the list (0-100).
- `--keyword [-k]` Filter devices by a keyword.
- `--tag [-t]` Filter devices by tags (e.g., `key1:value1`).
- `--order [-o]` Specify field and its order for sorting (e.g., `field:ASC|DESC`).

**Standard options**

- `--json [-j]` Prints all output and error messages in JSON. Useful for any application
- `--verbose [-v]` Prints all logs across all levels for debugging a command
- `--debug [-d]` Print all logs with debug and above levels

## Examples

Launch the device list flow in an interactive session

```bash
$ mechactl device list --interactive
```

Launch the device flow by passing display options and specific order

```bash
# trigger device list
$ mechactl auth login --limit=10 --skip=0 --order=ASC
```

Launch the device flow by passing the filter options

```bash
# trigger device list
$ mechactl auth login --keyword=foo --tag=hello:world
```
