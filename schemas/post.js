import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cover',
  title: 'Cover',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options:{
        hotspot: true
      }
    }),
    defineField({
      name:'icons',
      title: 'Icons',
      type :'array',
      of:[{type: 'image'}]
    })
  ],

  preview: {
    select: {
      media: 'image',
    },
  },
})
