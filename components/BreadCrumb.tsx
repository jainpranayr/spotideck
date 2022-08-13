import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface BreadCrumb {
  title: string
  href: string
}

const convertBreadcrumb = (path: string) => {
  if (path.match(/^.{23}$/) && path.startsWith('P')) {
    path = 'Playlist'
  } else if (path.match(/^.{23}$/) && path.startsWith('A')) {
    path = 'Artist'
  }
  return path
}

const Breadcrumb = () => {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState<BreadCrumb[]>()

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return {
          title: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        }
      })

      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }

  return (
    <>
      <span className='section__breadCrumb'>
        <Link href='/'>Profile</Link>
      </span>
      {breadcrumbs.map((breadcrumb, i) => {
        return (
          <span className='section__breadCrumb' key={i}>
            <Link href={breadcrumb.href}>
              {convertBreadcrumb(breadcrumb.title)}
            </Link>
          </span>
        )
      })}
    </>
  )
}

export default Breadcrumb
