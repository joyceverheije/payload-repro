import type { Block } from "payload/types";

const titleBlock: Block = {
    slug: "titleBlock",
    fields: [
        {
            type: "text",
            name: "title",
            localized: true,
        },
    ]
};

export default titleBlock;
