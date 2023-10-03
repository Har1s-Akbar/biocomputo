import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'questions',
  title: 'Questions',
  type: 'document',
  fields: [
    defineField({
        name:'title',
        title:'Title',
        type:'string'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'string',
    }),
    defineField({
      name: 'ponits',
      title: 'Points',
      type: 'array',
      of:[{type: 'string'}]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
