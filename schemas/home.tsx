export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'array',
            of: [ {type: 'image'} ],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
    ]
}