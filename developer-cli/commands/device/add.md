---
title: mechactl device add
---

# mechactl device add

## Name

> **Command Syntax** > **mechactl device add [options]** - Add device from `mechactl` CLI for your [Mecha](https://console.mecha.so/) account

## Usage

```bash
$ mechactl device add    # interactive
$ mechactl device add --code=<code>
$ mechactl device add --name=<device-name>
$ mechactl device add --tag=hello:world
```

## Description

**mechactl device add** command allows to add device to your account. The device add flow, when in interactive mode requests for provisioning code, device name and an option to add tags.

### Notes

- You first need to [Login](../auth/login.md) before you try to add a device.
- You can pass device proviosioning code in the command using the options documented below, also refer examples below.
- You can check the device added under the [Devices](https://console.mecha.so/devices) section in the Console.

## Options

- `--code<code> [-c]` Device provioning code
- `--name=<device-name> [-n]` Device name as per choice

**Standard options**

- `--json [-j]` Prints all output and error messages in JSON. Useful for any application
- `--verbose [-v]` Prints all logs across all levels for debugging a command
- `--debug [-d]` Print all logs with debug and above levels

## Examples

Launch the device add flow in an interactive session

```bash
$ mechactl device add
```

Launch the device flow by passing the device provisioning code and device name

```bash
# trigger device add
$ mechactl auth login --code=foo123 --name=foo-device
```
