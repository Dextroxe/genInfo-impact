import { Navbar, Link, Text, Avatar, Dropdown, useTheme, Image } from "@nextui-org/react";
import styles from '../styles/navbar.module.css'




function BasicExample() {
  const { isDark } = useTheme();

  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    < >
      <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky"  >
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >

          <Text b color="inherit" hideIn="xs" h2>
            <Link href="/" color="inherit">Genshin Impact</Link>
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          // enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="underline"
          
        >

          <Navbar.Link isActive href="/">
            <Image src={"/images/home.png"}  alt="..."/>
          </Navbar.Link>
          <Navbar.Link isActive  href="/genshin"><Image src={"/images/characters.png"} alt="..." /></Navbar.Link>
          <Navbar.Link isActive href="/tcg"><Image src={"/images/tcg.png"} alt="..." /></Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="warning"
                  size="md"
                  src="https://avatars.githubusercontent.com/u/75870763?s=400&u=ed50d2af7b75897cab0464cb4e3b628933f57d12&v=4"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="warning"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  DExTROx 
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  AR60 | 804202517
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="discord"  withDivider>
                <Link href="https://discord.gg/DAaccVdDt7">Discord</Link>
              </Dropdown.Item>
              <Dropdown.Item key="discord">ScIenCe BoY#8216</Dropdown.Item>
              <Dropdown.Item key="github"  withDivider>
                <Link href="https://github.com/Dextroxe">GitHub</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse >
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>

  );
}

export default BasicExample;