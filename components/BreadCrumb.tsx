import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface BreadCrumb {
  title: string
  href: string
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
    <h2 className='section__heading'>
      <span className='section__breadCrumb'>
        <Link href='/'>Profile</Link>
      </span>
      {breadcrumbs.map((breadcrumb, i) => {
        return (
          <span className='section__breadCrumb' key={i}>
            <Link href={breadcrumb.href}>{breadcrumb.title}</Link>
          </span>
        )
      })}
    </h2>
  )
}

export default Breadcrumb
