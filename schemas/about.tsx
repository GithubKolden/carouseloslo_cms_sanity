export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [ {type: 'image'} ],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'about',
            title: 'About',
            type: 'string',
            rows: 5,
        },
       
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'email',
                maxLength: 90,
            }
        },
    ]
}