
export const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/Profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: {
          label: "Location",
          to: "location",
        },
      },
    ],
  },
  {
    label: "Setting",
    to: "setting",
    children: [
      {
        label: "Account",
        to: "account",
        children: [
          {
            label: "Security",
            to: "security",
            children: [
              {
                label: "Login",
                to: "login",
              },
              { 
                label: "Register",
               to: "register" 
              },
            ],
          },
        ],
      },
    ],
  },
];
