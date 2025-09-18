import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Trophy } from 'lucide-react'
import React from 'react'

function page() {
const votingOptions = [
    {
      id: 1,
      title: "イケコン",
      description: "攻玉社一のイケメンは誰だ！",
      icon: <Users className="h-6 w-6" />,
      color: "bg-blue-500 hover:bg-blue-600",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSd862t58o1FbCIzx_SBr6BvPgKDZnxZ_-ExITWReqw4BGjm5A/viewform",
    },
    {
      id: 2,
      title: "ミスコン",
      description: "攻玉社一の美女は誰だ！",
      icon: <Users className="h-6 w-6" />,
      color: "bg-pink-500 hover:bg-pink-600",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeqrcoyIdc-W6Vox4HnAb47NuouVdSqKWDKN4ZFAhnnLc5GOg/viewform",
    },
    {
      id: 3,
      title: "ボディビルコンテスト",
      description: "攻玉社一のボディビルダーは誰だ！",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-purple-500 hover:bg-purple-600",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdzy83VHjmE2l24ePvNN8W9KEj0zb7EAW25DUW0DEDpcZHXsw/viewform",
    },
    {
      id: 4,
      title: "GYOKUSEN",
      description: "最も輝いている団体はどれだ！",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-amber-500 hover:bg-purple-600",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdeNJj2wj9WAxOMfi0PUTfmhodkVSbFBt3WIpcq1UPcGjx11g/viewform",
    },
  ]

  return (
    <div className=" bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className=" mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">輝玉祭2025 投票フォーム</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {votingOptions.map((option) => (
            <Card
              key={option.id}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 rounded-full ${option.color} flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {option.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{option.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  asChild
                  className={`w-full ${option.color} text-white border-0 font-medium py-6 text-lg group-hover:shadow-md transition-all duration-300`}
                >
                  <a href={option.href}>投票する</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">投票は各コンテスト一人一回まで有効です。慎重にお選びください。</p>
        </div>
      </div>
    </div>
  )
}

export default page