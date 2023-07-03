export const nav = [
    {
      text: "home",
      path: "/",
    },
    {
      text: "using",
      path: "/using",
    },
    {
      text: "report theft",
      path: "/report",
    },

    {
      text: "choose plan",
      path: "/chooseplan",
    },
    
    {
      text: "contacts",
      path: "/contact",
    },
  ]

  export const using = [
    {
      cover: "register.png",
      name: "REGISTER",
      total: "Choose your daily or annual service plan on our website or through our mobile application (coming soon).",
    },
    {
      cover: "pick.png",
      name: "UNLOCK YOUR BIKE",
      total: "Tap your user code first and then your Pin Code on the terminal to Unlock your bike",
    },
    {
      cover: "return.png",
      name: "RETURN THE BIKE",
      total: "Insert the bike in one of the free docks and wait until : 'Correct return' ",
    },
  ]

  export const plan = [
    {
      plan: "DAILY PASS",
      price: "9.99",
      ptext: "It allows you to make an unlimited number of trips for 24 hours:",
      list: [
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "SUPER Fast registration",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Liability insurance for 1000 $",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Bike insurance for 1000 $",
        },
        { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Personal Help Support" },
        { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "No free user change" },
      ],
    },
    {
      best: "Best Value",
      plan: "MONTHLY PASS",
      price: "199.99",
      ptext: "It allows you to make an unlimited number of trips for one month:",
      list: [
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "SUPER Fast registration",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Liability insurance for 1200 $",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Bike insurance for 1200 $",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Personal Help Support",
        },
        {
          change: "color",
          icon: <i class='fa-solid fa-x'></i>,
          text: "No free user change",
        },
      ],
    },
    {
      plan: "YEARLY PASS",
      price: "999.99",
      ptext: "It allows you to make an unlimited number of trips for one year",
      list: [
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "SUPER Fast registration",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Liability insurance for 1500 $",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Bike insurance for 1500 $",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Personal Help Support",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Free user change",
        },
      ],
    },
  ]

  export const footer = [
    {
      title: "MENU",
      text: 
      [
        { list: "Home",
          path: "/#",
      },
       { list: "Using",
       path: "/using",
      },
        
       { list: "Report Theft",
      path: "/report", 
    },
         
       { list: "Choose Plan",
      path: "/chooseplan", },
          
       { list: "Contacts",
      path: "/contact", },

      { list: "Log in",
      path: "/signin", },
      ],
    },
  ]