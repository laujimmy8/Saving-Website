"use client";

import Link from "next/link";
import React from "react";
import { Button, Card } from "antd";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function Home() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="p-4">
                <h1 className="text-2xl font-bold text-gray-800">Welcome!</h1>
            </header>
            <main className="flex-grow flex items-center justify-center">
                <div className="flex flex-row" style={{ gap: "50px" }}>
                    <Button
                        type="default"
                        size="large"
                        style={{ width: "300px", height: "300px" }}
                        onClick={() => {
                            router.push("/investments");
                        }}
                    >
                        Spendings
                    </Button>
                    <Button
                        type="default"
                        size="large"
                        style={{ width: "300px", height: "300px" }}
                        onClick={() => {
                            router.push("/investments");
                        }}
                    >
                        Assets
                    </Button>
                    <Button
                        type="default"
                        size="large"
                        style={{ width: "300px", height: "300px" }}
                        onClick={() => {
                            router.push("/investments");
                        }}
                    >
                        Investments
                    </Button>
                </div>
            </main>
        </div>
    );
}
