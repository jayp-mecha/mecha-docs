---
title: Connect using SSH - Comet-M
---

# 👩‍💻 Connect using SSH

SSH or Secure Shell enables you to access your machine securely across any secured or unsecured network. Find out more about [SSH](https://www.cloudflare.com/en-in/learning/access-management/what-is-ssh/).

```
TODO: Add Screenshot
```

> 💡 Using the **Networking** feature on the `Console` you can SSH to your Comet-M from anywhere on the living planet. Read more about [Networking](#) here

## Get Started

1. To get started, you will first need your Comet-M connected to your home or work network so that you are able to connect to its shell.

2. Run the command below to connect to your device using SSH.

    ```bash
    $ ssh mecha@mecha-comet-m-gen1.local

    # or if you know the ip address
    $ ssh mecha@your-ip-address
    ```

    The Comet-M has a default user `mecha` (sudoer) already created and a hostname set to `mecha-comet-m-gen1.local` for you to get started. If you know your device's IP address you can also use it to connect to SSH.

    > 🔐 **The default password is `mecha` you will be asked to change it as soon as you login for the first time.**

3. That's it, you will now be connected! 🚀

## Changing the default hostname

You can update the `hostname` for your Comet-M by updating the `/etc/hostname` in Linux.

```bash
$ cat /etc/hostname
mecha@mecha-comet-m-gen1.local

$ sudo nano /etc/hostname
```

You can make your changes, save the file and `sudo reboot` to apply the changes.
