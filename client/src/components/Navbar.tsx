import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <Box>{children}</Box>
    </Slide>
  );
}

const Navbar: React.FC<Props> = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        backgroundColor: 'background.default',
        height: '100%',
        color: 'text.primary',
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component="a"
            href={item.href}
            sx={{
              color: activeSection === item.href.substring(1) ? 'primary.main' : 'text.primary',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll {...props}>
    <AppBar
          component="nav"
      sx={{
            backgroundColor: 'rgba(10, 25, 47, 0.85)',
            backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 'bold' }}
        >
              Bhagyashree Dhongde
        </Typography>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component="a"
                  href={item.href}
                  sx={{
                    color: activeSection === item.href.substring(1) ? 'primary.main' : 'text.primary',
                    mx: 1,
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
              edge="end"
            onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
      </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
            keepMounted: true,
        }}
        sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
              backgroundColor: 'background.default',
            },
        }}
      >
        {drawer}
      </Drawer>
      </Box>
      {props.children}
    </>
  );
};

export default Navbar; 