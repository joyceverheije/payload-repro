import { CollectionConfig } from 'payload/types'
import textBlock from "../blocks/Text";
import titleBlock from "../blocks/Title";

const Pages: CollectionConfig = {
    slug: "pages",
    admin: {
        useAsTitle: "title"
    },
    fields: [
        {
            type: "text",
            name: "title",
            localized: true
        },
        {
            type: "blocks",
            name: "heroBlocks",
            blocks: [titleBlock]
        },
        {
            type: "blocks",
            name: "blocks",
            blocks: [titleBlock]
        }
    ]
}

export default Pages
