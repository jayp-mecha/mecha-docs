---
title: CPU - Comet-M
---

# CPU

The Comet-M CPU is powered by the NXP iMX8M Mini SOC running Quad-Core Cortex A53. The SOC also includes the GPU, Video Encoder and Video Decoder.

Some of its key features are -

1. CPU frequencies - `1200 MHz`, `1600 MHz`, `1800 MHz`
2. Crypto Extensions
3. Disk Encryption using CAAM driver
4. Secondary Cortex-M4 MCU 

## Scaling the CPU Frequency

The CPU frequency can be controlled using the Linux's CPU Governor system. A **CPUFreq Governor** decides what frequency the CPU should run on based on its defined limits and behaviour. There are different CPU governors available in Linux, balancing either performance or battery efficiency.

The Comet-M is configured with `mctl` that allows you to scale the CPU easily and set the governors. Optionally you can also use the `cpufreq-set` and `cpufreq-info` utilities to manage the CPU governor and retrieve frequency information from the kernel.

### Governors

The list of CPUFreq Governors available in Linux and the commands to set them using `mctl`, or Linux interfaces is shown below.

#### Performance
This governor will set the CPU to its highest frequency at all times.

::: code-group
```bash [mctl]
$ mctl cpu governor performance
```

```bash [cpufreq-set]
$ cpufreq-set -c 0 -g performance            # you need to set on each core
```

```bash [sysfs]
$ echo performance > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor    # you need to set on each core
```
:::

> ⚠️ This will consume most power and also heat up the CPU and subsequently the device. Use it sparingly if you really need high performance constantly.

#### Powersave

Sets the CPU frequency to its lowest frequency configured for the CPU (i.e. `scaling_min_freq`), essentially being the most battery efficient.

::: code-group
```bash [mctl]
$ mctl cpu governor powersave
```

```bash [cpufreq-set]
$ cpufreq-set -c 0 -g powersave            # you need to set on each core
```

```bash [sysfs]
$ echo powersave > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor    # you need to set on each core
```
:::

#### Userspace

Allows setting the CPU frequency to any frequency as per the available frequencies for the CPU in this case - `1200 MHz`, `1600 MHz`, `1800 MHz`.

::: code-group
```bash [mctl]
$ mctl cpu governor userspace
$ mctl cpu speed 1600
```

```bash [cpufreq-set]
$ cpufreq-set -c 0 -g userspace           # you need to set on each core
$ cpufeq-set -c 0 -f 1600                        # sets the frequency to 1600 Hz
```

```bash [sysfs]
$ echo userspace > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor    # you need to set on each core
$ echo 1600000 > /sys/devices/system/cpu/cpu0/cpufreq/scaling_setspeed      # Sets the CPU speed in kilohertz
```
:::

#### Ondemand

Sets the CPU frequency to its highest frequency depending on the current system load. The governor checks the load over the a constant past period (`sampling_rate`) and sets the CPU frequency accordingly.

::: code-group
```bash [mctl]
$ mctl cpu governor ondemand
```

```bash [cpufreq-set]
$ cpufreq-set -c 0 -g ondemand            # you need to set on each core
```

```bash [sysfs]
$ echo ondemand > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor    # you need to set on each core
```
:::

#### Conservative
Similar to the Ondemand governor, with the only difference instead of jumping to the highest available frequency it gradually increases and decreases. This is set as the `default` governor for the Comet-M.

::: code-group
```bash [mctl]
$ mctl cpu governor conservative
```

```bash [cpufreq-set]
$ cpufreq-set -c 0 -g conservative            # you need to set on each core
```

```bash [sysfs]
$ echo conservative > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor    # you need to set on each core
```
:::

## Suspend or Sleep

The CPU can be put to sleep based on the two available suspend options

### 1. Suspend-to-Idle Mode

The Suspend-to-idle is a software-driven approach in suspending the CPU where the CPU is set to its idle state. This methods results in a 50% lower power consumption than usual.

::: code-group
```bash [mctl]
$ mctl cpu suspend --idle
```
```bash [sysfs]
$ echo s2idle > /sys/power/mem_sleep && echo mem > /sys/power/state
```
:::

### 2. Suspend-to-RAM Mode

This approach involves powering down of all the CPU cores and putting the memory into self-refresh saving as much as power as possible, resulting in a 2% power consumption than the average.

::: code-group
```bash [mctl]
$ mctl cpu sleep --to-ram
```
```bash [sysfs]
$ echo deep > /sys/power/mem_sleep && echo mem > /sys/power/state
```
:::

### Waking up the CPU
You can wake up the CPU by using a number of methods, simplest being the **Power** button on the Comet-M. There are more options such as Serial Wakeup, RTC Wakeup, Wake on LAN, Wake on WLAN, read more in the Developer Guide for [CPU Suspend](#)

## Continue Reading
1. Machine CLI `mctl`: [CPU Commands](#)
2. Machine SDK: [CPU Reference](#)
3. CPU Suspend: [Developer Guide](#)
3. Linux Kernel: [[https://www.kernel.org/doc/Documentation/cpu-freq/governors.txt]](https://www.kernel.org/doc/Documentation/cpu-freq/governors.txt)
4. CPUFreq-set [[https://linux.die.net/man/1/cpufreq-set]](https://linux.die.net/man/1/cpufreq-set)

## Questions

1. Will the CPU governor be persisted?
