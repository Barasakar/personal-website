import { Container, Stack, Box, useColorModeValue, 
        Link, Menu, MenuButton, IconButton, MenuList, 
        MenuItem } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import BackgroundColorToggle from './Backgroundmode-toggle'

const Navbar = () => {
    return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
        <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
            <Link href='#'>
             Reusme
            </Link>
            <Link href='#'>
             Projects
            </Link>
            <Link href='#'>
             Arts
            </Link>
        </Stack>

        <Box flex={1} align="right">
          <BackgroundColorToggle />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              
              <Menu isLazy id="navbar-menu">
                  <MenuButton
                      as={IconButton}
                      icon={<HamburgerIcon />}
                      variant="outline"
                      aria-label="Options"
                  />
                  <MenuList>
                      <MenuItem href="#">
                          Resume
                      </MenuItem>
                      <MenuItem href="#">
                          Projects
                      </MenuItem>
                      <MenuItem href="#">
                          Arts
                      </MenuItem>
                  </MenuList>
              </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
    )
  }
  export default Navbar