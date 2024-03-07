import type { Block } from "payload/types";

const textBlock: Block = {
    slug: "textBlock",
    fields: [
        {
            type: "text",
            name: "text",
            localized: true,
        },
    ]
};

export default textBlock;
