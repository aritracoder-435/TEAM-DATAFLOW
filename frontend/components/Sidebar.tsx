"use client"

import { LayoutDashboard, Activity, Bell, Trophy, Settings } from "lucide-react"

export default function Sidebar({ setActiveTab }:any) {

  return (

    <div className="w-64 h-screen bg-white border-r p-6">

      <h2 className="text-xl font-bold text-green-600 mb-10">
        Wellness Nudge
      </h2>

      <ul className="space-y-6">

        {/* Dashboard */}
        <li
          onClick={() => setActiveTab("dashboard")}
          className="flex items-center gap-3 text-green-600 font-semibold cursor-pointer hover:text-green-700"
        >
          <LayoutDashboard size={20}/> Dashboard
        </li>

        {/* Activity */}
        <li
          onClick={() => setActiveTab("activity")}
          className="flex items-center gap-3 text-gray-600 cursor-pointer hover:text-green-600"
        >
          <Activity size={20}/> Activity
        </li>

        {/* Nudges */}
        <li
          onClick={() => setActiveTab("nudges")}
          className="flex items-center gap-3 text-gray-600 cursor-pointer hover:text-green-600"
        >
          <Bell size={20}/> Nudges
        </li>

        {/* Goals */}
        <li
          onClick={() => setActiveTab("goals")}
          className="flex items-center gap-3 text-gray-600 cursor-pointer hover:text-green-600"
        >
          <Trophy size={20}/> Goals
        </li>

        {/* Settings */}
        <li
          onClick={() => setActiveTab("settings")}
          className="flex items-center gap-3 text-gray-600 cursor-pointer hover:text-green-600"
        >
          <Settings size={20}/> Settings
        </li>

      </ul>

      {/* Wellness Stats */}
      <div className="mt-10 space-y-3">

        <div className="bg-gray-100 p-3 rounded-lg">
          💧 Water 6/8 glasses
        </div>

        <div className="bg-gray-100 p-3 rounded-lg">
          🔥 Streak 12 Days
        </div>

        <div className="bg-gray-100 p-3 rounded-lg">
          ⭐ Points 1240
        </div>

      </div>

    </div>

  )

}