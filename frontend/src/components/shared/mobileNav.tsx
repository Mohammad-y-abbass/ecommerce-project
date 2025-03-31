'use client';

import ShoppingBag from '@mui/icons-material/ShoppingBag';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import CloseIcon from '@mui/icons-material/Close';

import Link from 'next/link';

import navlinks from '@/utils/navlinks';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={onClose}
      PaperProps={{
        className: 'w-[280px] bg-white text-gray-900',
      }}
    >
      <div className='p-4 flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <ShoppingBag className='h-5 w-5 text-gray-900' />
          <span className='font-bold text-lg tracking-wider'>LOGO</span>
        </div>
        <CloseIcon onClick={onClose} />
      </div>

      <Divider className='bg-gray-200' />

      <List>
        {navlinks.map((item) => (
          <ListItem
            key={item.href}
            component={Link}
            href={item.href}
            onClick={onClose}
            className='hover:bg-gray-50 text-center'
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>

      <Divider className='bg-gray-200' />
    </Drawer>
  );
}
