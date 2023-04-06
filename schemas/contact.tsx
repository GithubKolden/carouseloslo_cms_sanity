export default {
    name: 'contact',
    title: 'Contact',
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
            name: 'information',
            title: 'Information',
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