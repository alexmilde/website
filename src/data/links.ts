import { iconTypes } from '../commons/constants'
import type { LinkWithIcon } from '../commons/types'

export const info: LinkWithIcon[] = [
    {
        title: 'AI Lab',
        icon: iconTypes.lab,
        url: '/ai',
    },
    {
        title: 'LinkedIn',
        icon: iconTypes.linkedIn,
        url: 'https://www.linkedin.com/in/alexander-milde-dev',
    },
    {
        title: 'Xing',
        icon: iconTypes.xing,
        url: 'https://www.xing.com/profile/Alex_Milde',
    },
    {
        title: 'Github',
        icon: iconTypes.git,
        iconClass: 'h-4 w-4 sm:h-6 sm:w-6 fill-slate-400 group-hover:fill-slate-600',
        url: 'https://github.com/alexmilde',
    },
    {
        title: 'E-Mail',
        icon: iconTypes.email,
        url: 'mailto:alex@finekost.com',
    },
]
