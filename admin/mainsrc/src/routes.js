import React from "react";
import updateFarmingPair from "../src/views/pages/farming pairs/updateFarmingPair";

const Toaster = React.lazy(() =>
  import("./views/notifications/toaster/Toaster")
);
const Tables = React.lazy(() => import("./views/base/tables/Tables"));

const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const BasicForms = React.lazy(() => import("./views/base/forms/BasicForms"));

const Jumbotrons = React.lazy(() =>
  import("./views/base/jumbotrons/Jumbotrons")
);
const ListGroups = React.lazy(() =>
  import("./views/base/list-groups/ListGroups")
);
const Navbars = React.lazy(() => import("./views/base/navbars/Navbars"));
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/base/paginations/Pagnations")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const ProgressBar = React.lazy(() =>
  import("./views/base/progress-bar/ProgressBar")
);
const Switches = React.lazy(() => import("./views/base/switches/Switches"));

const Tabs = React.lazy(() => import("./views/base/tabs/Tabs"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));
const BrandButtons = React.lazy(() =>
  import("./views/buttons/brand-buttons/BrandButtons")
);
const ButtonDropdowns = React.lazy(() =>
  import("./views/buttons/button-dropdowns/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() =>
  import("./views/buttons/button-groups/ButtonGroups")
);
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);
const Widgets = React.lazy(() => import("./views/widgets/Widgets"));
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));
const Tokens = React.lazy(() => import("./views/pages/tokens/Tokens"));
const AddTokens = React.lazy(() => import("./views/pages/tokens/AddToken"));
const Pairs = React.lazy(() => import("./views/pages/pairs/Pairs"));
const AddPairs = React.lazy(() => import("./views/pages/pairs/AddPairs"));

const FarmingPairs = React.lazy(() =>
  import("./views/pages/farming pairs/FarmingPairs")
);
const AddFarmingPair = React.lazy(() =>
  import("./views/pages/farming pairs/AddFarmingPair")
);

const IPBlockList = React.lazy(() =>
  import("./views/pages/ip blocklist/Blocklist")
);
const AddNewIPBlockList = React.lazy(() =>
  import("./views/pages/ip blocklist/AddNewBlocklist")
);

const IPWhiteList = React.lazy(() =>
  import("./views/pages/ip whitelist/Whitelist")
);
const AddNewWhiteList = React.lazy(() =>
  import("./views/pages/ip whitelist/AddNewWhitelist")
);

const SwapHistory = React.lazy(() =>
  import("./views/pages/history/SwapHistory")
);
const StakeHistory = React.lazy(() =>
  import("./views/pages/history/StakeHistory")
);
const PoolHistory = React.lazy(() =>
  import("./views/pages/history/PoolHistory")
);

const SiteSettings = React.lazy(() =>
  import("./views/pages/site settings/SiteSettings")
);
const Security = React.lazy(() => import("./views/pages/security/security"));

const TFAPage = React.lazy(() => import("./views/pages/security/TFAPage"));

const ProtectedRouter = React.lazy(() =>
  import("../src/protected router/ProtectedRoute")
);

const updateToken = React.lazy(() =>
  import("../src/views/pages/tokens/updateToken")
);

const updateStake = React.lazy(() =>
  import("../src/views/pages/farming pairs/updateFarmingPair")
);
const addPool = React.lazy(() => import("../src/views/pages/pool/addPool"));

const listPool = React.lazy(() => import("../src/views/pages/pool/listPool"));

const LiquidityHistory = React.lazy(() =>
  import("../src/views/pages/history/LiquidityHistory")
);

const ReferralHistory = React.lazy(() =>
  import("../src/views/pages/history/ReferralHistory")
);

