import {defineType, defineField} from 'sanity';

export const categoryType = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [ defineField ({
        name: 'title',
        title: 'Title',
        type: 'string',
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: {source: 'title'},
        validation: (rule) => rule.required(),
      }),
defineField({
    name: 'description',
    title: 'Description',
    type: 'text',
}),],
})