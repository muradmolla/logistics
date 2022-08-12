import React from 'react';
import { useSectionsQuery } from '../hooks/useSections';
import Home from './Hero/Home';

export default function Hero() {

    const section = useSectionsQuery();
    return (
        <>
        <Home />
        </>
    );
}