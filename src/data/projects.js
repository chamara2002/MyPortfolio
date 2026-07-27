export const projects = [
  {
    name: "PolicyHub - Policy & Compliance Management Web Application",
    duration: "Sep 2025 - Oct 2025",
    description:
      "Developed a secure, role-based policy management system using React.js (Vite), Node.js, and MongoDB. The application enables policy creation, versioning, assignment, acknowledgments, compliance tracking, reminders, and audit logging. Applied secure coding practices to ensure data integrity, access control, and system reliability.",
    features: [
      "Role-based access control for secure policy management",
      "Policy creation, versioning, and lifecycle management",
      "User acknowledgment tracking and compliance reporting",
      "Automated reminders and notification system",
      "Full audit logging for accountability and traceability",
    ],
    tech: ["React.js", "Vite", "Node.js", "MongoDB", "CSS3"],
    association: "Freelance Project",
    github: "https://github.com/chamara2002/PolicyHub",
    demo: "",
    logo: "/logos/policyhub.png",
    screenshots: []
  },
  {
    name: "LogiManage - Inventory Management Web Application",
    duration: "Aug 2025 - Sep 2025",
    description:
      "Developed an inventory management system using React.js (Vite), Node.js, and MongoDB, supporting the complete inventory workflow including order registration, goods receiving, quality inspection, and final stock handling. Implemented role-based access, real-time status tracking, notifications, and audit logs to improve operational efficiency and traceability.",
    features: [
      "End-to-end inventory workflow: order → receive → inspect → stock",
      "Role-based access for logistics, quality, and security teams",
      "Real-time status tracking with live notifications",
      "Quality inspection dashboard with pass/fail management",
      "Audit logs and exportable reports for traceability",
    ],
    tech: ["React.js", "Vite", "Node.js", "MongoDB", "CSS3"],
    association: "Freelance Project",
    github: "https://github.com/chamara2002/LogiManage",
    demo: "",
    screenshots: [
      { src: "/screenshots/LogiManage/logistic_Dashboard.webp",  caption: "Logistics Dashboard — real-time overview of active orders, shipments, and KPIs" },
      { src: "/screenshots/LogiManage/New_order.webp",            caption: "New Order — form to register incoming inventory orders with item and supplier details" },
      { src: "/screenshots/LogiManage/Manage_Orders.webp",        caption: "Manage Orders — view, filter, and update all pending and active orders" },
      { src: "/screenshots/LogiManage/Order_History.webp",        caption: "Order History — complete audit trail of all past orders with status and timestamps" },
      { src: "/screenshots/LogiManage/Order_Transfer.webp",       caption: "Order Transfer — move orders between departments or storage locations" },
      { src: "/screenshots/LogiManage/GateCheck.webp",            caption: "Gate Check — security gate verification for inbound and outbound deliveries" },
      { src: "/screenshots/LogiManage/Quality_Dashboard.webp",    caption: "Quality Dashboard — summary of inspection queues, pass/fail rates, and pending reviews" },
      { src: "/screenshots/LogiManage/Quality_inspection.webp",   caption: "Quality Inspection — detailed item-level quality check form with criteria and results" },
      { src: "/screenshots/LogiManage/Inspection_History.webp",   caption: "Inspection History — searchable log of all completed quality inspections" },
      { src: "/screenshots/LogiManage/Security_Dashboard.webp",   caption: "Security Dashboard — live monitoring of access events and security alerts" },
      { src: "/screenshots/LogiManage/Security_Check.webp",       caption: "Security Check — personnel and vehicle verification at entry/exit checkpoints" },
      { src: "/screenshots/LogiManage/Notifications.webp",        caption: "Notifications — real-time alerts for order updates, inspection results, and system events" },
      { src: "/screenshots/LogiManage/Report_export.webp",        caption: "Report Export — generate and download detailed inventory and compliance reports" },
      { src: "/screenshots/LogiManage/User_profile.webp",         caption: "User Profile — manage account details, preferences, and access permissions" },
    ]
  },
  {
    name: "SpaceChecker - Parking Space Detection System",
    duration: "Apr 2025 - May 2025",
    description:
      "Developed a Python desktop application using OpenCV, YOLOv8, and Tkinter for real-time parking space detection, featuring an intuitive slot management interface and packaged as a standalone executable with NSIS.",
    features: [
      "Real-time parking slot detection using YOLOv8 object detection",
      "Live RTSP camera feed integration via OpenCV",
      "Intuitive GUI for slot management with Tkinter",
      "Packaged as a standalone Windows executable using NSIS",
    ],
    tech: ["Python", "OpenCV", "YOLOv8", "Tkinter", "NSIS", "RTSP", "Numpy"],
    association: "Associated with AASL (Individual Project)",
    github: "",
    demo: "",
    screenshots: [
      { src: "/screenshots/SpaceChecker/Software.png", caption: "Main Application Interface — live parking lot view with real-time slot detection and status overlay" },
    ]
  },
  {
    name: "StockSpot - Inventory Management System",
    duration: "Jan 2025 - Mar 2025",
    description:
      "Developed a web application to manage office inventory using Node.js, React.js, Express.js, and MariaDB. The system tracks items, manages warranties, and generates reports. Deployed on Windows Server and compatible with Red Hat Linux, using PM2 for process management and enabling multi-user access.",
    features: [
      "Item tracking with warranty lifecycle management",
      "Automated report generation for inventory status",
      "Multi-user access with role separation",
      "Deployed on Windows Server & Red Hat Linux with PM2",
    ],
    tech: ["Node.js", "React.js", "Express.js", "CSS3", "MariaDB", "PM2", "Windows Server", "Red Hat Linux"],
    association: "Associated with AASL (Individual Project)",
    github: "",
    demo: "",
    logo: "/logos/stockspot.png",
    screenshots: []
  },
  {
    name: "WordPress Website Development",
    duration: "Jan 2025 - Feb 2025",
    description:
      "Created and customized a website component using WordPress, WampServer, and phpMyAdmin.",
    features: [
      "Custom WordPress theme and component development",
      "Local development environment setup with WampServer",
      "Database management using phpMyAdmin",
    ],
    tech: ["WordPress", "WampServer", "phpMyAdmin"],
    association: "Associated with AASL (Individual Project)",
    github: "",
    demo: "",
    logo: "/logos/wordpress.png",
    screenshots: []
  },
  {
    name: "cctvDetector - Object Detection and Tracking System",
    duration: "Dec 2024 - Jan 2025",
    description:
      "Developed a Python-based real-time object detection and tracking system using YOLOv8, OpenCV, and Tkinter to monitor CCTV feeds and send notifications when a tracked item goes missing, enhancing security.",
    features: [
      "Real-time object detection and tracking via YOLOv8",
      "Live CCTV feed monitoring over RTSP streams",
      "Automated alerts when tracked items go missing",
      "Desktop GUI built with Tkinter for easy control",
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "Tkinter", "RTSP"],
    association: "Associated with AASL (Individual Project)",
    github: "https://github.com/chamara2002/cctvDetector",
    demo: "",
    logo: "/logos/cctvdetector.png",
    screenshots: []
  },
  {
    name: "LakeView - Gaming Zone Web Application",
    duration: "Sep 2025 - Oct 2025",
    description:
      "Collaboratively developed a game zone management platform using React.js (Vite), Node.js, and MongoDB, featuring management of games, food services, staff, bookings, events, and resources. Demonstrated teamwork and technical skills to streamline operations and enhance user experience.",
    features: [
      "Game zone & arcade management module",
      "Food service ordering and menu management",
      "Staff scheduling and resource allocation",
      "Event management with booking and reservations",
      "Customer-facing UI for browsing and booking",
    ],
    tech: ["React.js", "Vite", "Node.js", "MongoDB", "CSS3"],
    association: "Associated with SLIIT (Group Project)",
    github: "https://github.com/chamara2002/LakeView",
    demo: "",
    logo: "/logos/lakeview.png",
    screenshots: []
  },
  {
    name: "TaskManager - Task Management Mobile Application",
    duration: "Sep 2025 - Oct 2025",
    description:
      "Developed a mobile task management app using Kotlin and XML in Android Studio, enabling users to add, edit, and delete tasks. Implemented persistent storage with SharedPreferences to retain data across sessions, ensuring reliable daily task management.",
    features: [
      "Create, edit, and delete tasks with a clean Android UI",
      "Persistent local storage using SharedPreferences",
      "Session-safe data retention across app restarts",
      "Native Android development with Kotlin & XML layouts",
    ],
    tech: ["Kotlin", "XML", "Android Studio", "SharedPreferences"],
    association: "Associated with SLIIT (Individual Project)",
    github: "https://github.com/chamara2002/TaskManager",
    demo: "",
    logo: "/logos/taskmanager.png",
    screenshots: []
  },
  {
    name: "FreshCraze - Online Grocery Management System",
    duration: "Feb 2024 - Apr 2024",
    description:
      "Collaboratively developed an online grocery management system using JavaScript, and Apache Tomcat to streamline product management and online shopping workflows. The platform offers a user-friendly interface and an efficient backend to enhance the overall shopping experience, demonstrating strong teamwork, system design, and full-stack development skills.",
    features: [
      "Product catalog management with search and filtering",
      "Online shopping cart and checkout workflow",
      "Backend powered by Apache Tomcat with Java Servlets",
      "User-friendly UI for seamless shopping experience",
    ],
    tech: ["JavaScript", "Apache Tomcat", "CSS3"],
    association: "Associated with SLIIT (Group Project)",
    github: "https://github.com/chamara2002/FreshCraze",
    demo: "",
    logo: "/logos/freshcraze.png",
    screenshots: []
  },
  {
    name: "LIFEFLOW - Blood Donation Management System",
    duration: "Aug 2023 - Oct 2023",
    description:
      "Collaboratively developed a blood donation management platform using PHP, HTML, and MySQL to streamline donor-recipient connections and improve the efficiency of blood donation processes. The system enhances accessibility, ensures smooth coordination, and demonstrates teamwork and a commitment to making a positive community impact.",
    features: [
      "Donor registration and blood type management",
      "Donor-recipient matching and request coordination",
      "Donation history tracking for donors",
      "Admin dashboard for managing donations and users",
    ],
    tech: ["PHP", "HTML", "MySQL", "CSS3"],
    association: "Associated with SLIIT (Group Project)",
    github: "https://github.com/chamara2002/LIFEFLOW",
    demo: "",
    logo: "/logos/lifeflow.png",
    screenshots: []
  },
];
