import { DropdownNavigation } from "../dropdown-navigation";
import {
  Calendar,
  CalendarDays,
} from "lucide-react";

function NavigationMenu() {
  const NAV_ITEMS = [
    {
        id : 1,
        label: "Events",
        subMenus: [
            {
                title: "Upcoming Events",
                items: [
                    {
                        label: "Event 1",
                        description: "Join us for this exciting event",
                        icon: Calendar,
                    }
                ]
            }, 
            {
                title: "Past Events",
                items: [
                    {
                        label: "Event 2",
                        description: "Description of Event 2",
                        icon: CalendarDays,
                    }
                ]
            },
        ]
    },
    {
      id: 3,
      label: "About",
      link: "/about",
      
    },
    {
      id: 4,
      label: "Team",
      link: "/team",
    },
    {
      id: 5,
      label: "Sponsors",
      link: "/sponsors",
    },
    {
      id: 6,
      label: "Contact",
      link: "/contact",
    },
  ];

  return <DropdownNavigation navItems={NAV_ITEMS} />;
}

export default NavigationMenu;