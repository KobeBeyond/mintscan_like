import React from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
export const MENU_CONFIG = [
    {
        key: 'explorer',
        icon: React.createElement(UserOutlined),
        label: 'EXPLORER',
        children: [
            {
                key: 'cosmos',
                icon: React.createElement(LaptopOutlined),
                label: 'COSMOS'
            },
            {
                key: 'osmosis',
                icon: React.createElement(LaptopOutlined),
                label: 'OSMOSIS'
            }
        ]
    },
    {
        key: 'chains',
        icon: React.createElement(NotificationOutlined),
        label: 'CHAINS',
        children: [
            {
                key: 'overview',
                icon: React.createElement(NotificationOutlined),
                label: 'Overview'
            },
            {
                key: 'ibc-network',
                icon: React.createElement(NotificationOutlined),
                label: 'IBC Network'
            },
            {
                key: 'dominance',
                icon: React.createElement(NotificationOutlined),
                label: 'Dominance'
            }
        ]
    },
    {
        key: 'validators',
        icon: React.createElement(LaptopOutlined),
        label: 'VALIDATORS',
        children: [
            {
                key: 'stats',
                icon: React.createElement(LaptopOutlined),
                label: 'Stats'
            }
        ]
    }
]

export const MENU_KEYS = [
    'explorer',
    'chains',
    'validators'
]