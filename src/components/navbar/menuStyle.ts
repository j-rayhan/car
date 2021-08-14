import { Styles } from 'react-burger-menu'

export const menuStyle: Partial<Styles> = {
  bmBurgerButton: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    right: '20px',
    top: '20px',
  },
  bmBurgerBars: {
    background: '#373A47',
  },
  bmCrossButton: {
    width: '24px',
    height: '24px',
  },
  bmCross: {
    background: '#BDC3C7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '50%',
    top: '0px',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2em 1.5em 0',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    fontStyle: '1.5em',
  },
  bmOverlay: {
    background: 'rgba(0,0,0,0.2)',
  },
}
