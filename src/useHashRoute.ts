import { useEffect, useState } from 'react'

export type Route = { name: 'home' } | { name: 'project'; slug: string }

function parseHash(): Route {
  const match = window.location.hash.match(/^#\/projetos\/([\w-]+)$/)
  return match ? { name: 'project', slug: match[1] } : { name: 'home' }
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash())

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}
