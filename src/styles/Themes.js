import mobileBgDark from '../images/bg-mobile-dark.jpg';
import mobileBgLight from '../images/bg-mobile-light.jpg';
import desktopBgDark from '../images/bg-desktop-dark.jpg';
import desktopBgLight from '../images/bg-desktop-light.jpg';
import DayModeIcon from '../images/vectors/dayMode';
import NightModeIcon from '../images/vectors/nightMode';

export const lightTheme = {
    bgImageMb: `url(${mobileBgLight})`,
    bgImageDsk: `url(${desktopBgLight})`,
    bgColor: 'hsl(0, 0%, 98%)',
    icon: <NightModeIcon />,
    todoBg: 'hsl(0, 0%, 98%)',
    todoBgInv: 'hsl(235, 24%, 19%)',
    taskBorder: 'hsl(235, 19%, 87%)',
    taskComplete: 'hsl(236,9%,78%)',
    todoFg: 'hsl(236, 9%, 32%)',
    footerFg: 'hsl(290, 60%, 18%)'
}

export const darkTheme = {
    bgImageMb: `url(${mobileBgDark})`,
    bgImageDsk: `url(${desktopBgDark})`,
    bgColor: 'hsl(235, 21%, 11%)',
    icon: <DayModeIcon/>,
    todoBg:  'hsl(235, 24%, 19%)',
    todoBgInv: 'hsl(0, 0%, 98%)',
    taskBorder: 'hsl(237, 14%, 26%)',
    taskComplete: 'hsl(236,9%,39%)',
    todoFg: 'hsl(233, 14%, 88%)',
    footerFg: 'hsl(290, 60%, 82%)'
}