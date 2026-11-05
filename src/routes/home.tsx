import { createFileRoute } from '@tanstack/react-router'

import HomeHeader from '../components/home/HomeHeader'
import TeamDirectory from '#/components/home/TeamDirectory'

export const Route = createFileRoute('/home')({
  component: Home,
})

function Home() {
  return (
    <main className="flex flex-col gap-8">
      <HomeHeader />
      <TeamDirectory />
    </main>
  )
}
