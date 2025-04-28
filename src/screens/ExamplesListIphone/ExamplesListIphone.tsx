import React, { useState } from "react";
import { Avatar, AvatarImage } from "../../components/ui/avatar";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const ExamplesListIphone = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<'podcasts' | 'functions'>('podcasts');

  // Navigation tab data
  const navigationTabs = [
    { icon: "🎧", label: "Listen Now", active: true, color: "#7223d8" },
    { icon: "🎵", label: "Browse", active: false, color: "#8e8e93" },
    { icon: "📚", label: "Library", active: false, color: "#8e8e93" },
    { icon: "🔍", label: "Search", active: false, color: "#8e8e93" },
  ];

  // Updated podcasts to match the Figma design
  const podcasts = [
    { 
      title: "Top Charts", 
      image: "/api/placeholder/400/320",
      color: "#b5bd00", 
      textColor: "white"
    },
    { 
      title: "Audiobooks", 
      image: "/api/placeholder/400/320",
      color: "#ff5a5f",
      textColor: "white"
    },
    { 
      title: "Suspense", 
      image: "/api/placeholder/400/320",
      color: "#4d47ff",
      textColor: "white"
    },
    { 
      title: "Film & TV Adaptations", 
      image: "/api/placeholder/400/320",
      color: "#ff6b8b",
      textColor: "white"
    },
    { 
      title: "Web Novels", 
      image: "/api/placeholder/400/320",
      color: "#cd5dc3",
      textColor: "white"
    },
    { 
      title: "Podcasts in English", 
      image: "/api/placeholder/400/320",
      color: "#14b8a6",
      textColor: "white",
      icon: "e"
    },
    { 
      title: "Language Learning", 
      image: "/api/placeholder/400/320",
      color: "#14b8a6",
      textColor: "white",
      icon: "A あ"
    },
    { 
      title: "Education", 
      image: "/api/placeholder/400/320",
      color: "#14b8a6",
      textColor: "white",
      icon: "🎓"
    }
  ];

  const functions = [
    {
      title: "Alarm Settings",
      description: "Set alarm sounds, times, and behaviors",
      icon: "⏰",
      color: "#FF6B6B"
    },
    {
      title: "Downloads",
      description: "Manage podcast episodes and storage",
      icon: "⬇️",
      color: "#4ECDC4"
    },
    {
      title: "Playlists",
      description: "Create and manage custom playlists",
      icon: "📝",
      color: "#45B7D1"
    },
    {
      title: "Comments",
      description: "Leave ratings and join discussions",
      icon: "💬",
      color: "#96CEB4"
    },
    {
      title: "Subscriptions",
      description: "Manage podcast subscriptions",
      icon: "📥",
      color: "#D4A373"
    },
    {
      title: "Account",
      description: "Manage profile and preferences",
      icon: "👤",
      color: "#00BBF9"
    }
  ];

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="overflow-x-hidden w-[402px] h-[874px]">
        <div className="relative w-[430px] h-[874px] left-[-13px]">
          <Card className="flex flex-col w-[402px] h-[874px] items-center absolute top-0 left-3.5 bg-backgroundstertiary rounded-[44px] overflow-hidden border-none">
            <CardContent className="p-0 w-full">
              {/* Header section */}
              <header className="flex flex-col h-[156px] items-start relative self-stretch w-full">
                <div className="absolute w-[402px] h-[156px] top-0 left-0 bg-[#ffffffbf] border-b-[0.33px] [border-bottom-style:solid] border-[#0000004c] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]" />

                {/* Status bar */}
                <div className="flex flex-col w-[402px] h-[54px] items-start pt-[21px] pb-0 px-0 relative">
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center justify-center gap-2.5 pl-4 pr-1.5 py-0 relative flex-1 grow">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                        9:41
                      </div>
                    </div>

                    <div className="relative w-[124px] h-2.5" />

                    <div className="flex items-center justify-center gap-[7px] pl-1.5 pr-4 py-0 relative flex-1 grow">
                      <img
                        className="relative w-[19.2px] h-[12.23px]"
                        alt="Cellular connection"
                        src="/cellular-connection.svg"
                      />

                      <img
                        className="relative w-[17.14px] h-[12.33px]"
                        alt="Wifi"
                        src="/wifi.svg"
                      />

                      <div className="relative w-[27.33px] h-[13px]">
                        <div className="absolute w-[25px] h-[13px] top-0 left-0 rounded-[4.3px] border border-solid border-[#00000059]">
                          <div className="relative w-[21px] h-[9px] top-px left-px bg-black rounded-[2.5px]" />
                        </div>

                        <img
                          className="absolute w-px h-1 top-[5px] left-[26px]"
                          alt="Cap"
                          src="/cap.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Search title */}
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-2.5 pt-[3px] pb-2 px-4 relative self-stretch w-full flex-[0_0_auto]">
                    <h1 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-black text-[34px] tracking-[0.40px] leading-[41px] whitespace-nowrap">
                      Search
                    </h1>
                  </div>
                </div>
              </header>

              {/* Search bar */}
              <div className="flex w-[370px] items-center px-2 py-[7px] absolute top-[106px] left-[30px] bg-[#7878801f] rounded-[10px]">
                <div className="relative w-[25px] [font-family:'Inter',Helvetica] font-normal text-[#3c3c4399] text-[17px] tracking-[0] leading-[22px]">
                  🔍
                </div>
                <Input
                  className="flex-1 h-[22px] [font-family:'Inter',Helvetica] font-normal text-[#3c3c4399] text-[17px] tracking-[-0.43px] leading-[22px] border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#3c3c4399]"
                  placeholder="Search"
                />
              </div>

              {/* Module tabs */}
              <div className="flex w-[370px] items-center gap-4 absolute top-[156px] left-[30px]">
                <button 
                  className={`flex-1 py-2 px-4 rounded-[10px] text-white font-semibold ${activeTab === 'podcasts' ? 'bg-[#7223d8]' : 'bg-[#8e8e93]'}`}
                  onClick={() => setActiveTab('podcasts')}
                >
                  Podcasts
                </button>
                <button 
                  className={`flex-1 py-2 px-4 rounded-[10px] text-white font-semibold ${activeTab === 'functions' ? 'bg-[#7223d8]' : 'bg-[#8e8e93]'}`}
                  onClick={() => setActiveTab('functions')}
                >
                  Functions
                </button>
              </div>

              {/* Content area */}
              <div className="absolute top-[206px] left-[30px] w-[370px] grid grid-cols-2 gap-4 pb-[200px] overflow-y-auto">
                {activeTab === 'podcasts' ? (
                  podcasts.map((podcast, index) => (
                    <div 
                      key={index} 
                      className="rounded-lg overflow-hidden shadow-md"
                      style={{ backgroundColor: podcast.color }}
                    >
                      <div className="p-6 h-32 flex flex-col justify-between">
                        {podcast.icon && (
                          <div className="text-2xl mb-2" style={{ color: podcast.textColor }}>
                            {podcast.icon}
                          </div>
                        )}
                        <h3 
                          className="font-semibold text-lg" 
                          style={{ color: podcast.textColor }}
                        >
                          {podcast.title}
                        </h3>
                      </div>
                    </div>
                  ))
                ) : (
                  functions.map((func, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
                      style={{ borderLeft: `4px solid ${func.color}` }}
                    >
                      <div className="text-2xl mb-2">{func.icon}</div>
                      <h3 className="font-semibold text-sm mb-1">{func.title}</h3>
                      <p className="text-xs text-gray-600">{func.description}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Avatar */}
              <div className="inline-flex flex-col items-start absolute top-[57px] left-[361px]">
                <div className="inline-flex flex-col h-[41px] items-center justify-center relative">
                  <Avatar className="w-[34px] h-[34px] rounded-[100px]">
                    <AvatarImage src="/api/placeholder/400/320" alt="User avatar" />
                  </Avatar>
                </div>
              </div>

              {/* Now playing bar */}
              <div className="inline-flex flex-col items-start absolute top-[727px] left-0">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col h-16 items-start pt-0 pb-8 px-0 relative self-stretch w-full">
                    <div className="flex items-center pl-5 pr-[22px] py-2 relative self-stretch w-full flex-[0_0_auto] mb-[-32.00px] z-[1]">
                      <div className="flex items-center gap-2 relative flex-1 grow">
                        <img
                          className="relative w-12 h-12 z-[2] object-cover"
                          alt="Cover"
                          src="/cover.png"
                        />

                        <div className="flex flex-col items-start justify-center pt-0.5 pb-0 px-0 relative flex-1 grow z-[1]">
                          <div className="flex flex-col h-5 items-start relative self-stretch w-full">
                            <div className="relative self-stretch mt-[-1.00px] font-regular-15pt font-medium text-black text-sm tracking-normal leading-5">
                              Why You Should Sleep 16 Hours a Day
                            </div>
                          </div>

                          <div className="relative self-stretch font-regular-15pt font-normal text-[#3c3c4399] text-xs tracking-normal leading-4">
                            May 15
                          </div>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                        <button className="flex flex-col w-[27px] h-[27px] items-center relative">
                          <div className="relative w-[25px] mt-[-1.00px] font-semibold text-black text-xl text-center">
                            ⏸️
                          </div>
                        </button>

                        <button className="flex flex-col w-[27px] h-[27px] items-center relative">
                          <div className="relative w-[27px] mt-[-1.00px] font-semibold text-black text-xl text-center">
                            ⏭️
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="absolute w-[430px] h-16 top-0 left-0 z-0 bg-[#ffffffb2] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] shadow-md" />
                  </div>
                </div>

                {/* Bottom navigation */}
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="flex w-[430px] pt-0 pb-8 px-0 flex-col items-start relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start absolute top-[49px] left-0 z-[3]">
                      <div className="flex flex-col w-[430px] h-[34px] items-center justify-end pt-0 pb-2 px-0 relative">
                        <div className="relative w-[154px] h-[5px] bg-black rounded-[100px] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)]" />
                      </div>
                    </div>

                    <Separator className="w-[430px] h-px absolute -top-px left-0 z-[2] bg-[#c7c7cc]" />

                    <nav className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto] z-[1]">
                      {navigationTabs.map((tab, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center relative flex-1 grow"
                        >
                          <div
                            className={`flex flex-col h-[51px] items-center gap-0.5 pt-1 pb-0 px-0 relative self-stretch w-full ${!tab.active ? "opacity-90" : ""}`}
                          >
                            <div
                              className={`relative w-fit mt-[-1.00px] text-2xl`}
                              style={{ color: tab.color }}
                            >
                              {tab.icon}
                            </div>
                            <div
                              className={`relative self-stretch font-semibold text-xs text-center tracking-tight`}
                              style={{ color: tab.color }}
                            >
                              {tab.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </nav>

                    <div className="absolute w-[430px] h-[83px] top-0 left-0 z-0 bg-[#ffffffb2] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] shadow-md" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Home indicator */}
          <div className="absolute w-[402px] h-[34px] top-[840px] left-[13px]">
            <div className="relative w-36 h-[5px] top-[21px] left-[129px] bg-black rounded-[100px] rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
};