const CMS = React.lazy(() => import("./views/pages/CMS/Cms"));
const AddCMS = React.lazy(() => import("./views/pages/CMS/AddCMS"));
const EditCMS = React.lazy(() => import("./views/pages/CMS/EditCMS"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/forms", name: "Forms", component: BasicForms },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/button-dropdowns",
    name: "Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },

  {
    path: "/32Ygwi0SI34xf9e0CnspEA",
    name: "Tokens",
    component: Tokens,
    exact: true,
  },
  {
    path: "/e9T3S5K5XKHmMWxY8HJ2Ng",
    name: "Add Tokens",
    component: AddTokens,
    exact: true,
  },

  {
    path: "/xUGS8q4Sc4y2YJqffvKRSQ",
    name: "Pairs",
    component: Pairs,
    exact: true,
  },
  {
    path: "/sgNkunyU4d8l8SR9TNaYcQ",
    name: "Add Pairs",
    component: AddPairs,
    exact: true,
  },
  {
    path: "/cms",
    name: "CMS",
    component: CMS,
    exact: true,
  },
  {
    path: "/addcms",
    name: "Add CMS",
    component: AddCMS,
    exact: true,
  },
  {
    path: "/editcms/:id",
    name: "Edit CMS",
    component: EditCMS,
    exact: true,
  },


  {
    path: "/cMOttaf1oqjJNO3xynjO3Q",
    name: "Farming Pairs",
    component: FarmingPairs,
    exact: true,
  },
  {
    path: "/x3SDEITBOsBhyh5KHd91Ew",
    name: "Add Farming Pairs",
    component: AddFarmingPair,
    exact: true,
  },

  {
    path: "/ahw8feGMqUwLvBZEDkDAQ",
    name: "IP BlockList",
    component: IPBlockList,
    exact: true,
  },
  {
    path: "/t76XKN5NjQOrEeQ1k1oIn6LF45Dy3V8nopXtPN8",
    name: "Add New IP Blocklist",
    component: AddNewIPBlockList,
    exact: true,
  },

  {
    path: "/EGPa6kMKsf6rchOZy0kgVw",
    name: "IP WhiteList",
    component: IPWhiteList,
    exact: true,
  },
  {
    path: "/SXusr9IQvIL23HgiLxfPv2U3cyQwJeIo75GkMe9POxc",
    name: "Add New IP Whitelist",
    component: AddNewWhiteList,
    exact: true,
  },

  {
    path: "/nYd2gLOTYBlkLQD32ra6g",
    name: "Swap History",
    component: SwapHistory,
    exact: true,
  },

  {
    path: "/QFVk8IXholcR9NGpFKlNA",
    name: "Stake History",
    component: StakeHistory,
    exact: true,
  },

  {
    path: "/bPvUWNImgrdmBuIQyUPA",
    name: "Referral History",
    component: ReferralHistory,
    exact: true,
  },

  {
    path: "/koZvfXSuj82y9fs2A7HLg",
    name: "Pool History",
    component: PoolHistory,
    exact: true,
  },

  {
    path: "/F3WIBjoms3ojEq6lKrACw",
    name: "Site Settings",
    component: SiteSettings,
    exact: true,
  },

  {
    path: "/h97OyItcsXWDJbqqMWAG8g",
    name: "Security",
    component: Security,
    exact: true,
  },

  {
    path: "/jCu0JyCbSxmkDnVbRFCQtg",
    name: "TFA Page",
    component: TFAPage,
    exact: true,
  },

  {
    path: "/8q0MGEX8BL8fFOBZD0yjng/:id",
    name: "Update Currency",
    component: updateToken,
    exact: true,
  },

  {
    path: "/updatefarmpair/:id",
    name: "Update Farm Pair",
    component: updateStake,
    exact: true,
  },

  {
    path: "/CUkDJgmWwv0V+HIYRj0oqw",
    name: "Add Pool",
    component: addPool,
    exact: true,
  },

  {
    path: "/VIQ0Z2u7XJ8dniftjaXcA",
    name: "List Pool",
    component: listPool,
    exact: true,
  },
  {
    path: "/GeBjTFRSjTRvRsJPkkAI0FcTEw6YazYcBP9K6M",
    name: "Liquidity History",
    component: LiquidityHistory,
    exact: true,
  },



];

export default routes;
