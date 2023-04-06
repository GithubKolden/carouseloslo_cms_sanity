export default {
    name: 'project',
    title: 'Project',
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
            name: 'description',
            title: 'description',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'description',
                maxLength: 90,
            }
        },
    ]
}