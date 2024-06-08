"use client";
import Image from "next/image";
import { useState } from "react";

import "./globals.css";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`flex flex-col ${isSidebarOpen ? "w-64" : "w-20"} bg-white shadow-lg transition-width duration-300`}>
        <div className="flex items-center justify-between p-4 border-b">
          <Image src="/images/oneai-logo.png" alt="OneAI Logo" width={isSidebarOpen ? 120 : 40} height={40} />
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-600 focus:outline-none">
            {isSidebarOpen ? "Collapse" : "Expand"}
          </button>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded transition">
              <span className="mr-4">🏠</span>
              {isSidebarOpen && <span>Overview</span>}
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded transition">
              <span className="mr-4">🤖</span>
              {isSidebarOpen && <span>Models</span>}
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded transition">
              <span className="mr-4">🔌</span>
              {isSidebarOpen && <span>Integrations</span>}
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded transition">
              <span className="mr-4">💵</span>
              {isSidebarOpen && <span>Billing</span>}
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navigation Bar */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <h1 className="text-xl font-semibold text-gradient">Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li className="text-gray-700 hover:text-gray-900 transition">Dashboard</li>
              <li className="text-gray-700 hover:text-gray-900 transition">API Keys</li>
              <li className="text-gray-700 hover:text-gray-900 transition">Usage</li>
              <li className="text-gray-700 hover:text-gray-900 transition">Settings</li>
            </ul>
          </nav>
        </header>

        {/* Overview Section */}
        <main className="flex-1 p-4 overflow-y-auto">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 shadow-lg rounded-lg transition hover:shadow-xl">
              <h2 className="text-lg font-semibold mb-2">API Calls</h2>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg transition hover:shadow-xl">
              <h2 className="text-lg font-semibold mb-2">Active Models</h2>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg transition hover:shadow-xl">
              <h2 className="text-lg font-semibold mb-2">Usage Statistics</h2>
              <p className="text-2xl font-bold">76%</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg transition hover:shadow-xl">
              <h2 className="text-lg font-semibold mb-2">API Status</h2>
              <p className="text-2xl font-bold text-green-500">Operational</p>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="bg-white p-4 shadow-lg rounded-lg transition hover:shadow-xl">
              <ul>
                <li className="border-b py-2">API call to Model X</li>
                <li className="border-b py-2">New API key generated</li>
                <li className="border-b py-2">Model Y updated</li>
                <li className="py-2">Billing information updated</li>
              </ul>
            </div>
          </section>

          {/* API Status */}
          <section>
            <h2 className="text-xl font-semibold mb-4">API Status</h2>
            <div className="bg-white p-4 shadow-lg rounded-lg transition hover:shadow-xl">
              <ul>
                <li className="border-b py-2">Provider A: <span className="text-green-500">Operational</span></li>
                <li className="border-b py-2">Provider B: <span className="text-yellow-500">Degraded</span></li>
                <li className="border-b py-2">Provider C: <span className="text-red-500">Down</span></li>
                <li className="py-2">Provider D: <span className="text-green-500">Operational</span></li>
              </ul>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="p-4 bg-white shadow-md">
          <div className="flex justify-between">
            <div>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition">Documentation</a>
              <a href="#" className="ml-4 text-gray-700 hover:text-gray-900 transition">Support</a>
              <a href="#" className="ml-4 text-gray-700 hover:text-gray-900 transition">Terms of Service</a>
            </div>
            <p className="text-gray-700">&copy; 2023 OneAI. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}