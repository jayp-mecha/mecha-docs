---
title: Remote Desktop using VNC - Comet-M
---

# 📺 Remote Access via VNC

The Comet-M is installed with a VNC server by default that you can use to connect to the GUI and control remotely. Find out more about [VNC](https://en.wikipedia.org/wiki/Virtual_Network_Computing) and how it works.

```
TODO: Add Screenshot
```

> 💡 Using the **Networking** feature on the `Console` you can connect remotely via VNC to your Comet-M securely through the internet using our overlay network. Read more about [Networking](#) here

## Get Started
1. Start the `wayvnc.service` by executing the below command on the device. Optionally you can also enable it on startup.

    ```bash
    # start the service
    $ sudo systemctl start wayvnc.service

    # enable on startup
    $ sudo systemctl enable wayvnc.service
    ```

2. You will need a VNC Client installed in your machine to connect to your device. Below are some options that you can use -

    - **RealVNC for Linux, Windows, MacOS, iOS, Android** ([Download](https://www.realvnc.com/en/connect/download/viewer/))
    - **Remote Ripple for Windows, MacOS, iOS, Android** ([Download](https://remoteripple.com/download/))

3. The VNC Server on Comet-M runs on the `5900` port, you can connect to it by specifying the IP address or the hostname of your device and `5900`

    ```bash
    Server: mecha-comet-m-gen1.local
    Port: 5900
    ```

4. That's it, you can now connect and access your Comet-M remotely. 🚀

## Troubleshooting

### VNC Server is not running, or connection refused
Ensure that the `systemd` service - `wayvnc.service` is enabled and running on the device. Use the commands below to check its status

```bash
# check status 
$ sudo systemctl status wayvnc.service
```

If the service is not running and inactive, use the commands below to enable the service and start it.

```bash
# enable the service
$ sudo systemctl enable wayvnc.service

# start the service
$ sudo systemctl start wayvnc.service
```

## Disable the VNC Server
To disable the VNC server on Comet-M you just need to disable its `systemd` service using the command below.

```bash
# stop the wayvnc service
$ sudo systemctl stop wayvnc.service

# to disable the service permanently
$ sudo systemctl disable wayvnc.service
```

## Open Source
A big shout-out to [Andri Yngvason](https://github.com/any1) for the incredible VNC server for wlroots based Wayland Compositors such as `sway` or `phoc`.

- WayVNC: [https://github.com/any1/wayvnc](https://github.com/any1/wayvnc)
