---
title: Wireless Setup - Comet-M
---

# 🗼 Wireless Setup

## Option 1: Using the Settings App

To get your Comet connected to a wireless access point, just follow the quick steps mentioned below -

1. Start the **Settings App** from the App Drawer

```
TODO: Add screenshot
```

2. Navigate to the **Wireless** section, and proceed to Add New Network

```
TODO: Add screenshot
```

3. Choose the Access Point to connect from the available access points.

```
TODO: Add screenshot
```

4. Enter your passphrase using your Onscreen Keyboard.

```
TODO: Add screenshot
```

That's it you are now connected.

> 💡 In the same **Wireless** section of the Settings App you can also check the IP address assigned to your device, useful if you want to connect via `SSH` or `VNC`.


## Option 2: Using the `mctl` commands

1. You will first need access to the device's terminal, either using SSH via Ethernet (run the command below) or you can connect to the device using [Serial Console](/hardware/comet-m-gen1/developer-guide/serial-console)

```bash
# When connected to ethernet
$ ssh mecha@mecha-comet-m-gen1.local 

# or if you know the IP address
$ ssh mecha@your-ip-address
```

2. On the Serial Console, run the below command to scan for wireless networks around you.

```bash
$ mctl wifi scan
```

3. Pick one of the available wireless networks you want to connect to and run the command below

```bash
$ mctl wifi connect --ssid mecha-wlan

Enter password to connect to **mecha-wlan**: __________
Connected
```

4. Check status of your connection or print the connection information below

```bash
$ mctl wifi status          # To print wireless connection status
$ mctl wifi info            # To print the wireless connection info
```

## Option 3: Manually using Linux Tools

Follow the guide below to connect to a wireless network using the **NetworkManager** `(nmcli)` service in Linux.
