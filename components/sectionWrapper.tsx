import Link from 'next/link'
import { Section } from '../styles'
import { ReactNode } from 'react'
import Breadcrumbs from './BreadCrumb'

interface Props {
  children: ReactNode
  title: string
  seeAllLink?: string
  breadCrumb?: boolean
}

const SectionWrapper = ({ children, title, seeAllLink, breadCrumb }: Props) => (
  <Section>
    <div className='section__inner'>
      <div className='section__top'>
        <h2 className='section__heading'>
          {!breadCrumb && title}
          {breadCrumb && <Breadcrumbs />}
        </h2>
        {seeAllLink && (
          <span className='section__see-all'>
            <Link href={seeAllLink}>See All</Link>
          </span>
        )}
      </div>
      {children}
    </div>
  </Section>
)

export default SectionWrapper
