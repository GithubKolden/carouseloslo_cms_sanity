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
            name: 'contact',
            title: 'Contact Information',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'telefon',
            title: 'Telefon',
            type: 'string',
        },
        {
            name: 'adresse',
            title: 'Adresse',
            type: 'string',
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