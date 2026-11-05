import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$season/teams/$abbreviation')({
  component: Outlet,
})
