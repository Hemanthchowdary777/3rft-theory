import {defineType, defineField} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Products',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),

    defineField({
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
    }),

    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Men', value: 'men'},
          {title: 'Women', value: 'women'},
          {title: 'Jerseys', value: 'jerseys'},
          {title: 'Accessories', value: 'accessories'},
        ],
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image'}],
    }),

    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: ['XS','S','M','L','XL','XXL'],
      },
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'newArrival',
      title: 'New Arrival',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'freeShipping',
      title: 'Free Shipping',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'condition',
      title: 'Condition',
      type: 'string',
      options: {
        list: [
          {title:'New', value:'new'},
          {title:'Like New', value:'like-new'},
          {title:'Vintage', value:'vintage'},
        ],
      },
    }),

    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
      initialValue: 1,
    }),
  ],
})