export const portfolioData = {
  personal: {
    codename: "ECE LAB DOSSIER // HARDWARE INTEL",
    name: "kishor",
    title: "Electronics & Communication Engineering Student",
    subtitle: "Embedded Systems • FPGA & Digital Logic • PCB Design • IoT Architecture",
    location: "Electronics & Embedded Systems Lab",
    status: "OPEN FOR EMBEDDED, HARDWARE & FIRMWARE ROLES",
    caseNumber: "CASE #ECE-2026",
    bio: "Passionate Electronics & Communication Engineering (ECE) student dedicated to bridging the boundary between physical silicon and intelligent firmware. Experienced in multi-layer PCB layout, writing bare-metal Embedded C/C++ for ARM Cortex and ESP32 microcontrollers, synthesizing digital logic in Verilog, and debugging RF communication pipelines with oscilloscopes.",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "ece.engineer@portfolio.local"
    },
    stats: [
      { label: "Circuits & Boards Designed", value: "18+" },
      { label: "Microcontrollers Mastered", value: "10+" },
      { label: "Signal Integrity Verified", value: "99.9%" },
      { label: "Lab Hours at the Bench", value: "1,200+" }
    ]
  },

  skills: {
    embedded: [
      { name: "Embedded C / C++ (ARM & STM32)", level: 94, icon: "Cpu" },
      { name: "ESP32, ESP8266 & Arduino MCU", level: 96, icon: "Layers" },
      { name: "FreeRTOS & Real-Time Kernel Tasks", level: 88, icon: "Zap" },
      { name: "Hardware Protocols (I2C, SPI, UART, CAN)", level: 95, icon: "Network" },
      { name: "Microprocessor Arch (8051, AVR, RISC-V)", level: 86, icon: "Terminal" }
    ],
    hardware: [
      { name: "PCB Design (KiCad & Altium Designer)", level: 92, icon: "CircuitBoard" },
      { name: "FPGA & Digital Logic (Verilog / VHDL)", level: 86, icon: "Cpu" },
      { name: "Circuit Simulation (LTspice, Proteus)", level: 90, icon: "Radio" },
      { name: "Bench Testing (Oscilloscopes & Logic Analyzers)", level: 95, icon: "Activity" },
      { name: "Soldering & SMD Component Rework", level: 92, icon: "Tool" }
    ],
    communication: [
      { name: "Wireless Protocols (BLE, Wi-Fi, LoRa)", level: 91, icon: "Wifi" },
      { name: "Digital Signal Processing (DSP, FFT, MATLAB)", level: 88, icon: "BarChart2" },
      { name: "RF Circuits & Antenna Matching", level: 82, icon: "Radio" },
      { name: "IoT Cloud Telemetry & MQTT Brokers", level: 92, icon: "Cloud" }
    ]
  },

  projects: [
    {
      id: "case-01",
      caseNo: "CASE #ECE-01",
      title: "STM32 Autonomous Flight Controller & IMU Fusion",
      category: "Embedded & Firmware",
      stamp: "SOLVED",
      stampType: "green",
      tapeAngle: "-2deg",
      pinColor: "red",
      summary: "Custom STM32F4-based flight controller with 9-axis IMU Kalman filtering, telemetry radio, and electronic speed controller PWM drivers.",
      fullStory: "Designed from ground up with an STM32F405 microcontroller. Implemented Mahony/Kalman filter sensor fusion reading I2C/SPI gyro and accelerometer data at 1kHz. Features custom fail-safe routines, black-box data logging to SPI Flash, and CAN-bus telemetry broadcasting.",
      tech: ["STM32F4", "Embedded C", "KiCad 4-Layer PCB", "SPI/I2C", "FreeRTOS"],
      metrics: "1,000Hz gyro loop rate with < 1.2ms loop response time",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    {
      id: "case-02",
      caseNo: "CASE #ECE-02",
      title: "Long-Range LoRa Industrial Sensor Gateway",
      category: "Wireless & IoT",
      stamp: "VERIFIED",
      stampType: "amber",
      tapeAngle: "3deg",
      pinColor: "brass",
      summary: "Ultra-low power telemetry station transmitting multi-sensor telemetry up to 10km using LoRa 915MHz and solar energy harvesting.",
      fullStory: "Engineered around the ESP32-S3 and Semtech SX1262 LoRa transceiver. Utilizes deep sleep power cycling with an average idle consumption of under 18µA. Automatically synchronizes packets with an MQTT cloud broker over LTE-M fallback when in range.",
      tech: ["ESP32-S3", "Semtech SX1262 LoRa", "Altium Designer", "MQTT", "Power Harvesting"],
      metrics: "10.4km line-of-sight range tested with 99.4% packet delivery",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    {
      id: "case-03",
      caseNo: "CASE #ECE-03",
      title: "FPGA Real-Time 1024-Point FFT Spectrum Analyzer",
      category: "Digital Logic & FPGA",
      stamp: "CLASSIFIED",
      stampType: "red",
      tapeAngle: "-4deg",
      pinColor: "blue",
      summary: "Hardware-accelerated Fast Fourier Transform (FFT) pipeline synthesizing 60 FPS audio frequency visualizer on Xilinx Artix-7.",
      fullStory: "Written completely in synthesizable Verilog HDL. Ingests stereo audio through an I2S ADC, computes 1024-point radix-2 decimation-in-frequency FFT using Block RAM and DSP48 slices, and drives a VGA display controller in real-time with zero CPU overhead.",
      tech: ["Verilog HDL", "Xilinx Vivado", "Artix-7 FPGA", "VGA Protocol", "I2S Audio"],
      metrics: "Zero frame lag, real-time 44.1kHz continuous hardware audio processing",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    {
      id: "case-04",
      caseNo: "CASE #ECE-04",
      title: "Custom 4-Layer High-Speed Impedance-Controlled PCB",
      category: "Hardware Design",
      stamp: "SHIPPED",
      stampType: "dark",
      tapeAngle: "2deg",
      pinColor: "black",
      summary: "Industrial compute carrier board with controlled 50Ω single-ended & 100Ω differential pairs for high-speed signal routing.",
      fullStory: "Designed for high noise immunity in industrial environments. Features ground planes with stitched vias for EMI shielding, isolated analog/digital power domains, USB 2.0 High-Speed differential lines, and thermal relief calculation for high-current motor drivers.",
      tech: ["KiCad 8.0", "Controlled Impedance", "LTspice Simulation", "Thermal Analysis", "SMD Assembly"],
      metrics: "Passed 100MHz signal integrity & low ripple test under full load",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://github.com",
      githubUrl: "https://github.com"
    }
  ],

  timeline: [
    {
      period: "2024 — PRESENT",
      role: "Electronics & Communication Engineering Student / Lead Hardware Researcher",
      firm: "Robotics & Embedded Systems Lab",
      evidence: "Leading firmware design for autonomous robotics, fabricating custom double and four-layer PCBs, and debugging signal integrity on mixed-signal boards.",
      tag: "LAB LEAD"
    },
    {
      period: "2022 — 2024",
      role: "Embedded Systems Intern & Circuit Designer",
      firm: "Smart IoT & Telemetry Solutions",
      evidence: "Developed wireless telemetry firmware using ESP32 & LoRa, designed sensor interface daughterboards in KiCad, and validated boards with digital oscilloscopes.",
      tag: "HARDWARE AGENT"
    },
    {
      period: "2020 — 2022",
      role: "Digital Electronics & Core Computing Foundation",
      firm: "Institute of Technology",
      evidence: "Mastered Boolean algebra, microprocessors (8051, AVR), analog filter circuits, operational amplifiers, and transmission line theory.",
      tag: "FOUNDATION"
    }
  ]
};
