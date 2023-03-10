export const MENUS = [
  { name: "HOME", url: "/" },
  { name: "LOGIN", url: "/login" },
  { name: "ABOUT", url: "/about" },
  { name: "REGISTER", url: "/register" },
];

export const NAVIGATION = [
  { name: "All", url: "all" },
  { name: "Laptops", url: "computers" },
  { name: "Tablets", url: "tablets" },
  { name: "Appliances", url: "appliances" },
  { name: "Console", url: "console" },
  { name: "Telescope", url: "telescope" },
  { name: "Electronics", url: "electronics" },
];

export const users = [
  { name: "Mike", password: "Asd" },
  { name: "Bold", password: "Asd" },
  { name: "John", password: "Asd" },
  { name: "Yalalt", password: "password123" },
  { name: "Erdene", password: "dididi" },
  { name: "Amar", password: "aaa123" },
];

export const CATEGORY = [
  "appliances",
  "computers",
  "tablets",
  "console",
  "telescope",
  "electronics",
  "special",
];

export const data = [
  {
    description:
      "Customize a Samsung Bespoke 3- or 4-door French door refrigerator or 4-Door Flex refrigerator with panels available in multiple colors and finishes. Plus, shop for matching appliances.",
    spec: { Brand: "Samsung", Height: "69 7/8 inches", Width: "35 3/4 inches" },
    name: "4-Door Flex",
    id: "a4bbe2cc",
    image:
      "https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/090321/rs22t5561sr/RS22T5561SR_01_SIlver_samsung.jpg?$product-details-jpg$",
    price: 1222,
    stock: 12,
    sale: 23,
    category: "appliances",
  },
  {
    name: "HP Elitebook 840",
    spec: {
      Brand: "HP",
      Display: "14 inch",
      CPU: "i5-6300U 2,4 GHZ",
      Hard: "1TB SSD",
      RAM: "16GB",
    },
    id: "ea5e3b6c",
    image: "https://i.ebayimg.com/images/g/E8wAAOSwO9Bjmd1t/s-l1600.jpg",
    description:
      "Used: An item that has been used previously. The item may have some signs of cosmetic wear, but is fully operational and functions as intended. This item may be a floor model or store return that has been used. See the sellers listing for full details and description of any imperfections. ",
    price: 180,
    stock: 29,
    sale: 0,
    category: "computers",
  },
  {
    name: "HP Probook 430",
    spec: {
      Brand: "HP",
      Display: "13 inch",
      CPU: "i5-8250U 2,4 GHZ",
      Hard: "256GB SSD",
      RAM: "8GB",
    },

    id: "bf3e8ab6",
    image: "https://i.ebayimg.com/images/g/F2oAAOSwbxBimCXu/s-l1600.jpg",
    description:
      "Touch Convertible Laptop AMD. 1 year Warranty. Free and fast delivery.",
    price: 265,
    stock: 2,
    sale: 15,
    category: "computers",
  },
  {
    name: "Acer Spin 3",
    spec: {
      Brand: "Acer",
      Display: "14 inch",
      CPU: "i5-8250U 2,4 GHZ",
      Hard: "512GB SSD",
      RAM: "8GB",
    },
    id: "0bd16f1e",
    image: "https://i.ebayimg.com/images/g/YLkAAOSwKjpjpOdr/s-l1600.jpg",
    description:
      "Touch Convertible Laptop AMD. 1 year Warranty. Free and fast delivery.",
    price: 220,
    stock: 12,
    sale: 10,
    category: "computers",
  },
  {
    name: "iPad 10",
    id: "a4bbe60a",
    description:
      "The iPad is a touchscreen tablet PC made by Apple . The original iPad debuted in 2010. Apple has three iPad product lines: iPad, iPad mini and iPad Pro. All models are available in silver, gray and gold. They run Apple's iOS mobile operating system and have Wi-Fi connectivity with optional 4G capabilities.",
    spec: {
      Brand: "Apple",
      Display: "17 inch",
      Resolution: "2360 x 1640",
      Storage: "16GB",
    },
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5200/5200904_sd.jpg;maxHeight=640;maxWidth=550",
    price: 599,
    stock: 13,
    sale: 0,
    category: "tablets",
  },
  {
    name: "Breville - Microwave",
    id: "e6518a42",
    description:
      "???It is well designed, it looks good, has a lot of power (1250 watts), is quiet, easy to use, and has the right set of presets for someone who spends a lot of time",
    spec: {
      Brand: "breville",
      Wattage: "1200 watts",
      Color: "Stainless Steel",
      Microwave_controls: "Electronics",
      Product_Height: "12 inches",
      Product_Width: "20 inches",
      Product_Depth: "17 1/2 inches",
      Capacity: "1.2 cubic feet",
      Microwave_Size: "Mid size",
    },
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6362/6362516_sd.jpg;maxHeight=640;maxWidth=550",
    price: 399,
    stock: 120,
    sale: 10,
    category: "appliances",
  },
  {
    name: "Redmi Pad",
    id: "b3b85b5c",
    description:
      "Redmi Pad All in one, pad for fun 90Hz buttery smooth display High-performance MediaTek Helio G99 Long-lasting 8000mAh battery Flagship-level unibody design",
    spec: {
      Brand: "Xiaomi",
      Size: "10.61 display",
      Resolution: "1200 x 2000",
      Refresh_rate: "90Hz",
      Brightness: "400nits",
    },
    image:
      "https://i02.appmifile.com/84_operator_sg/13/09/2022/972447360327e0954a43fb47c2b84e68.png?f=webp",
    price: 439,
    stock: 247,
    sale: 20,
    category: "tablets",
  },
  {
    description:
      "As we said a moment ago, our favorite laptop features a 13.3??? inch touchscreen. Xiaomi has gone all out, as it is not only of high definition screen of 360?? rotation, but it is also Super Retina OLED with a resolution of 2880 x 1800. It has a brightness of up to 600 nits and a contrast ratio of 1000000:1, with a refresh rate of 90Hz, Adjustable to 60Hz if desired via the Fn + S keyboard combination. The above resolution translates to 255 PPI with a display ratio of 16:10.",
    spec: {
      Brand: "Xiaomi",
      Memory_Capacity: "Main memory allocated memory",
      Display: "13.3",
      Display_Ratio: "16:10",
      Card_Model: "Intel Iris Xe Graphics",
      Rate: "60Hz",
      Hard_Drive: "512GB",
      CPU: "Intel Core i7-1250U",
      RAM: "16GB",
      Display_Resolution: "2880x1800",
    },
    name: "Xiaomi Mi Book Air 13",
    id: "0ed4cb4e",
    image:
      "https://www.xiaomihome.global/wp-content/uploads/2022/11/xiaomi-book-air-13-2022-cover-1.webp",
    price: 1200,
    stock: 10,
    sale: 24,
    category: "computers",
  },
  {
    description: "Philips Hue smart LED bulbs",
    spec: {
      Brand: "Philips",
      Type: "A19",
      Wattage: "9.5W",
      Output: "800 Lumens",
    },
    name: "LED bulbs",
    id: "8bf7f5fc",
    image: "https://m.media-amazon.com/images/I/51rOc2LtV8L._AC_SX679_.jpg",
    price: 80,
    stock: 4,
    sale: 2,
    category: "appliances",
  },
  {
    description: "Philips HD6975/00 25 Litre Digital Oven Toaster Grill",
    spec: {
      Brand: "Philips",
      Capacity: "25 Liters",
      Wattage: "1500W",
      Weight: "6380 Grams",
      Finish_Type: "HD697500",
    },
    name: "Philips Oven",
    id: "8bf7f8d6",
    image: "https://m.media-amazon.com/images/I/718ApoJ2PmL._AC_SX679_.jpg",
    price: 79,
    stock: 164,
    sale: 20,
    category: "appliances",
  },
  {
    description: "XP-PEN Artist12 11.6 Inch FHD Drawing Monitor",
    spec: {
      Brand: "XP-PEN",
      Model: "Artist12",
      Screen: "11.6 Inch",
      Connectivity: "USB/HDMI",
      Accessories: "PN06 Battery-Free Pen",
    },
    name: "Sketch Pad",
    id: "9afc4a40",
    image: "https://m.media-amazon.com/images/I/71uJirbhb+L._AC_SX679_.jpg",
    price: 215,
    stock: 15,
    sale: 15,
    category: "tablets",
  },
  {
    description:
      "Apple 20W USB-C Power Adapter - iPhone Charger with Fast Charging Capability, Type C Wall Charger",
    spec: {
      Brand: "Apple",
      Connectivity_Technology: "USB-C",
      Connector_Type: "USB Type C",
      Compatible_Devices: "Apple iPhone",
    },
    name: "Charger",
    id: "9c7a554c",
    image: "https://m.media-amazon.com/images/I/41iWogJnZQL._AC_SX679_.jpg",
    price: 14.99,
    stock: 122,
    sale: 20,
    category: "electronics",
  },
  {
    description:
      "This 45W dual usb c charger is compatible with Macbook Air, iPad Pro, iPhone 14-8 Series, Samsung S22 Ultra-S10 Series, Steam Deck, Apple Watch Ultra, Apple Watch 8. Pixel 7 Pro and more.",
    spec: {
      Brand: "UGREEN",
      Connectivity_Technology: "USB C",
      Connector_Type: "USB Type C, Dual USB C Ports",
    },
    name: "UGREEN 45W USB C Wall Charger",
    id: "0ed4ce50",
    image: "https://m.media-amazon.com/images/I/51IdGclIwgL._AC_SX679_.jpg",
    price: 69,
    stock: 39,
    sale: 30,
    category: "electronics",
  },
  {
    description:
      "Beats Solo3 Wireless supports spatial audio for immersive music delivering a surround sound experience that you can take with you anywhere.",
    spec: {
      Brand: "Beats",
      Length: "6.9 in. / 17.7 cm",
      Model: "Beats solo3",
      Connectivity: "Bluetooth/Wireless",
    },
    name: "Beats Solo3 Headphones",
    id: "4ab6599a",
    image: "https://m.media-amazon.com/images/I/51QxA-98Q+L._AC_SX679_.jpg",
    price: 200,
    stock: 60,
    sale: 10,
    category: "electronics",
  },
  {
    description:
      "Introducing the newest member of the Nintendo Switch family Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen with the Nintendo Switch  OLED Model system.",
    spec: {
      Brand: "Nintendo",
      Storage: "Save games to your system with 64 GB of internal storage",
      Audio:
        "Enjoy enhanced sound from the systems onboard speakers when playing in Handheld and Tabletop modes.",
    },
    name: "Nintendo Switch - OLED Model/White Joy-Con",
    id: "6a411100",
    image: "https://m.media-amazon.com/images/I/51yJ+OqktYL.jpg",
    price: 54,
    stock: 7,
    sale: 5,
    category: "console",
  },
  {
    description:
      "Fast-heating electric glass carafe kettle for quickly and conveniently boiling water",
    spec: {
      Brand: "Amazon Basics",
      Height: "8.27 inches",
      Width: "4.92inches",
    },
    name: "Basics Electric Glass and Steel Kettle",
    id: "92fadc2a",
    image: "https://m.media-amazon.com/images/I/61JS5e82ayL._AC_SX679_.jpg",
    price: 24,
    stock: 17,
    sale: 15,
    category: "appliance",
  },
  {
    description:
      "Celestron PowerSeeker 127EQ Telescope - 20mm Erect-Image Eyepiece - 4mm Eyepiece - 3x Barlow Lens - Star Pointer Finder - Equatorial Head - 2x Slow-Motion Cables - Adjustable-Height Tripod - Counterweight Bar - 7.5 lbs.",
    spec: { Brand: "Celestron", Height: "8.46 inches", Width: "16.73 inches" },
    name: "Celestron - PowerSeeker 127EQ Telescope",
    id: "39b365d6",
    image: "https://m.media-amazon.com/images/I/61Squ7U2zRL._AC_SX679_.jpg",
    price: 169,
    stock: 9,
    sale: 23,
    category: "telescope",
  },
  {
    description:
      "2022 Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Midnight",
    spec: {
      Brand: "Apple",
      Model_Name: "MacBook Air",
      Screen_Size: "13.6 inch",
      Color: "Midnight",
      Hard_Disk_Size: "256GB",
      RAM: "8GB",
      Graphics_Coprocessor: "Apple M2",
      Keyboard: "Backlit Keyboard",
    },
    name: "Apple MacBook Air Laptop with M2 chip",
    id: "765b0bc2",
    image: "https://m.media-amazon.com/images/I/719C6bJv8jL._AC_SX679_.jpg",
    price: 1165,
    stock: 25,
    sale: 20,
    category: "computers",
  },
  {
    description:
      "Apple 2022 MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Starlight",
    spec: {
      Brand: "Apple",
      Model_Name: "MacBook Air",
      Screen_Size: "13.6 inch",
      Color: "Starlight",
      Hard_Disk_Size: "512GB",
      RAM: "8GB",
      Graphics_Coprocessor: "Apple M2",
      Keyboard: "Backlit Keyboard",
    },
    name: "Apple 2022 MacBook Air Laptop with M2",
    id: "765a8e4a",
    image: "https://m.media-amazon.com/images/I/710TJuHTMhL._AC_SX679_.jpg",
    price: 1473.94,
    stock: 2,
    sale: 2,
    category: "computers",
  },
  {
    description:
      "Apple 2021 MacBook Pro (14-inch, M1 Pro chip with 8 core CPU and 14 core GPU, 16GB RAM, 512GB SSD) Space Gray",
    spec: {
      Brand: "Apple",
      Model_Name: "MacBook Pro",
      Screen_Size: "14.2 inch",
      Color: "Space Gray",
      Hard_Disk_Size: "512GB",
      RAM: "16GB",
      Graphics_Coprocessor: "Apple M1",
      Keyboard: "Backlit Keyboard",
    },
    name: "Apple 2021 MacBook Pro",
    id: "0ed4cfae",
    image: "https://m.media-amazon.com/images/I/71YhRQy50oL._AC_SX679_.jpg",
    price: 1899.55,
    stock: 4,
    sale: 10,
    category: "computers",
  },
  {
    description:
      "Apple 2021 MacBook Pro (16-inch, M1 Pro chip with 10 core CPU and 16 core GPU, 16GB RAM, 512GB SSD)  Space Gray",
    spec: {
      Brand: "Apple",
      Model_Name: "MacBook Pro",
      Screen_Size: "16.2 inch",
      Color: "Space Gray",
      Hard_Disk_Size: "512GB",
      RAM: "16GB",
      Graphics_Coprocessor: "Apple M1 Pro",
      Keyboard: "Backlit Keyboard",
    },
    name: "Apple 2021 MacBook Pro",
    id: "0ed4d0da",
    image: "https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SX679_.jpg",
    price: 1847.99,
    stock: 1,
    sale: 3,
    category: "computers",
  },
  {
    description:
      "Apple 2020 MacBook Air Laptop M1 Chip, 13 Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone iPad; Gold",
    spec: {
      Brand: "Apple",
      Model_Name: "MacBook Air",
      Screen_Size: "13.6 inch",
      Color: "Gold",
      Hard_Disk_Size: "256GB",
      RAM: "8GB",
      Graphics_Coprocessor: "Apple M1",
      Keyboard: "Backlit Keyboard",
    },
    name: "MacBook Air Gold M1",
    id: "0ed4d74c",
    image: "https://m.media-amazon.com/images/I/81HZAfCGZ5L._AC_SX679_.jpg",
    price: 901,
    stock: 1,
    sale: 2,
    category: "computers",
  },
  {
    description:
      "Apple Magic Mouse Wireless, Rechargable Black Multi-Touch Surface",
    spec: {
      Brand: "Apple",
      Model_Name: "Magic Wireless mouse",
      Color: "Black",
      Connector_Type: "Wireless",
      Movement_Detection: "Optical",
    },
    name: "Apple magic mouse",
    id: "0ed4d882",
    image: "https://m.media-amazon.com/images/I/515ehIbTetL._AC_SX679_.jpg",
    price: 72.83,
    stock: 14,
    sale: 0,
    category: "electronics",
  },
  {
    description:
      "Keep track of and find your items alongside friends and devices in the Find My app Simple one-tap setup instantly connects AirTag with your iPhone or iPad Play a sound on the built-in speaker to help find your things, or just ask Siri for help",
    spec: {
      Brand: "Apple",
      Batteries_Included: "Yes",
      Color: "White",
      Number_of_Batteries: "1 Lithium Metal batteries required",
      Item_Dimensions_LxWxH: "1.26 x 1.26 x 0.31 inches",
    },
    name: "Apple AirTag",
    id: "0ed4dd0a",
    image: "https://m.media-amazon.com/images/I/713xuNx00oS._AC_SX679_.jpg",
    price: 29,
    stock: 4,
    sale: 0,
    category: "electronics",
  },
  {
    description:
      "2022 Apple 10.9-inch iPad (Wi-Fi, 64GB) - Blue (10th Generation)",
    spec: {
      Brand: "Apple",
      Model_Name: "IPad",
      Memory_Storage_Capacity: "64GB",
      Color: "Blue",
      Screen_Size: "10.9 inches",
      Display_Resolution: "2360 x 1640 Pixels",
      Network: "WiFi",
    },
    name: "Apple IPad 2022 10.9 inches",
    id: "0ed4de2c",
    image: "https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_SX679_.jpg",
    price: 449,
    stock: 5,
    sale: 0,
    category: "tablets",
  },
  {
    description:
      "2022 Apple 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Gray (6th Generation)",
    spec: {
      Brand: "Apple",
      Model_Name: "IPad",
      Memory_Storage_Capacity: "128GB",
      Color: "Space Gray",
      Screen_Size: "12.9 inches",
      Display_Resolution: "2732 x 2048 Pixels",
      Network: "WiFi",
    },
    name: "Apple IPad Pro 2022 12.9 inches",
    id: "0ed4e2d2",
    image: "https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX679_.jpg",
    price: 1094,
    stock: 3,
    sale: 0,
    category: "tablets",
  },
  {
    description:
      "SAMSUNG Galaxy Tab A8 10.5??? 32GB Android Tablet w/ LCD Screen, Long Lasting Battery, Kids Content, Smart Switch, Expandable Memory, US Version, Dark Gray",
    spec: {
      Brand: "Samsung",
      Series: "Galaxy Tab A8",
      Memory_Storage_Capacity: "32GB",
      Color: "Dark Gray",
      Screen_Size: "10.5 inches",
      Display_Resolution: "1920 x 1200 Pixels",
      Network: "WiFi",
    },
    name: "Galaxy Tab A8",
    id: "0ed4e412",
    image: "https://m.media-amazon.com/images/I/61b2BrYtVGL._AC_SX679_.jpg",
    price: 189,
    stock: 22,
    sale: 4,
    category: "tablets",
  },
  {
    description:
      "SAMSUNG Galaxy Tab S8+ Android Tablet, 12.4??? Large AMOLED Screen, 512GB Storage, Wi-Fi 6E, Ultra Wide Camera, S Pen Included, Long Lasting Battery, Graphite",
    spec: {
      Brand: "Samsung",
      Series: "Galaxy Tab S8 plus",
      Memory_Storage_Capacity: "512GB",
      Color: "Graphite",
      Screen_Size: "12.4 inches",
      Display_Resolution: "2800 x 1752 Pixels",
      Network: "WiFi 6E",
    },
    name: "Galaxy Tab S8 Plus",
    id: "0ed4e520",
    image: "https://m.media-amazon.com/images/I/81d74GHCPEL._AC_SX679_.jpg",
    price: 1099,
    stock: 3,
    sale: 20,
    category: "tablets",
  },
  {
    description:
      "Microsoft Surface Pro 9 (2022), 13 2-in-1 Tablet & Laptop, Thin & Lightweight, Intel 12th Gen i7 Fast Processor for Multi-Tasking, 16GB RAM, 256GB Storage with Windows 11, Graphite",
    spec: {
      Brand: "Microsoft",
      Series: "Surface Pro",
      CPU: "Intel Evo i7-2640M",
      RAM: "16GB",
      Memory_Storage_Capacity: "256GB",
      Color: "Graphite",
      Screen_Size: "13 inches",
      Graphics_Coprocessor: "Intel Iris Xe Graphics",
      Network: "WiFi 6E",
    },
    name: "Surface Pro",
    id: "0ed4e73c",
    image: "https://m.media-amazon.com/images/I/51qmNla8aTL._AC_SX679_.jpg",
    price: 1399.99,
    stock: 5,
    sale: 5,
    category: "tablets",
  },
  {
    description:
      "Microsoft Surface Pro 9 (2022), 13 2-in-1 Tablet & Laptop, Thin & Lightweight, Intel 12th Gen i7 Fast Processor for Multi-Tasking, 16GB RAM, 256GB Storage with Windows 11, Forest",
    spec: {
      Brand: "Microsoft",
      Series: "Surface Pro",
      CPU: "Intel Evo i7-2640M",
      RAM: "16GB",
      Memory_Storage_Capacity: "256GB",
      Color: "Forest",
      Screen_Size: "13 inches",
      Graphics_Coprocessor: "Intel Iris Xe Graphics",
      Network: "WiFi 6E",
    },
    name: "Surface Pro",
    id: "0ed4e836",
    image: "https://m.media-amazon.com/images/I/51D3B+8L7DL._AC_SX679_.jpg",
    price: 1399.99,
    stock: 4,
    sale: 5,
    category: "tablets",
  },
  {
    description:
      "Hard Travel Case for JBL Charge 4 Waterproof Bluetooth Speaker with Silicone Case for JBL Pulse 4 - Waterproof Portable Bluetooth Speaker with Shoulder Strap - 2 Pack",
    spec: {
      Brand: "Comecase",
      Form_Factor: "Case",
      Shell_Type: "Hybrid",
      Material: "Nylon, Silicone, Ethylene Vinyl Acetate",
      Special_Feature: "Waterproof, Lightweight",
    },
    name: "JBL Pulse 4 Speaker",
    id: "93bd1bce",
    image: "https://m.media-amazon.com/images/I/71225qGpUEL._AC_SX679_.jpg",
    price: 23.95,
    stock: 9,
    sale: 20,
    category: "special",
  },
  {
    description:
      "Effortlessly create your favorite meals and snacks like smoothies, omelets, sauces and dips. 250 watts high-torque power base",
    spec: {
      Brand: "Magic Bullet",
      Color: "Silver/Black",
      Capacity: "0.57 Liters",
      Product_Dimensions: "6.93D x 13.19W x 10.63H inches",
      Special_Feature:
        "Salsa, Cocktails, Ground Coffee, Smoothies, Grated cheese",
    },
    name: "Magic Bullet Blender",
    id: "93bd1e26",
    image: "https://m.media-amazon.com/images/I/61E1h4TadxL._AC_SX679_.jpg",
    price: 46.71,
    stock: 8,
    sale: 30,
    category: "special",
  },
  {
    description:
      "Fitbit Luxe Fitness and Wellness Tracker with Stress Management, Sleep Tracking and 24/7 Heart Rate, Orchid/Platinum Stainless Steel, One Size, S & L Bands Included",
    spec: {
      Brand: "Fitbit",
      Material: "Stainless Steel",
      Color: "Orchid/Platinum Stainless Steel",
      Compatible_Devices: "Smartphones",
      Item_Dimensions_LxWxH: "1.43 x 0.69 x 0.4 inches",
      Screen_Size: "0.96 Inches",
      Battery_Life: "5 days",
    },
    name: "Fitbit Luxe Fitness watch",
    id: "93bd2614",
    image: "https://m.media-amazon.com/images/I/618fpED5knL._AC_SX679_.jpg",
    price: 129,
    stock: 5,
    sale: 15,
    category: "special",
  },
];
