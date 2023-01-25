// ** Types Imports
import { ReactElement } from 'react'

export type Item = {
  name: string
  slug: string
}

export type Section = {
  title: string
  icon?: (isExpanded: boolean) => ReactElement
  items: Item[]
}

export type Category = {
  categoryName: string
  sections: Section[]
}

const sidebarNav: Category[] = [
  {
    categoryName: 'PAGES',
    sections: [
      {
        title: 'abc',
        icon: (isExpanded: boolean) => (
          <svg
            className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${isExpanded && 'rotate-180'}`}
            viewBox='0 0 12 12'
          >
            <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
          </svg>
        ),
        items: [
          {
            name: 'main',
            slug: '/'
          },
          {
            name: 'Analytics',
            slug: '/analytics'
          }
        ]
      }
    ]
  }
]

export default sidebarNav
