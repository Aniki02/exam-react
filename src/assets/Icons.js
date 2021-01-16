import React from 'react'
import {Icon} from '@ui-kitten/components'

export const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

export const ViewedIcon = (props) => (
    <Icon {...props} name='eye' />
);

export const ViewedIconEmpty = (props) => (
    <Icon {...props} name='eye-outline' />
);

export const HomeIcon = (props) => (
    <Icon {...props} name='home' />
);

export const renderItemIcon = (props) => (
    <Icon {...props} name='person'/>
);
