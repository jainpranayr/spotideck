import Link from 'next/link'
import { Section } from '../styles'
import { ReactNode } from 'react'

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
          {breadCrumb && (
            <span className='section__breadCrumb'>
              <Link href='/'>Profile</Link>
            </span>
          )}
          <span>{title}</span>
        </h2>
        {seeAllLink && (
          <Link href={seeAllLink} className='section__see-all'>
            See All
          </Link>
        )}
      </div>

      {children}
    </div>
  </Section>
)

export default SectionWrapper
