import React from 'react'
import {Icon} from '@ui-kitten/components'

export const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

export const FavIcon = (props) => (
    <Icon {...props} name='star' />
);

export const FavIconEmpty = (props) => (
    <Icon {...props} name='star-outline' />
);

export const HomeIcon = (props) => (
    <Icon {...props} name='home' />
);

export const renderItemIcon = (props) => (
    <Icon {...props} name='person'/>
);
