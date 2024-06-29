import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Menu, X } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Button,
  InteractiveIcon,
  Nudge,
  VisuallyHidden,
} from "./ui"
import {
  mobileNavOverlay,
  mobileNavLink,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
  ipBar, // Import the new style
  ipBarProtected,
  ipBarUnprotected
} from "./header.css"
import NavItemGroup from "./nav-item-group"
import BrandLogo from "./brand-logo"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      homepageLink {
        href
        text
      }
      allHomepageLink {
        edges {
          node {
            id
            text
            href
          }
        }
      }
      layout {
        header {
          id
          navItems {
            id
            navItemType
            ... on NavItem {
              href
              text
            }
            ... on NavItemGroup {
              name
              navItems {
                id
                href
                text
                description
                icon {
                  alt
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)
 
  const { homepageLink } = data;
  const { navItems, cta } = data.layout.header;
  const targetItemId = "-27fd89a4-d3ef-5ebe-b5c8-538e2fe5e7b8";
  const targetLink = data.allHomepageLink.edges.find(edge => edge.node.id === targetItemId)?.node;

  const [isOpen, setOpen] = React.useState(false)
  const [ipStatus, setIpStatus] = React.useState({ ip: 'Loading...', status: 'Loading...' });

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  React.useEffect(() => {
    const fetchIpStatus = async () => {
      try {
        const response = await fetch('https://check.cicadavpn.com/check-ip'); 
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Log the data to see the structure
        setIpStatus({ ip: data.ip, status: data.status });
      } catch (error) {
        console.error("Error fetching IP status:", error);
        setIpStatus({ ip: 'Error', status: 'Error fetching IP status' });
      }
    };

    fetchIpStatus();
  }, []);

  const statusClass = ipStatus.status === 'Not using CicadaVPN' ? ipBarUnprotected : ipBarProtected;

  return (
    <header>
      <div className={ipBar}>
        <span>IP: {ipStatus.ip} · Status: </span>
        <span className={statusClass}>{ipStatus.status}</span>
      </div>
      <Container className={desktopHeaderNavWrapper}>
        <Space size={1} />
        <Flex variant="spaceBetween">
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <nav>
            <FlexList gap={4}>
              {navItems &&
                navItems.map((navItem) => (
                  <li key={navItem.id}>
                    {navItem.navItemType === "Group" ? (
                      <NavItemGroup
                        name={navItem.name}
                        navItems={navItem.navItems}
                      />
                    ) : (
                      <NavLink to={navItem.href}>{navItem.text}</NavLink>
                    )}
                  </li>
                ))}
            </FlexList>
          </nav>
          <div style={{ marginRight: '10px' }}>
            {targetLink && <Button to={targetLink.href}>{targetLink.text}</Button>}
          </div>
        </Flex>
        <Space size={1} />
      </Container>

      <Container className={mobileHeaderNavWrapper[isOpen ? "open" : "closed"]}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <span
            className={
              mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
            }
          >
            <NavLink to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <BrandLogo />
            </NavLink>
          </span>
          <Flex>
            <Space />
            <div>
              {cta && (
                <Button to={cta.href} variant={isOpen ? "reversed" : "primary"}>
                  {cta.text}
                </Button>
              )}
            </div>
            <Nudge right={3}>
              <InteractiveIcon
                title="Toggle menu"
                onClick={() => setOpen(!isOpen)}
                className={
                  mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
                }
              >
                {isOpen ? <X /> : <Menu />}
              </InteractiveIcon>
            </Nudge>
          </Flex>
        </Flex>
      </Container>
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="stretch">
              {navItems?.map((navItem) => (
                <li key={navItem.id}>
                  {navItem.navItemType === "Group" ? (
                    <NavItemGroup
                      name={navItem.name}
                      navItems={navItem.navItems}
                    />
                  ) : (
                    <NavLink to={navItem.href} className={mobileNavLink}>
                      {navItem.text}
                    </NavLink>
                  )}
                </li>
              ))}
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  )
}
