---
title: Connect to Mecha - Comet-M
---

# ☁️ Connect to Mecha Services

Connect your Comet-M to Mecha Services to enable more connected capabilities for your device. Some of the capabilities are mentioned below -
 -  🌐 Networking
 - 📡 Telemetry
 - 🔐 Cryptography
 - 📨 Messaging

## Get Started

You will first need to Sign up for a **Mecha** account via the [Console](#). Once you are logged in you can proceed to below steps.

1. On the **Mecha Console** proceed to *Machines > Add Machine* to start adding your Comet-M.
```
TODO: Add Screenshot
```

2. Choose **Comet-M** from the list of machines in **Step 1**.
```
TODO: Add Screenshot
```

3. Choose your provisioning method, and follow instructions on your screen

> ### Provisioning using Connect App
> 1. Open the **Mecha Connect** App from the App Drawer on your Homescreen
> 2. Follow instructions on the App, till you are shown the Provisioning Code on the screen.

> ### Provisioning using `mctl`
> 1. Connect to your Comet-M's shell using SSH
> 2. Run the below command to start the provisioning process
    ```bash
    $ mctl agent setup
    ```
> *This command will output a code and wait for the provisioning to complete*

4. Enter the Provisioning code from the above step in **Step 3** on the Console.
```
TODO: Add Screenshot
```

5. This will start the provisioning process, wait for it to complete and then proceed to next step. 

6. In the **Step 4**, you can now set your machine's basic details such as `Machine Name`, `Machine Alias` and optionally add tags which you can use to group or filter your device amongst other machines.
```
TODO: Add Screenshot
```

7. In the last **Step 5** you can enable **Networking** for your Comet-M which will assign a virtual IP Address to your device as part of the overlay network. You can also enable **Telemetry** to start collecting metrics and logs from your device.
```
TODO: Add Screenshot
```
