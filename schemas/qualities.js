import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'qualities',
  title: 'Qualities',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
