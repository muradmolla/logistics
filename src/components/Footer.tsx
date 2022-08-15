import React from "react";
import { useImageUrl } from "../hooks/useImage";

export default function Footer() {

    const logo = useImageUrl('Logo.png')
    return (
        <footer className="bg-blue border-t-2 border-orange">
            <div className="container mx-auto">
            <div className="flex justify-between items-center py-3">
                <div className="text-xs text-gray"><img src={logo} alt="logo"className="max-w-none h-10"/> is a product of Qimia Group</div>
                <div className="text-sm">©Copyright Qimia GmbH</div>
            </div>
            </div>
        </footer>
    )
}